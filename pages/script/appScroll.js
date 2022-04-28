import React from "react";
import $ from "jquery";


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

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}