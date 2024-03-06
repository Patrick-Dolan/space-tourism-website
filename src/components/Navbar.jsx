import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoIcon from "../assets/shared/LogoIcon";
import HamburgerIcon from "../assets/shared/HamburgerIcon";
import CloseIcon from "../assets/shared/CloseIcon";
import MobileNav from "./navigation/MobileNav";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  function handleMobileNavToggle() {
    setMobileNavOpen(!mobileNavOpen);
  }

  function handleOverlayClick() {
    setMobileNavOpen(false);
  }

  const paths = {
    home: {
      path: "/",
      name: "Home",
    },
    destination: {
      path: "/destination",
      name: "Destination",
    },
    crew: {
      path: "/crew",
      name: "Crew",
    },
    technology: {
      path: "/technology",
      name: "Technology",
    },
  };

  return (
    <>
      <header className="flex justify-between min-w-screen items-center px-6 pt-6 z-40 md:pt-0 md:px-0">
        <Link to="/" className="md:pl-10">
          <LogoIcon height={40} width={40}/>
        </Link>
        <button className="text-primary focus:outline-none md:hidden z-50" onClick={handleMobileNavToggle}>
          {mobileNavOpen 
            ? <CloseIcon className="mr-0.5 md:hidden" />
            : <HamburgerIcon className="md:hidden" />
          }
        </button>
        {mobileNavOpen && (
          <MobileNav handleOverlayClick={handleOverlayClick} handleMobileNavToggle={handleMobileNavToggle} />
        )}
        <nav className="hidden md:flex md:justify-center md:bg-opaque md:w-112">
          <ul className="uppercase text-primary flex items-center gap-9 font-secondary md:min-h-24">
            {Object.values(paths).map((path) => (
              <li key={path.name}>
                <Link 
                  to={path.path} 
                  className={`py-9 tracking-nav text-sub font-primary-condensed ${path.path === location.pathname ? "border-b-3" : null}`}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;