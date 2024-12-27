import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 250ms linear;

  > div:first-child {
    position: relative;
    max-width: ${props => (props.$menu ? '363px' : '100%')};
    background-color: var(--primary-color);
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 16px;
    overflow: auto;
    box-sizing: border-box;
  }

  /* @media screen and (max-width: 767px) {
    .modal {
      width: 95%;
    }
  }
  @media screen and (min-width: 768px) {
    .modal {
      max-width: 100%;
    }
  } */

  button:first-child {
    cursor: pointer;
    z-index: 9999;
    position: absolute;
    right: 16px;
    top: 16px;
    padding: 0;
    background-color: transparent;
    transition: 250ms linear;
    border: none;

    svg {
      width: ${props => (props.$menu ? '32' : '24')}px;
      height: ${props => (props.$menu ? '32' : '24')}px;
    }
  }
`;
