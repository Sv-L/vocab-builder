import Icons from "../../images/icons-sprite.svg";

const Icon = ({ name, stroke, size }) => (
  <svg stroke={stroke} width={size} height={size}>
    <use href={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;
