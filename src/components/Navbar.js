import React from 'react';
import {Link,NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
//     setTimeout(()=>{
//        props.history.push('/contact');
//    },20000)
    return(
        <nav>
        <div className='nav-wrapper blue darken-4'>
            <Link to='/' className='brand-logo left'>MERN Masters</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
        </nav>
    );
}


export default withRouter(Navbar);

//higherorder components are the components which gives the extra power to the components it is wrapping
