const CapsIcon = ({ capsOn }) => {
  return (
    <div className="w-min h-min">
      <svg
        width={capsOn ? "28" : "0"}
        height={capsOn ? "28" : "0"}
        viewBox="0 0 16 16"
        className={`transition-all ${capsOn ? "scale-100" : "scale-0"}`}
        cursor="pointer"
        fill={capsOn ? "#fda917" : "#163461"}
      >
        <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z" />
      </svg>
    </div>
  );
};

export default CapsIcon;
