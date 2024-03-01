import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="uppercase text-primary">
          <li>
            <Link to="/" className="tracking-nav"><span className="pr-3 font-bold">00</span>Home</Link>
          </li>
          <li>
            <Link to="/destination" className="tracking-nav"><span className="pr-3 font-bold">01</span>Destination</Link>
          </li>
          <li>
            <Link to="/crew" className="tracking-nav"><span className="pr-3 font-bold">02</span>Crew</Link>
          </li>
          <li>
            <Link to="/technology" className="tracking-nav"><span className="pr-3 font-bold">03</span>Technology</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;