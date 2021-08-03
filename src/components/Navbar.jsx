import yardLogo from "../images/yard_logo.png";
const Navbar = () => {
  return (
    <nav className="text-gray-200 body-font bg-black sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/">
          <img src={yardLogo} className="h-24 w-24 filter invert" alt="" />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="#about"
            className="mr-5 lg:mr-10 hover:text-red-600 text-xl lg:text-2xl"
          >
            About
          </a>
          <a
            href="#gallery"
            className="mr-5 lg:mr-10 hover:text-red-600 text-xl lg:text-2xl"
          >
            Gallery
          </a>
          <a
            href="#pricing"
            className="mr-5 lg:mr-10 hover:text-red-600 text-xl lg:text-2xl"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="mr-5 lg:mr-10 hover:text-red-600 text-xl lg:text-2xl"
          >
            Contact
          </a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
