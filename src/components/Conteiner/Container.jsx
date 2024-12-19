import { ContainerStyles } from "./ContainerStyles.styled.js";

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
