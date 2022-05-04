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

        class Commande {
            constructor(blockchain, name, symbol, decimals, mint, pause, blacklist) {
                this.blockchain = blockchain,
                this.name = name,
                this.symbol = symbol,
                this.decimals = decimals,
                this.mint = mint,
                this.pause = pause,
                this.blacklist = blacklist
            }
        }

        $('body').on('click', '#createToken', async function() {
            const account = await metamask_request_connection();
            
            const blockchain = $(`.${create.active}`).text().replace(' ', '');
            const name = $(`[name="name"]`).val();
            const symbol = $(`[name="symbol"]`).val();
            const decimals = $(`[name="decimals"]`).val();
            const mint = $(`[name="mint"]`).is(':checked');
            const pause = $(`[name="pause"]`).is(':checked');
            const blacklist = $(`[name="blacklist"]`).is(':checked');
            let prix = 0;
            let augment = 0;
            let network = 0;
            let token = '';
            switch (blockchain) {
                case 'BSC':
                    network = 56;
                    await metamask_change_network('0x' + network.toString(16), 'BSC', 'https://bsc-dataseed.binance.org/');
                    prix = 0.5;
                    augment = 0.1;
                    token = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
                    break;
                case 'ETH':
                    network = 1;
                    await metamask_change_network('0x' + network.toString(16), 'ETH', 'https://main-light.eth.linkpool.io');
                    prix = 0.1;
                    augment = 0.05;
                    break;
                case 'Polygon':
                    network = 137;
                    await metamask_change_network('0x' + network.toString(16), 'Polygon', 'https://main-light.eth.linkpool.io');
                    prix = 220;
                    augment = 105;
                    break;
                case 'xDAI':
                    network = 100;
                    await metamask_change_network('0x' + network.toString(16), 'xDAI', 'https://xdai-rpc.gateway.pokt.network');
                    prix = 200;
                    augment = 100;
                    break;
                case 'Cronos':
                    network = 25;
                    await metamask_change_network('0x' + network.toString(16), 'Cronos', 'https://cronos-rpc.heavenswail.one');
                    prix = 600;
                    augment = 300;
                    break;
                case 'Polkadot':
                    network = 1284;
                    await metamask_change_network('0x' + network.toString(16), 'Polkadot', 'https://rpc.api.moonbeam.network');
                    prix = 80;
                    augment = 40;
                    break;
                case 'Fantom':
                    network = 250;
                    await metamask_change_network('0x' + network.toString(16), 'Fantom', 'https://rpc.fantom.network');
                    prix = 280;
                    augment = 140;
                    break;
                case 'Avalanche':
                    network = 43114;
                    await metamask_change_network('0x' + network.toString(16), 'Avalanche', 'https://rpc.ankr.com/avalanche');
                    prix = 3.8;
                    augment = 1.9;
                    break;
                case 'Celo':
                    network = 42220;
                    await metamask_change_network('0x' + network.toString(16), 'Celo', 'https://forno.celo.org');
                    prix = 90;
                    augment = 45;
                    break;
                default:
                    break;
            }

            const command = new Commande(blockchain, name, symbol, decimals, mint, pause, blacklist);

            Object.entries(command).forEach(([key, elem]) => {
                if(elem == true) prix+=augment;
            });
            prix=(prix * Math.pow(10,18)).toString(16);


            await ethereum.request({
              method: 'eth_sendTransaction',
              params: [
                {
                  from: account,
                  to: '0xC51f349F20d7981fFe0Ba7d9aB62cC16E4afdA29',
                  value: prix
                }
              ]
            }).then((txHash) => {
                console.log(txHash)
                publishMessage('C03AJ664NKH', `Un utilisateur à fait une demande de création de token sur la blockchain ${blockchain}.
Le nom du token : ${name}
Le symbole du token : ${symbol}
Les décimales du token : ${decimals}
Token mintable : ${mint}
Token pausable : ${pause}
Token blacklist : ${blacklist}
`)
            })
            .catch((error) => console.error);
        })


        async function metamask_request_connection() {
            try {
              return (await ethereum.request({method: 'eth_requestAccounts'}))[0];
            } catch(error) {
              console.error(error);
            }
        }


        async function metamask_change_network(network, name, url) {
            try {
                await ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: network }],
                });
              } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                  try {
                    await ethereum.request({
                      method: 'wallet_addEthereumChain',
                      params: [
                        {
                          chainId: network,
                          chainName: name,
                          rpcUrls: [url] /* ... */,
                        },
                      ],
                    });
                  } catch (addError) {
                    console.log(addError)
                  }
                }
                console.log(switchError)
              }
        }
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}