export async function publishMessage(channel, text) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("message", text);
  urlencoded.append("channel", channel);
  urlencoded.append("token", "xoxb-3366149681558-3456956778162-vhbMmIqp2JHMPQwlNj8cSjgy");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch(process.env.BACKEND+"commandes/new.php", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

  export default function Slack() {
      return (<></>)
  }