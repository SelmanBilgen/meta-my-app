import { Link } from 'react-router-dom';

const Navlinks = ({ handleCheckboxBurger }) => {
  return (
    <ul className='nav-ul' onClick={handleCheckboxBurger}>
      <Link className='nav' to='/'>
        <li>Home</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/menu'>
        <li>Menu</li>
      </Link>
      <Link to='/reservations'>
        <li>Reservations</li>
      </Link>
      <Link to='/order-online'>
        <li>Order Online</li>
      </Link>
      <Link to='/Login'>
        <li>Login</li>
      </Link>
    </ul>
  );
};

export default Navlinks;
