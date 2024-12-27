import { useSelector } from 'react-redux';
import { getName } from '../../../redux/auth/authSelectors';
import Icon from '../../Icon';
import { UserBarStyles } from './UserBarStyles';

const UserBar = ({ menu = false }) => {
  const userName = useSelector(getName);

  return (
    <UserBarStyles $menu={menu}>
      <p>{userName}</p>
      <Icon name="user" />
    </UserBarStyles>
  );
};

export default UserBar;
