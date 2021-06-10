const { WebClient, LogLevel } = require('@slack/web-api');
const client = new WebClient(
  'xoxb-692633197331-2129812001286-0bYKE9181aZXXM4iDFxlVF3N',
  {
    // LogLevel can be imported and used to make debugging simpler
    logLevel: LogLevel.DEBUG,
  },
);

const channelId = 'C0240NPJVS7';

const send = async (message) => {
  try {
    client.chat.postMessage({
      text: message,
      channel: channelId,
    });
  } catch (error) {
    // console.error(error);
  }
};

export default send;
