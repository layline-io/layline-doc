// src/components/VersionedLink.js
import React from 'react';
import useCurrentVersion from '../hooks/useCurrentVersion';

const VersionedLink = ({ to, children }) => {
    const currentVersion = useCurrentVersion();
    // console.log('currentVersion:', currentVersion);
    // console.log('path:', currentVersion.activeVersion.path);


    let targetPath = to;
    if (currentVersion.activeVersion.path !== '/') {
        targetPath = currentVersion.activeVersion.path + to;
    }
    const versionedLink = `${targetPath}`;

    return <a href={versionedLink}>{children}</a>;
};

export default VersionedLink;
