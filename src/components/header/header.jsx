import { Link, useLocation} from "react-router-dom";
import "../header/header.css";

const Header = () => {
    const location = useLocation();

    return (
        <>
        <header>
            <div className="nav">
                <div className="logo">
                    <img src="../../src/assets/img/logoSpam.png" alt="logoSpam" />
                </div>
                <div>
                    <ul className="navigation">
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={location.pathname === "/mecaniques" ? "active" : ""}>
                        <Link to="/mecaniques">Mécaniques</Link>
                    </li>
                    <li className={location.pathname === "/cards" ? "active" : ""}>
                        <Link to="/cards">Les cartes</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;

