import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    const {numItems} = props
  return (
<nav className="navbar navbar-expand-lg bg-light shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <button onClick={Navbar}>Adibas</button>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={'nav-link active' } aria-current="page" to='/'>Inicio</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='/categoria/zapatillas'>Zapatillas</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='categoria/remeras'>Remeras</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='categoria/camperas'>Camperas</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="navbar-item">
        <button onClick={NavLink}>Comprar</button>
        </li>
        <li className="navbar-item">
            <CartWidget
            numItems={numItems}
            />
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar