import React from "react";
import $ from 'jquery';
import styles from '../../styles/Home.module.css'

export default class Layout extends React.Component {
    componentDidMount() {
        $('body').on('keyup', '#newsletter-email', function() {
            if($('#newsletter-email')[0].checkValidity()) {
                $('#newsletter-send').removeClass(styles.unselectable)
            } else {
                $('#newsletter-send').addClass(styles.unselectable)
            }
        })
        $('body').on('click', `#newsletter-send`, function() {
            const email = $('#newsletter-email').val();
            $('#newsletter-send').addClass(styles.unselectable)
            $('#newsletter-send').html('In progress');

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("message", `Nouveau subscriber: ${email}`);
            urlencoded.append("channel", "C03F7HM3XDX");

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };
            
            fetch(process.env.BACKEND + "newsletter/newSubscriber.php", requestOptions)
            .then(response => response.text())
            .then(result => $('#newsletter-send').html('Sent'))
            .catch(error => $('#newsletter-send').html('Error'));
        })
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}