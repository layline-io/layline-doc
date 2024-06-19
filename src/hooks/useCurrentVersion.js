// src/hooks/useCurrentVersion.js
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

const useCurrentVersion = () => {
    const versionMetadata = useActiveDocContext();
    // console.log('versionMetadata:', versionMetadata);
    return versionMetadata;
};

export default useCurrentVersion;
