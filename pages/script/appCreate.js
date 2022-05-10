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
            let prix = 200;
            let augment = 50;
            let network = 0;
            let decimalsToken = 0;
            let token = '';
            switch (blockchain) {
                case 'BSC':
                    network = 56;
                    await metamask_change_network('0x' + network.toString(16), 'BSC', 'https://bsc-dataseed.binance.org/');
                    decimalsToken = 1000000000000000000n;
                    token = '0x55d398326f99059ff775485246999027b3197955';
                    break;
                case 'ETH':
                    network = 1;
                    await metamask_change_network('0x' + network.toString(16), 'ETH', 'https://main-light.eth.linkpool.io');
                    decimalsToken = 1000000n;
                    token = '0xdac17f958d2ee523a2206206994597c13d831ec7';
                    break;
                case 'Polygon':
                    network = 137;
                    await metamask_change_network('0x' + network.toString(16), 'Polygon', 'https://main-light.eth.linkpool.io');
                    decimalsToken = 1000000n;
                    token = '0xc2132d05d31c914a87c6611c10748aeb04b58e8f';
                    break;
                case 'xDAI':
                    network = 100;
                    await metamask_change_network('0x' + network.toString(16), 'xDAI', 'https://xdai-rpc.gateway.pokt.network');
                    decimalsToken = 1000000000000000000n;
                    token = '0x44fA8E6f47987339850636F88629646662444217';
                    break;
                case 'Cronos':
                    network = 25;
                    await metamask_change_network('0x' + network.toString(16), 'Cronos', 'https://cronos-rpc.heavenswail.one');
                    decimalsToken = 1000000n;
                    token = '0x66e428c3f67a68878562e79A0234c1F83c208770';
                    break;
                case 'Polkadot':
                    network = 1284;
                    await metamask_change_network('0x' + network.toString(16), 'Polkadot', 'https://rpc.api.moonbeam.network');
                    decimalsToken = 1000000n;
                    token = '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73';
                    break;
                case 'Fantom':
                    network = 250;
                    await metamask_change_network('0x' + network.toString(16), 'Fantom', 'https://rpc.fantom.network');
                    decimalsToken = 1000000n;
                    token = '0x049d68029688eabf473097a2fc38ef61633a3c7a';
                    break;
                case 'Avalanche':
                    network = 43114;
                    await metamask_change_network('0x' + network.toString(16), 'Avalanche', 'https://rpc.ankr.com/avalanche');
                    decimalsToken = 1000000n;
                    token = '0xc7198437980c041c805a1edcba50c1ce5db95118';
                    break;
                case 'Celo':
                    network = 42220;
                    await metamask_change_network('0x' + network.toString(16), 'Celo', 'https://forno.celo.org');
                    decimalsToken = 1000000000000000000n;
                    token = '0x765DE816845861e75A25fCA122bb6898B8B1282a';
                    break;
                default:
                    break;
            }

            const command = new Commande(blockchain, name, symbol, decimals, mint, pause, blacklist);

            Object.entries(command).forEach(([key, elem]) => {
                if(elem == true) prix+=augment;
            });
            prix=parseInt(prix)* parseInt(decimalsToken);
            prix = BigInt(prix)
            const web3 = new Web3();
            const transactionParameters = {
              from: account,
              to: token,
              gasLimit: '0x5208',
              gas: '0x5208',
              // gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
              data: getDataFieldValue('0xC51f349F20d7981fFe0Ba7d9aB62cC16E4afdA29', prix)
            };
            
            await ethereum.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]}).then((txHash) => {
                console.log(txHash)
                publishMessage('C03AJ664NKH', `Un utilisateur à fait une demande de création de token sur la blockchain ${blockchain}.
Hash de la tx: ${txHash}
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

        $('body').on('keyup', '#decimals', function() {
          if($(this).val() > 18) {
            $(this).val('18');
          } else if($(this).val() < 0) {
            $(this).val('0');
          };
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