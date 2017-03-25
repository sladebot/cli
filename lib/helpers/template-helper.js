'use strict';

var _        = require('lodash');
var beautify = require('js-beautify');
var helpers  = require(__dirname);

module.exports = {
  render: function (path, locals, options) {
    options = _.assign({
      beautify: true,
      indent_size: 2,
      preserve_newlines: false
    }, options || {});

    var template = helpers.asset.read(path);
    var content  = _.template(template)(locals || {});

    if (options.beautify) {
      content = beautify(content, options);
    }

    return content;
  }
};
