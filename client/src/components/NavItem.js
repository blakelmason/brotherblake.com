/** @jsx jsx */
import { useContext } from 'react'
import { jsx } from '@emotion/core'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { AppContext } from '../Context'

const NavItem = ({ display, to, exact }) => {
  const context = useContext(AppContext);
  function home() {
    window.scrollTo(0, 0)
    context.closeSidebar();
  }
  return (
    <NavLink
      onClick={() => {
        to === '/' ? home() :
          window.scrollY > 319 && window.scrollTo(0, 319);
        context.setTitle(display);
      }}
      exact={exact}
      to={to}
      className="nav-link w-100 text-center text-grey"
      activeClassName="active disabled text-dark"
      css={{
        '&:hover': {
          color: 'black'
        }
      }}
    >{display}</NavLink>
  );
}

export default NavItem;