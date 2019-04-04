/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useContext } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { AppContext } from '../Context'

const NavItem = ({ display, to, exact, className, style }) => {
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
      css={{
        '&:hover': {
          color: 'black'
        }
      }}
      className={`nav-link w-100 h-100 ${className}`}
      style={style}
      activeClassName="active disabled text-dark"
    >{display}</NavLink>
  );
}

export default NavItem;