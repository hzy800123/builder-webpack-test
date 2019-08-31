
const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {
        console.log("baseConfig.entry.index - ", baseConfig.entry.index);
        assert.equal(baseConfig.entry.index.indexOf('builder-webpack-test/test/smoke/template/src/index/index.js') > -1, true);
        assert.equal(baseConfig.entry.search.indexOf('builder-webpack-test/test/smoke/template/src/search/index.js') !== -1, true);
    });
});