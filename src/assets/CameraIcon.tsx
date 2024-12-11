export const CameraIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 cursor-pointer transition-colors duration-200 hover:text-yellow-500 ${className}`}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 7H15.5C16.3284 7 17 7.67157 17 8.5V10.5L19.2764 9.3618C19.6088 9.19558 20 9.43733 20 9.80902V15.2785C20 15.6276 19.6513 15.8692 19.3244 15.7467L17 14.875V16.5C17 17.3284 16.3284 18 15.5 18H5.5C4.67157 18 4 17.3284 4 16.5V8.5C4 7.67157 4.67157 7 5.5 7Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
