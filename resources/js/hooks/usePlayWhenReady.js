import { useState, useEffect } from 'react';
import { Event } from '../assets/constants';
import {EventEmitter} from "../services/EventEmitter";
import MicantoPlayer from "../services/MicantoPlayer";

export const usePlayWhenReady = () => {
  const [playWhenReady, setPlayWhenReady] = useState(undefined);
  useEffect(() => {
    let mounted = true;

      MicantoPlayer.getPlayWhenReady()
      .then((initialState) => {
        if (!mounted) return;
        // Only set the state if it wasn't already set by the Event.PlaybackPlayWhenReadyChanged listener below:
        setPlayWhenReady((state) => state ?? initialState);
      })
      .catch(() => {
        /** getState only throw while you haven't yet setup, ignore failure. */
      });

      const sub = EventEmitter.subscribe(
          Event.PlaybackPlayWhenReadyChanged,
          (event) => {
              setPlayWhenReady(event.playWhenReady);
          }
      );

    // const sub = addEventListener(
    //   Event.PlaybackPlayWhenReadyChanged,
    //   (event) => {
    //     setPlayWhenReady(event.playWhenReady);
    //   }
    // );

    return () => {
      mounted = false;
        EventEmitter.unsubscribe(sub);
    };
  }, []);

  return playWhenReady;
};
