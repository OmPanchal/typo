const Score = ({ score, lable, className, big }) => {
  return (
    <div
      className={
        "text-secondary-200 transition-all hover:text-primary duration-300 relative cursor-pointer group " +
        className
      }
    >
      {score}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 
        
        top-${
          big
            ? "32 scale-100"
            : "24 scale-0 group-hover:scale-100 mt-2 select-none "
        } 

        left-1/2 absolute bg-secondary-200 w-max px-2 py-1 text-secondary-100 transition-all rounded-lg text-[18px] duration-200 `}
      >
        {lable}
      </div>
    </div>
  );
};

export default Score;
