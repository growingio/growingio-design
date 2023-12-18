exports.format = function (messages) {
  const results = {};
  for (const [id, message] of Object.entries(messages)) {
    if (message.defaultMessage) {
      results[id] = message.defaultMessage;
    } else if (!results[id]) {
      results[id] = '';
    }
  }
  return results;
};
