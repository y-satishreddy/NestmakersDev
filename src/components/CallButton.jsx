import CallIconImg from "../assets/call_icon.svg"
const CallNowButton = () => {
  return (
    <a
      href="tel:+916366963669"
      className="fixed z-[1000] bottom-4 md:bottom-10 left-4 md:left-6
      h-8 w-8 md:w-12 md:h-12 rounded-full bg-[#95b67b]
      flex items-center justify-center shadow-lg transition-all duration-300
      hover:scale-110"
      aria-label="Call Now"
    >
      <img
        src={CallIconImg}
        alt="Call"
        className="w-6 h-6 object-contain"
      />
    </a>
  );
};

export default CallNowButton;
