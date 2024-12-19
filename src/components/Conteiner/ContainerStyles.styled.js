import styled from "styled-components";

export const ContainerStyles = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
    padding: 0 8px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 375px;
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;
