import { HeaderStyled } from "./style";
import { NavLink } from "react-router-dom";

function Header() {
    return (<HeaderStyled>
        <div id="header-div">
            <h1>💵Currency Conversor</h1>

            <nav id="links-div">
                <NavLink to='/' className={({ isActive }) => (isActive ? "is-active" : undefined)} end>menu</NavLink>
                <NavLink to='/about'className={({ isActive }) => (isActive ? "is-active" : undefined)}>about us</NavLink>
            </nav>
        </div>
    </HeaderStyled>
    )
}

export default Header;