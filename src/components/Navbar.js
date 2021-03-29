import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './assets/css/Navbar.css';

function Navbar(){
    const [ click, setClick ] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true)
        }   
    };

window.addEventListener('resize', showButton);

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <span>Coffee</span>
                        <p>Blend</p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-clean' buttonSize='btn-medium'>Order now</Button>}
                </div>
            </nav>
        </div>
    )
}
export default Navbar;