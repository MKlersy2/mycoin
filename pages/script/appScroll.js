import React from "react";
import $ from "jquery";
import slider from '../../styles/slider.module.css';


export default class Layout extends React.Component {


    componentDidMount() {

      const parallaxs = document.querySelectorAll("[parallaxinit='false']");
      let parallaxOrigineTop = document.querySelectorAll("div[parallaxorig='true'][parallaxtop='true']");
      let parallaxOrigineBot = document.querySelectorAll("div[parallaxorig='true'][parallaxbottom='true']");
      var parallaxOriginPos = 0;
      var parallaxOriginNeg = 0;

      $(document).on('scroll', function() {

        parallaxOriginPos = $(document).scrollTop() * .15;
        parallaxOriginNeg = $(document).scrollTop() * -.15;

        parallaxOrigineTop.forEach(origineTop => {
          if(origineTop.hasAttribute('limitesize')) {
            let sizeLimit =  parseInt(origineTop.attributes.limitesize.value);
            window.innerWidth > sizeLimit ? origineTop.style.transform = `translateY(${parallaxOriginPos}px)` : null;
          } else {
            origineTop.style.transform = `translateY(${parallaxOriginPos}px)`
          }
        });
        parallaxOrigineBot.forEach(origineBot => {
          if(origineBot.hasAttribute('limitesize')) {
            let sizeLimit =  parseInt(origineBot.attributes.limitesize.value);
            window.innerWidth > sizeLimit ? origineBot.style.transform = `translateY(${parallaxOriginNeg}px)` : null;
          } else {
            origineBot.style.transform = `translateY(${parallaxOriginNeg}px)`;
          }
        });
        parallaxs.forEach(parallax => { 
          checkParallax(parallax);
        });
      })

      function checkParallax(parallax) {
        const elementPrincipal = parallax.getBoundingClientRect();
        const topElement = elementPrincipal.top;
        const bottomElement = topElement + elementPrincipal.height;
        
        if(topElement < $(window).outerHeight() && bottomElement > 0) {
          let value = ($(window).innerHeight() - topElement);
          let parallaxY = value*.1;
          let parallaxY2 = value*-.1;
          
          if(parallax.hasAttribute('parallaxtop')) {
            parallax.style.transform = 'translateY('+parallaxY+'px)';
          } else {
            parallax.style.transform = 'translateY('+parallaxY2+'px)';
          }
        }
      }

      $('body').on('mouseup', '[walletconnect="true"]', () => metamask_connection());

      async function metamask_connection() {
        if(typeof ethereum === 'undefined') {
          return false;
        } else {
          const accounts  = await ethereum.request({ method: 'eth_requestAccounts' });
          const account = await accounts[0];
          const result = await $('[walletConnect="true"]').html(account.slice(0, 4) + '...' + account.slice(-4));
        }
      }

      if(typeof ethereum !== 'undefined') {
        ethereum.on('accountsChanged', function (accounts) {
          // Time to reload your interface with accounts[0]!
          const account = accounts[0];
          $('[walletConnect="true"]').html(account.slice(0, 4) + '...' + account.slice(-4));
        });
        ethereum.on('disconnect', function() {
          $('[walletConnect="true"]').html('Reconnect');
        });
      }
      if(typeof ethereum !== 'undefined') {
        metamask_connection_auto();
      } else {
        window.open('https://metamask.io/download/', '_blank');
      }
      window.onload = function() {
        $('body').on('click', `.${slider.global}`, function() {
          $(this).toggleClass(`${slider.parentActive}`);
          $(this).children(`.${slider.circle}`).toggleClass(`${slider.active}`);
          $(this).parent().parent().children(`.${slider.form}`).toggleClass(`${slider.formActive}`);
          console.log($(this).parent().parent().children(`.${slider.form}`))
        });

        if(typeof ethereum !== 'undefined') {
          metamask_connection_auto();
        } else {
          console.log('metamask not installed')
        }
      }
      async function metamask_connection_auto() {
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];

          $('[walletConnect="true"]').html(account.slice(0, 4) + '...' + account.slice(-4));
        } catch (error) {
          console.error(error);
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