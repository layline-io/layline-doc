// src/components/SinceVersion.js
import React from 'react';

/**
 * SinceVersion component - displays a version badge indicating when a feature was introduced.
 * 
 * Usage:
 * ### PKCE Support <SinceVersion version="2.5.16" />
 * 
 * Or with optional label:
 * ### Feature Name <SinceVersion version="2.5.16" label="New in" />
 */
const SinceVersion = ({ version, label = "Since" }) => {
    return (
        <span 
            style={{
                display: 'inline-block',
                padding: '2px 8px',
                marginLeft: '8px',
                fontSize: '0.75em',
                fontWeight: 600,
                lineHeight: '1.4',
                color: '#fff',
                backgroundColor: '#1abc9c',
                borderRadius: '12px',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
            }}
            title={`This feature is available since version ${version}`}
        >
            {label} {version}
        </span>
    );
};

export default SinceVersion;