const Icon = (color) => {
  return `<svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.24" filter="url(#filter0_f_1279_18340)">
    <ellipse cx="16" cy="40" rx="12" ry="4" fill="#888888"/>
    </g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0975 31.1708C27.4347 29.0423 32 23.0543 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.0543 4.56525 29.0423 10.9025 31.1708L16 40L21.0975 31.1708Z" fill="${color}"/>
    <circle cx="16" cy="16" r="12" fill="white"/>
    <circle cx="16" cy="16" r="8" fill="${color}"/>
    <defs>
    <filter id="filter0_f_1279_18340" x="0" y="32" width="32" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1279_18340"/>
    </filter>
    </defs>
    </svg>
  `;
};
export default Icon;
