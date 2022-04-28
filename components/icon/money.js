
function Money() {
    return ( 

        <svg width="91px" height="91px" viewBox="0 0 91 91" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-yehpjk_112-1">
                    <stop stopColor="#B7B7B7" offset="0%"></stop>
                    <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
                <path d="M45.5,0 C20.4032,0 0,20.4032 0,45.5 C0,70.5968 20.4032,91 45.5,91 C70.5968,91 91,70.5968 91,45.5 C91,20.4032 70.5968,0 45.5,0 Z M54.3126,63.0295 L54.0253,63.3168 C52.397,64.7534 50.3851,65.7115 48.1822,66.1906 L48.1822,72.4166 L41.6688,72.4166 L41.6688,65.9987 C39.8486,65.5196 38.2204,64.6577 36.7837,63.5084 C34.5807,61.6882 33.2397,59.198 32.8562,56.5159 L39.5613,55.5577 C39.6568,56.6115 40.2321,57.5697 41.1896,58.3353 C43.5844,60.2509 47.4156,60.2509 49.6193,58.2397 C50.9603,56.9943 51.6312,55.2704 51.5349,53.5459 C51.4393,51.9176 50.6729,50.4803 49.3319,49.4273 C47.7036,48.278 46.1708,47.8945 44.3507,47.5117 C41.9559,46.937 39.1784,46.2662 36.6873,43.7759 C34.2926,41.2855 33.0472,38.2201 33.1433,35.2506 C33.2388,32.4731 34.4843,29.8866 36.6873,27.8747 L36.8784,27.6836 C38.2195,26.5343 39.944,25.7679 41.6679,25.1932 L41.6679,18.6799 L48.1812,18.6799 L48.1812,25.0978 C50.2886,25.5768 52.1088,26.6305 53.737,27.9716 C55.3654,29.4082 56.5146,31.2283 57.09,33.2402 L50.2886,34.2939 C50.0969,33.8148 49.714,33.432 49.3305,33.0485 C47.1275,31.1328 43.3917,31.1328 41.188,32.9529 C40.5172,33.6238 39.847,34.4857 39.847,35.635 C39.7514,36.7843 40.4216,38.0297 41.4753,39.179 C42.529,40.3283 43.6783,40.6156 45.882,41.0947 C47.9893,41.5737 50.6715,42.1484 53.3536,44.1603 C56.2274,46.2676 58.0474,49.6206 58.2387,53.2601 C58.3355,56.8028 56.9947,60.3475 54.3126,63.0295 Z" id="path-yehpjk_112-2"></path>
                <filter x="-6.0%" y="-6.0%" width="111.9%" height="111.9%" filterUnits="objectBoundingBox" id="filter-yehpjk_112-3">
                    <feGaussianBlur stdDeviation="2.71" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="5.42" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                    <feGaussianBlur stdDeviation="2.71" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                    <feOffset dx="0" dy="-5.42" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                    <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.647058824   0 0 0 0 0.647058824   0 0 0 0 0.647058824  0 0 0 0.5 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                        <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Vector-(4)" fillRule="nonzero">
                    <g id="Shape">
                        <use fill="url(#linearGradient-yehpjk_112-1)" xlinkHref="#path-yehpjk_112-2"></use>
                        <use fill="black" fillOpacity="1" filter="url(#filter-yehpjk_112-3)" xlinkHref="#path-yehpjk_112-2"></use>
                    </g>
                </g>
            </g>
        </svg>
        
    )
}

export default Money;