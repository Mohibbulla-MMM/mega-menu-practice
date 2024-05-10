import MyNavLink from "../../../utility/MyNavLink/MyNavLink";

const Header_FooterMenu = () => {
  return (
    <>
      {/* home page */}
      <MyNavLink path={"/"}>Home</MyNavLink>

      {/* about page */}
      <MyNavLink path={"/about"}>About</MyNavLink>

      {/* blog page */}
      <MyNavLink path={"/blog"}>Blog</MyNavLink>

      {/* conatct page */}
      <MyNavLink path={"/contact"}>Contact</MyNavLink>
    </>
  );
};

export default Header_FooterMenu;
