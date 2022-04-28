export async function publishMessage(id, text) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Credentials", "true" )
  myHeaders.append("Access-Control-Allow-Origin", "*" )
  myHeaders.append("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT" )
  myHeaders.append("Access-Control-Allow-Headers",  "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
  myHeaders.append("Authorization", "Bearer xoxb-3366149681558-3456956778162-5YzbOjTUoxhmwQJxZ673umSz");

  var raw = JSON.stringify({
    "channel": "C03AJ664NKH",
    "text": "Un utilisateur à fait une demande de création de token"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://slack.com/api/chat.postMessage", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

  export default function Slack() {
      return (<></>)
  }