interface SvgProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const Svg = ({ top, right, bottom, left }: SvgProps) => (
  <svg
    fill="none"
    height="0.9rem"
    width="0.9rem"
    viewBox="0 0 9 9"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top,
      right,
      bottom,
      left,
      stroke: "red",
      zIndex: 3,
    }}
  >
    <path
      d={
        top && left
          ? "M1 9L1 1L9 1"
          : top && right
          ? "M0 1L8 1L8 9"
          : bottom && left
          ? "M9 8L1 8L0.999999 6.99382e-07"
          : "M8 0L8 8L1.04907e-06 8"
      }
      stroke="current-color"
      strokeWidth="1"
    />
  </svg>
);

export default Svg;
