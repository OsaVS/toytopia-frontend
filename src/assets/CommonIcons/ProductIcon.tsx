const ProductIcon = (props: any) => (
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
      d="M17.5 13.333V6.666a1.667 1.667 0 0 0-.833-1.441L10.833 1.89a1.666 1.666 0 0 0-1.666 0L3.333 5.225A1.667 1.667 0 0 0 2.5 6.666v6.667a1.667 1.667 0 0 0 .833 1.442l5.834 3.333a1.666 1.666 0 0 0 1.666 0l5.834-3.333a1.667 1.667 0 0 0 .833-1.442Z"
    />
    <path
      stroke="#888EA8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.725 5.8 10 10.01l7.275-4.21M10 18.4V10"
    />
  </svg>
);
export default ProductIcon;
