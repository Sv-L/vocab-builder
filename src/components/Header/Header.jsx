import { useDispatch, useSelector } from "react-redux";
import Container from "../Conteiner";
import Icon from "../Icon";
import { LogoStyles } from "./HeaderStyles";
import { geIsLoggedIn, getName } from "../../redux/auth/authSelectors";
import { logOutAPI } from "../../API/authAPI";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector(geIsLoggedIn);
  const userName = useSelector(getName);
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = debounce(() => {
    setWidth(window.innerWidth);
  }, 2000);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  const isMobile = width <= 768;

  const onlogOut = async (data) => {
    dispatch(logOutAPI());
  };

  return (
    <Container>
      <LogoStyles>
        <Icon name="logo" size="36" />
        <p>VocabBuilder</p>
      </LogoStyles>

      {isLoggedIn && (
        <>
          <p>{userName}</p>
          <Icon name="user" stroke="#000000" size="24" />
          <button onClick={onlogOut}>LogOut</button>
          {isMobile ? (
            <button>
              <Icon name="burger" stroke="#000000" size="24" />
            </button>
          ) : (
            <ul>
              <li>
                <NavLink to={"/dictionary"}>Dictionary</NavLink>
              </li>
              <li>
                <NavLink to={"/recommend"}>Recommend</NavLink>
              </li>
              <li>
                <NavLink to={"/training"}>Training</NavLink>
              </li>
            </ul>
          )}
        </>
      )}
    </Container>
  );
};

export default Header;
