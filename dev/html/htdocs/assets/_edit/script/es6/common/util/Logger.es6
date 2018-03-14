
class Logger
{
	
	static debug(string_) {
		console.debug(string_);
	}

	static info(string_) {
		console.info(string_);
	}

	static warn(string_) {
		console.warn(string_);
	}

	static error(string_) {
		console.error(string_);
	}
}

module.exports = Logger;
