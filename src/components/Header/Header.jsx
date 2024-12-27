import { useSelector } from 'react-redux';
import Container from '../Conteiner';
import { geIsLoggedIn } from '../../redux/auth/authSelectors';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import UserNav from './UserNav';
import UserBar from './UserBar/UserBar';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import LogOut from './LogOut';
import { HeaderStyles, HeaderStylesMob } from './HeaderStyles';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;
  const isLoggedIn = useSelector(geIsLoggedIn);
  const handleWindowSizeChange = debounce(() => {
    setWidth(window.innerWidth);
  }, 1000);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return (
    <Container>
      <HeaderStyles>
        <Logo />
        {isLoggedIn && (
          <>
            {isMobile ? (
              <HeaderStylesMob>
                <UserBar />
                <MobileMenu />
              </HeaderStylesMob>
            ) : (
              <>
                <UserNav />
                <UserBar />
                <LogOut />
              </>
            )}
          </>
        )}
      </HeaderStyles>
    </Container>
  );
};

export default Header;
