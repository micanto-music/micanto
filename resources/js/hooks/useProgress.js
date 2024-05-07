import { useEffect, useState } from 'react';
import { Event } from '../assets/constants';
import { useTrackPlayerEvents } from './useTrackPlayerEvents';
import MicantoPlayer from "../services/MicantoPlayer";

const INITIAL_STATE = {
  position: 0,
  duration: 0,
  buffered: 0,
};

/**
 * Poll for track progress for the given interval (in miliseconds)
 * @param updateInterval - ms interval
 */
export function useProgress(updateInterval = 1000) {
  const [state, setState] = useState(INITIAL_STATE);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], () => {
    setState(INITIAL_STATE);
  });

  useEffect(() => {
    let mounted = true;

    const update = async () => {
      try {
        const { position, duration, buffered } = await MicantoPlayer.getProgress();
        if (!mounted) return;

        setState((state) =>
          position === state.position &&
          duration === state.duration &&
          buffered === state.buffered
            ? state
            : { position, duration, buffered }
        );
      } catch {
        // these method only throw while you haven't yet setup, ignore failure.
      }
    };

    const poll = async () => {
      await update();
      if (!mounted) return;
      await new Promise((resolve) => setTimeout(resolve, updateInterval));
      if (!mounted) return;
      poll();
    };

    poll();

    return () => {
      mounted = false;
    };
  }, [updateInterval]);

  return state;
}
