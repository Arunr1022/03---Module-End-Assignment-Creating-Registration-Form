import img1 from '../Images/wp8903914-mern-stack-wallpapers.jpg';
import img2 from '../Images/wp3105538-python-wallpapers.jpg';
import img3 from '../Images/wp9904460-data-analysis-wallpapers.png';
import img4 from '../Images/wp9775513-ui-ux-wallpapers.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/Signin">
                            <button className="btn btn-dark" type="submit">Signin</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );

}

export default LandingPage