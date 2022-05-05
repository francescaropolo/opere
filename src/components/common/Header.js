import React, { memo } from 'react';
import styled from 'styled-components';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(4)};
    background-color: ${props => props.theme.palette.common.white};
    color: ${props => props.theme.palette.common.black};
    border-bottom: 2px solid ${props => props.theme.palette.secondary.light};
    position: fixed;
    top: 0;
    width: 100%;
`
const HomeLink = styled(Link)`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-weight: 700;
    font-size: 25px;
    text-decoration: none;
    color: ${props => props.theme.palette.primary.main};
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
`
const Item = styled(Link)`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.active ? props.theme.palette.primary.main : props.theme.palette.secondary.light};
    text-decoration: none;
    margin-left: ${props => props.theme.spacing(4)};
`
const Placeholder = styled.div`
    height: 72px;
    margin-bottom: ${props => props.theme.spacing(4)};
`

const Header = memo(() => {
    return (
        <>
            <Wrapper>
                <HomeLink to="/">Spazio De Dominicis</HomeLink>
                <Nav>
                    <LinkItem to="/">Home</LinkItem>
                    <LinkItem to="/catalogo">Catalogo</LinkItem>
                    <LinkItem to="/about">Chi siamo</LinkItem>
                </Nav>
            </Wrapper>
            <Placeholder />
        </>
    );
});

const LinkItem = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true }); 
    return (
        <Item active={match} to={to}>{children}</Item>
    )
}

export default Header;