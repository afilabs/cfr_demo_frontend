const Icon = (color) => {
  // return `<svg width="64" height="72" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.24" filter="url(#filter0_fasd34)"> <ellipse cx="16" cy="28" rx="12" ry="4" fill="${color}"/> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1238 23.5894C24.2366 22.2147 28 17.5468 28 12C28 5.37258 22.6274 0 16 0C9.37258 0 4 5.37258 4 12C4 17.5468 7.76344 22.2147 12.8762 23.5894L16 29L19.1238 23.5894Z" fill="${color}"/> <defs> <filter id="filter0_fasd34" x="0" y="20" width="32" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/> </filter> </defs> </svg>`;
  return `<svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.24" filter="url(#filter0_f_2528_1079)">
    <ellipse cx="16" cy="28" rx="12" ry="4" fill="#888888"/>
    </g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1238 23.5894C24.2366 22.2147 28 17.5468 28 12C28 5.37258 22.6274 0 16 0C9.37258 0 4 5.37258 4 12C4 17.5468 7.76344 22.2147 12.8762 23.5894L16 29L19.1238 23.5894Z" fill="${color}"/>
    <circle cx="16" cy="12" r="10" fill="white"/>
    <defs>
    <filter id="filter0_f_2528_1079" x="0" y="20" width="32" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2528_1079"/>
    </filter>
    </defs>
    </svg>
  `;
};
export default Icon;
