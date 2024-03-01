import { Link } from "react-router-dom";
import { useState } from "react";
import LogoIcon from "../assets/shared/LogoIcon";
import HamburgerIcon from "../assets/shared/HamburgerIcon";
import CloseIcon from "../assets/shared/CloseIcon";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function handleMobileNavToggle() {
    setMobileNavOpen(!mobileNavOpen);
  }

  function handleOverlayClick() {
    setMobileNavOpen(false);
  }

  return (
    <>
      <header className="flex justify-between items-center">
        <Link to="/">
          <LogoIcon height={40} width={40}/>
        </Link>
        <button className="text-primary focus:outline-none md:hidden z-50" onClick={handleMobileNavToggle}>
          {mobileNavOpen 
            ? <CloseIcon className="mr-0.5 md:hidden" />
            : <HamburgerIcon className="md:hidden" />
          }
        </button>
        {mobileNavOpen && (
          <div className="fixed inset-0 flex justify-end" onClick={handleOverlayClick}>
            <nav 
              className="w-64 bg-white bg-opacity-5 backdrop-blur-2xl h-full p-8 pt-28 overflow-auto" 
              onClick={e => e.stopPropagation()}
            >
              <ul className="uppercase text-primary flex flex-col gap-8 font-secondary">
                <li>
                  <Link to="/" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">00</span>Home</Link>
                </li>
                <li>
                  <Link to="/destination" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">01</span>Destination</Link>
                </li>
                <li>
                  <Link to="/crew" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">02</span>Crew</Link>
                </li>
                <li>
                  <Link to="/technology" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">03</span>Technology</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;