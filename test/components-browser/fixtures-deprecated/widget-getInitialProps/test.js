var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {
        name: 'Frank'
    });
    expect(component.el.innerHTML).to.contain('Hello FRANK!');
};