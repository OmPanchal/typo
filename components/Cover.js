const Cover = ({ className }) => {
  return (
    <div
      className={`absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 backdrop-blur-md max-w-[700px] w-[700px] h-48 bg-[#00000000] grid place-content-center select-none text-[20px] cursor-pointer transition duration-300 ${className}`}
    >
      Click to carry on typing ...
    </div>
  );
};

export default Cover;
