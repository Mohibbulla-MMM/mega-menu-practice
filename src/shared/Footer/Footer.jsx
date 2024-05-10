const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center p-6 bg-amber-100">
      <h1>&copy; M3 {year} All rights reserved.</h1>
    </div>
  );
};

export default Footer;
