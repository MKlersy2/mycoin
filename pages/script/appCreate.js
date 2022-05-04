import React from "react";
import $ from 'jquery'
import { publishMessage } from "../api/slack";
import create from '../../styles/create.module.css'
export default class Layout extends React.Component {
    componentDidMount() {
        $('body').on('change', `.${create.formGlobal}`, function() {
            if($(`.${create.formGlobal}`)[0].checkValidity()) {
                $(`#createToken`).removeClass(`${create.unselectable}`);
            } else {
                $(`#createToken`).addClass(`${create.unselectable}`);
            }
        })
        $('body').on('click', '#createToken', function() {
            const blockchain = $(`.${create.active}`).html();
            const name = $(`[name="name"]`).val();
            const symbol = $(`[name="symbol"]`).val();
            const decimals = $(`[name="decimals"]`).val();
            const mint = $(`[name="mint"]`).val();
            const freeze = $(`[name="freeze"]`).val();
            const pause = $(`[name="pause"]`).val();
            const blacklist = $(`[name="blacklist"]`).val();



            publishMessage('C03AJ664NKH', `Un utilisateur à fait une demande de création de token sur la blockchain ${blockchain}.
Le nom du token : ${name}
Le symbole du token : ${symbol}
Les décimales du token : ${decimals}
Token mintable : ${mint}
Token freezable : ${freeze}
Token pausable : ${pause}
Token blacklist : ${blacklist}
`)
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