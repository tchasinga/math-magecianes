import { Link } from 'react-router-dom';

const Navingonpage = () => (
  <div className="navget">
    <h1>Do something rigth</h1>
    <nav className="navLinks">
      <ul>
        <Link className="tagColor" to="/">Home</Link>
        <Link className="tagColor" to="/calculator">Calculator</Link>
        <Link className="tagColor" to="/quotes">Quotes</Link>
      </ul>
    </nav>
  </div>
);

export default Navingonpage;
