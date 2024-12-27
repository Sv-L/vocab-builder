import { NavLink } from 'react-router-dom';
import { UserNavStyles } from './UserNavStyles';

const UserNav = () => {
  return (
    <UserNavStyles>
      <li>
        <NavLink to={'/dictionary'}>Dictionary</NavLink>
      </li>
      <li>
        <NavLink to={'/recommend'}>Recommend</NavLink>
      </li>
      <li>
        <NavLink to={'/training'}>Training</NavLink>
      </li>
    </UserNavStyles>
  );
};
export default UserNav;
