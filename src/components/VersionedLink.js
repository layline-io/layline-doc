// src/components/VersionedLink.js
import React from 'react';
import useCurrentVersion from '../hooks/useCurrentVersion';

const VersionedLink = ({ to, children }) => {
    const currentVersion = useCurrentVersion();
    // console.log('currentVersion:', currentVersion);

    const versionedLink = `${currentVersion.activeVersion.path}/${to}`;

    return <a href={versionedLink}>{children}</a>;
};

export default VersionedLink;
