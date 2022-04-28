
function Timer() {
    return ( 

        <svg width="83px" height="92px" viewBox="0 0 83 92" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnslink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient x1="50.0001213%" y1="-11.4295173%" x2="50.0001213%" y2="100%" id="linearGradient-qdeiwam12p-1">
                    <stop stopColor="#B4B4B4" offset="0%"></stop>
                    <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
                <path d="M0,50.6532 C0,27.8822 18.4596,9.4247 41.2306,9.4247 C64.0016,9.4247 82.461,27.8834 82.461,50.6532 C82.461,73.4243 64.0016,91.884 41.2306,91.884 C18.4596,91.884 0,73.4243 0,50.6532 Z M44.7646,27.0946 C44.7646,25.1422 43.1822,23.5606 41.2306,23.5606 C39.279,23.5606 37.6966,25.1422 37.6966,27.0946 L37.6966,41.2306 C37.6966,43.1822 39.279,44.7646 41.2306,44.7646 C43.1822,44.7646 44.7646,43.1822 44.7646,41.2306 L44.7646,27.0946 Z" id="path-qdeiwam12p-2"></path>
                <filter x="-6.5%" y="-6.5%" width="113.0%" height="113.0%" filterUnits="objectBoundingBox" id="filter-qdeiwam12p-3">
                    <feGaussianBlur stdDeviation="2.675" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="5.35" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                    <feGaussianBlur stdDeviation="2.675" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                    <feOffset dx="0" dy="-5.35" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                    <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.631372549   0 0 0 0 0.631372549   0 0 0 0 0.631372549  0 0 0 1 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                        <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                    </feMerge>
                </filter>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="1300%" id="linearGradient-qdeiwam12p-4">
                    <stop stopColor="#B4B4B4" offset="0%"></stop>
                    <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
                <path d="M51.8326,3.534 C51.8326,5.4856 50.2502,7.068 48.2986,7.068 L34.1626,7.068 C32.211,7.068 30.6286,5.4856 30.6286,3.534 C30.6286,1.5824 32.211,0 34.1626,0 L48.2986,0 C50.2502,0 51.8326,1.5824 51.8326,3.534 Z" id="path-qdeiwam12p-5"></path>
                <filter x="-25.2%" y="-75.7%" width="150.5%" height="251.4%" filterUnits="objectBoundingBox" id="filter-qdeiwam12p-6">
                    <feGaussianBlur stdDeviation="2.675" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="5.35" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Vector-(3)">
                    <g id="Shape">
                        <use fill="url(#linearGradient-qdeiwam12p-1)" fillRule="evenodd" xlinkHref="#path-qdeiwam12p-2"></use>
                        <use fill="black" fillOpacity="1" filter="url(#filter-qdeiwam12p-3)" xlinkHref="#path-qdeiwam12p-2"></use>
                    </g>
                    <g id="Path">
                        <use fill="url(#linearGradient-qdeiwam12p-4)" fillRule="evenodd" xlinkHref="#path-qdeiwam12p-5"></use>
                        <use fill="black" fillOpacity="1" filter="url(#filter-qdeiwam12p-6)" xlinkHref="#path-qdeiwam12p-5"></use>
                    </g>
                </g>
            </g>
        </svg>        
    )
}

export default Timer;