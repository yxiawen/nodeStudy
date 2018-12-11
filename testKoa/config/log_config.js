module.exports = {
  "appenders": {
    "access": {
      "type": "dateFile",
      "filename": "logs/access.log",
      "pattern": "-yyyy-MM-dd"
    },
    // "rule-console": {
    //   "type": "console"
    // },
    "rule-response": {
      "type": "dateFile",
      "filename": "logs/response/server-",
      "encoding": "utf-8",
      "maxLogSize": 10000000,
      "numBackups": 3,
      "pattern": "yyyy-MM-dd.log",
      "alwaysIncludePattern": true
    },
    "rule-error": {
      "type": "dateFile",
      "filename": "logs/error/error-",
      "encoding": "utf-8",
      "maxLogSize": 1000000,
      "numBackups": 3,
      "pattern": "yyyy-MM-dd.log",
      "alwaysIncludePattern": true
    },
  },
  "categories": {
    "rule-response": {
      "appenders": ['rule-response'],
      "level": 'info'
    },
    "rule-error": {
      "appenders": ['rule-error'],
      "level": 'error'
    },
    "default": {
      "appenders": [
        // "rule-console",
        "rule-response",
        "rule-error"
      ],
      "level": "trace"
    },

    "http": {
      "appenders": [
        "access"
      ],
      "level": "info"
    }
  }
}