import React, { Fragment } from 'react';

import useMediaSession from "../../hooks/useMediaSession";

const MediaSession = (props) => {
    const { children, ...rest } = props;
    useMediaSession(rest);
    return <Fragment>{children || null}</Fragment>;
};

export default MediaSession;
