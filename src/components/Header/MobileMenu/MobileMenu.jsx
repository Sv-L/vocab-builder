import { useState } from 'react';
import Icon from '../../Icon';
import Modal from '../../Modal';
import LogOut from '../LogOut';
import UserBar from '../UserBar';
import UserNav from '../UserNav';
import illustration from '../../../images/mob-menu.png';
import { ImageOverlay, MobileMenuStyles } from './MobileMenuStyles';

const MobileMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const onShowMenu = () => {
    setIsShowMenu(true);
  };

  return (
    <MobileMenuStyles>
      <button onClick={onShowMenu}>
        <Icon name="burger" stroke="var(--primary-color)" size="24" />
      </button>
      {isShowMenu && (
        <Modal closeModal={setIsShowMenu} menu>
          <UserBar menu />
          <UserNav />
          <LogOut />
          <ImageOverlay>
            <img src={illustration} alt="illustration" />
          </ImageOverlay>
        </Modal>
      )}
    </MobileMenuStyles>
  );
};

export default MobileMenu;
