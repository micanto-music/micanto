import { useEffect, useState } from 'react';
import { Event } from '../assets/constants';
import {EventEmitter} from "../services/EventEmitter";
import MicantoPlayer from "../services/MicantoPlayer";

/**
 * Get current playback state and subsequent updates.
 *
 * Note: While it is fetching the initial state from the native module, the
 * returned state property will be `undefined`.
 * */
export const usePlaybackState = () => {
  const [playbackState, setPlaybackState] = useState({state: undefined});
  useEffect(() => {
    let mounted = true;

      MicantoPlayer.getPlaybackState()
      .then((fetchedState) => {
        if (!mounted) return;

        // Only set the state if it wasn't already set by the Event.PlaybackState listener below:
        setPlaybackState((currentState) =>
          currentState.state ? currentState : fetchedState
        );
      })
      .catch(() => {
        /** getState only throw while you haven't yet setup, ignore failure. */
      });

      const sub = EventEmitter.subscribe(Event.PlaybackState, (state) => {
          setPlaybackState({state:state});
      })

    return () => {
      mounted = false;
        EventEmitter.unsubscribe(sub);
    };
  }, []);

  return playbackState;
};
