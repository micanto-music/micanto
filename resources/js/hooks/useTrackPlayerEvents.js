import { useEffect, useRef } from 'react';
import {EventEmitter} from "../services/EventEmitter";

/**
 * Attaches a handler to the given TrackPlayer events and performs cleanup on unmount
 * @param events - TrackPlayer events to subscribe to
 * @param handler - callback invoked when the event fires
 */
export const useTrackPlayerEvents = (events, handler) => {

    const savedHandler = useRef(handler);
    savedHandler.current = handler;

    useEffect(() => {
        const subs = events.map((type) => {
            return EventEmitter.subscribe(type, (payload) => {
                savedHandler.current({ ...payload, type });
            });
        });
        return () => {
            subs.forEach((sub) => EventEmitter.unsubscribe(sub));
        }
    }, events);
};
