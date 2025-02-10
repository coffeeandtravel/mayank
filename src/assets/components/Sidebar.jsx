import { FaGithub, FaUnsplash, FaInstagram, FaLinkedin } from "react-icons/fa";
import SideNav from "./SideNav";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/3 lg:w-[40%] flex flex-col lg:sticky top-0 lg:h-screen p-5 lg:p-10">
      {/* Name & Title */}
      <div className="mt-10 lg:mt-20">
        <header>
          <a href="#" className="w-max">
            <h1 className="text-4xl lg:text-7xl heading my-3">Mayank Gaur</h1>
          </a>
          <p className="text-xs lg:font-semibold">
            Artificial Intelligence and Data Science Engineer
          </p>
        </header>
      </div>

      {/* Navigation */}
      <div className="mt-30 lg:mt-20">
        <SideNav />
      </div>

      {/* Social Links */}
      <div className="mt-30 lg:mt-auto flex flex-row justify-center gap-5 items-center">
        <a href="http://github.com/coffeeandtravel" className="color">
          <FaGithub className="text-4xl" />
        </a>
        <a href="https://unsplash.com/@mayaaank_g" className="color">
          <FaUnsplash className="text-4xl" />
        </a>
        <a href="http://instagram.com/mayaaank.g" className="color">
          <FaInstagram className="text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/mayank-gaur-171664119/" className="color">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
      
    </div>
  );
};

export default Sidebar;
