const RedoIcon = ({ isFocussed }) => {
  return (
    <svg
      width={isFocussed ? "36" : "28"}
      height={isFocussed ? "36" : "28"}
      viewBox="0 0 16 16"
      className="transition-all duration-50"
      cursor="pointer"
      fill="#fda917"
    >
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
    </svg>
  );
};

export default RedoIcon;