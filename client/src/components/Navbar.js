import logo from '../logo.svg'
import {Link, Outlet} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to={'/'}>
                                <li className="nav-item">
                                    <div className="nav-link" aria-current="page" href="#">Home</div>
                                </li>
                            </Link>
                            <Link to={'/addItems'}>
                                <li className="nav-item">
                                    <div className="nav-link" aria-current="page" href="#">Add Items</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid p-4">
                <Outlet/>
            </div>
        </div>
    )
}
