const contextLoader = require.context('src/contents', false, /\.md$/);

export default contextLoader;
