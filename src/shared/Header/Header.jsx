import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <div className="shadow-md shadow-orange-100">
      <div className="flex p-3 gap-3  max-w-6xl mx-auto">
        {/*  logo */}
        <Logo />

        {/* nav menu */}
        <nav className="flex-1 flex w-full     ">
          <Navbar />
        </nav>
      </div>
    </div>
  );
};

export default Header;
