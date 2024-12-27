import styled from 'styled-components';

export const UserNavStyles = styled.ul`
  margin-top: 166px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: var(--light);
  font-weight: 500;
  font-size: 14px;

  a {
    color: currentColor;

    &.active {
      padding: 12px 20px;
      color: var(--text-color-dark);
      background: var(--light);
      border-radius: 15px;
    }
  }
`;
