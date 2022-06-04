module.exports = {
    projectRoot: __dirname,
    watchFolders: [__dirname],

    // We need to make sure that only one version is loaded for peerDependencies
    // So we blacklist them at the root, and alias them to the versions in example's node_modules

    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};
