import styled from 'styled-components';

export const UserBarStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    color: ${props =>
      props.$menu ? 'var(--light)' : 'var(--text-color-dark)'};
    font-weight: 500;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: ${props =>
      props.$menu ? 'var(--primary-color)' : 'rgba(252, 252, 252, 0.7)'};
    fill: ${props =>
      props.$menu ? 'var(--primary-color)' : 'rgba(252, 252, 252, 0.7)'};
    background-color: ${props =>
      props.$menu ? '#fff' : 'var(--primary-color)'};
    border-radius: 50%;
    padding: 8px;
  }
`;
