import { NavLink } from "react-router-dom";

const MyNavLink = ({ children, path, activeStyle, inactiveStyle }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `active ${activeStyle}` : `inactive ${inactiveStyle}`
        }
      >
        {children}
      </NavLink>
    </>
  );
};

export default MyNavLink;
