import React from "react";
import $ from 'jquery'
import { publishMessage } from "../api/slack";

export default class Layout extends React.Component {
    componentDidMount() {
        $('body').on('click', '#createToken', function() {
            publishMessage('C03AJ664NKH', 'Un utilisateur à fait une demande de création de token')
        })
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}