import { useDispatch } from 'react-redux';
import { logOutAPI } from '../../../API/authAPI';
import Icon from '../../Icon';
import { LogOutStyles } from './LogOutStyles';

const LogOut = () => {
  const dispatch = useDispatch();

  const onlogOut = async data => {
    dispatch(logOutAPI());
  };
  return (
    <LogOutStyles onClick={onlogOut}>
      Log out
      <Icon name="logout" size="16" />
    </LogOutStyles>
  );
};

export default LogOut;
