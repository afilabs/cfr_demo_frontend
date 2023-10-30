const Icon = (color) => {
  return `<svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.24" filter="url(#filter0_f_2528_1084)">
    <ellipse cx="16" cy="28" rx="12" ry="4" fill="#888888"/>
    </g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.89543 4 2V22C4 23.1046 4.89543 24 6 24H13.1132L16 29L18.8868 24H26C27.1046 24 28 23.1046 28 22V2C28 0.895431 27.1046 0 26 0H6Z" fill="${color}"/>
    <rect x="6" y="2" width="20" height="20" rx="1" fill="white"/>
    <defs>
    <filter id="filter0_f_2528_1084" x="0" y="20" width="32" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2528_1084"/>
    </filter>
    </defs>
    </svg>`;
};
export default Icon;
