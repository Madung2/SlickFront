import React from 'react'
import './header.css'
import {Container} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
const NAV_LINKS = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Market',
    path: '/market'
  },
  {
    display: 'Create',
    path: '/create'
  },
  {
    display: 'Wallet',
    path: '/wallet'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]


const Header = () => {
  return <header className='header'>
    <Container>
      <div className='navigation'>
        <div className='logo'>
          <h2 className='d-flex gap-2 align-items-center'><span><i class="ri-fire-fill"></i></span> Slick</h2>
        </div>
        <div className="nav_menu">
          <ul className="nav_list">
            {
              NAV_LINKS.map((item, index) => {
                return <li className="nav_item" key={index}>
                  <NavLink to={item.path} className={ navClass => navClass.isActive ? 'active' :''} activeClassName="active">{item.display}</NavLink>
                </li>
              }
            )}
          </ul>
        </div>

        <div className="nav_right d-flex align-items-center gap-5">
          <button className='btn'><Link><span><i class="ri-wallet-line"></i> Connect Wallet</span></Link></button>
          
          <span className="mobile_menu"><i class='ri-menu-line'></i></span>
        </div>
      </div>
    </Container>
  </header>
}
export default Header;