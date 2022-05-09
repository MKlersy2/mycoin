import React from "react";
import $ from 'jquery'
import Web3 from 'web3';
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
                    token = '0x55d398326f99059ff775485246999027b3197955';
                    break;
                case 'ETH':
                    network = 1;
                    await metamask_change_network('0x' + network.toString(16), 'ETH', 'https://main-light.eth.linkpool.io');
                    prix = 0.1;
                    augment = 0.05;
                    token = '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD';
                    break;
                case 'Polygon':
                    network = 137;
                    await metamask_change_network('0x' + network.toString(16), 'Polygon', 'https://main-light.eth.linkpool.io');
                    prix = 220;
                    augment = 105;
                    token = '0xc2132d05d31c914a87c6611c10748aeb04b58e8f';
                    break;
                case 'xDAI':
                    network = 100;
                    await metamask_change_network('0x' + network.toString(16), 'xDAI', 'https://xdai-rpc.gateway.pokt.network');
                    prix = 200;
                    augment = 100;
                    token = '0x44fA8E6f47987339850636F88629646662444217';
                    break;
                case 'Cronos':
                    network = 25;
                    await metamask_change_network('0x' + network.toString(16), 'Cronos', 'https://cronos-rpc.heavenswail.one');
                    prix = 600;
                    augment = 300;
                    token = '0x66e428c3f67a68878562e79A0234c1F83c208770';
                    break;
                case 'Polkadot':
                    network = 1284;
                    await metamask_change_network('0x' + network.toString(16), 'Polkadot', 'https://rpc.api.moonbeam.network');
                    prix = 80;
                    augment = 40;
                    token = '0x085416975fe14c2a731a97ec38b9bf8135231f62';
                    break;
                case 'Fantom':
                    network = 250;
                    await metamask_change_network('0x' + network.toString(16), 'Fantom', 'https://rpc.fantom.network');
                    prix = 280;
                    augment = 140;
                    token = '0x846e4d51d7e2043c1a87e0ab7490b93fb940357b';
                    break;
                case 'Avalanche':
                    network = 43114;
                    await metamask_change_network('0x' + network.toString(16), 'Avalanche', 'https://rpc.ankr.com/avalanche');
                    prix = 3.8;
                    augment = 1.9;
                    token = '0xb599c3590F42f8F995ECfa0f85D2980B76862fc1';
                    break;
                case 'Celo':
                    network = 42220;
                    await metamask_change_network('0x' + network.toString(16), 'Celo', 'https://forno.celo.org');
                    prix = 90;
                    augment = 45;
                    token = '0x765de816845861e75a25fca122bb6898b8b1282a';
                    break;
                default:
                    break;
            }

            const command = new Commande(blockchain, name, symbol, decimals, mint, pause, blacklist);

            Object.entries(command).forEach(([key, elem]) => {
                if(elem == true) prix+=augment;
            });
            prix=(prix * Math.pow(10,18)); 
            const web3 = new Web3();
            const transactionParameters = {
              from: account,
              to: token,
              gasLimit: web3.utils.toHex(1000000),
              gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
              data: getDataFieldValue('0xC51f349F20d7981fFe0Ba7d9aB62cC16E4afdA29', 10000000000000000n)
            };
            
            await ethereum.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]}).then((txHash) => {
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

        function getDataFieldValue(tokenRecipientAddress, tokenAmount) {
          const web3 = new Web3();
          const TRANSFER_FUNCTION_ABI = {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"};
          return web3.eth.abi.encodeFunctionCall(TRANSFER_FUNCTION_ABI, [
              tokenRecipientAddress,
              tokenAmount
          ]);
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