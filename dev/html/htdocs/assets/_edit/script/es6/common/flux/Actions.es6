var Reflux = require("Reflux");
var Messages = require("$root/common/flux/Messages.es6");

var Actions = Reflux.createActions([
		Messages.CHANGE_LANGUAGE,
		Messages.START_MORE_CONTETNS
]);

module.exports = Actions;
