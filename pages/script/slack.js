// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-3366149681558-3455644767155-Veoc9iEQ09LySXzDUfCk3RmX", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

export async function publishMessage(id, text) {
    try {
      // Call the chat.postMessage method using the built-in WebClient
      const result = await client.chat.postMessage({
        // The token you used to initialize your app
        channel: id,
        text: text
        // You could also use a blocks[] array to send richer content
      });
  
      // Print result, which includes information about the message (like TS)
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  }