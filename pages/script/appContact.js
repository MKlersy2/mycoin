import React from "react";
import $ from 'jquery';
import contact from '../../styles/contact.module.css'
export default class Layout extends React.Component {
    componentDidMount() {
        $('body').on('change', `.${contact.formGlobal}`, function() {
            if($(`.${contact.formGlobal}`)[0].checkValidity()) {
                $(`#sendMessage`).removeClass(`${contact.unselectable}`);
            } else {
                $(`#sendMessage`).addClass(`${contact.unselectable}`);
            }
        })

        $('body').on('click', `#sendMessage`, function() {
            const name = $('#name').val();
            const email = $('#email').val();
            const object = $('#object').val();
            const texte = $('#texte').val();


            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("message", `Prise de contact sur le site:
De: ${name} ${email}
Sujet: ${object}

${texte}`);
            urlencoded.append("channel", "C03AYPV8926");
            urlencoded.append("token", process.env.SLACK_BOT_TOKEN);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };

            fetch(process.env.BACKEND + "commandes/new.php", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        })
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}