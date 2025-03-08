const OrderIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#888EA8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.334 3.334H15a1.667 1.667 0 0 1 1.667 1.667v11.666A1.667 1.667 0 0 1 15 18.334H5a1.667 1.667 0 0 1-1.667-1.667V5.001A1.667 1.667 0 0 1 5 3.334h1.667"
    />
    <path
      stroke="#888EA8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 1.666h-5a.833.833 0 0 0-.833.833v1.667c0 .46.373.833.833.833h5c.46 0 .833-.373.833-.833V2.499a.833.833 0 0 0-.833-.833Z"
    />
  </svg>
);
export default OrderIcon;
