import styled from "styled-components";
import { NavLink } from "react-router-dom";


const NavbarStyled = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    box-shadow: -2px 7px 56px -33px rgba(0,0,0,0.3);
    -webkit-box-shadow: -2px 7px 56px -33px rgba(0,0,0,0.3);
    -moz-box-shadow: -2px 7px 56px -33px rgba(0,0,0,0.3);
    background-color: white;
    z-index: 1;
`

const UListStyled = styled.ul`
    list-style: none;
    display: flex;
    width: 300px;
    justify-content: space-evenly;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    color: white;
    background-color: #007bff;
  }
`

const SpanStyled = styled.span`
    margin-left: 20px;
    font-size: 25px;
    font-weight: 600;
    padding: 5px;
`

export const Navbar = () => {
    return(
        <NavbarStyled>
            <SpanStyled>Flashcards</SpanStyled>
            <UListStyled>
                <li><StyledNavLink to="/">Empleados</StyledNavLink></li>
                <li><StyledNavLink to="/graficos">Graficos</StyledNavLink></li>
                <li><StyledNavLink to="/profile">Perfil</StyledNavLink></li>
            </UListStyled>
        </NavbarStyled>
    )
}