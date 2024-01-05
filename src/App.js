import './App.css';
import Placeholder from './assets/images/Placeholder_EighthNote.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/#">TuneLynk</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Library</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Explore</a>
          </li>
        </ul>
        <form className="form">
          <input className="form-control search-bar mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#">Sign In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Create Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="container">
      <div className="card">
        <img src={Placeholder} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Song title</h5>
          <p className="card-text">Category name.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export { Navbar };