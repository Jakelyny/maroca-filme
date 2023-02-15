import { Link } from "react-router-dom"
import { BiMoviePlay, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
            <Link to='/'> <BiMoviePlay size={35}/> Maroca Filme</Link>
        </h2>
        <form>
            <input type="text" placeholder="Buscar" />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default Navbar;