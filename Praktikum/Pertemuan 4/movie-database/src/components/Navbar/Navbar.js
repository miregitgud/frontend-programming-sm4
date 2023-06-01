import { Link } from "react-router-dom";
import StyledNavbar from './StyledNavbar';

const Navbar = () => {
    return (
        <StyledNavbar>
            <div className="container">
                <nav className="navbar">
                    <div>
                        <h1 className="navbar__brand">Movie App</h1>
                    </div>
                    <div>
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/">Home</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/movie/Create">Add Movie</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/movie/Popular">Popular</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/movie/NowPlaying">Now Playing</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/movie/TopRated">Top Rated</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;