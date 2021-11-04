import styled from "styled-components";
import { Link } from 'gatsby'

export const Container = styled.section`
width:100%;
height:55vh;
background-color: #1a1a;
margin-top:94px;
display:flex;
justify-content:center;
`

export const WrapFooter = styled.div`
width:90%;
height:100%;
display:flex;
background-color: #1a1a33;
gap:5rem;
`

export const BoxAddress = styled.div`
background-color: #aafff3;
`

export const Title = styled.h3`
width:100%;
display:flex;
background-color: #aa1a33;
`

export const Description = styled.p`
width:100%;
display:flex;
background-color: #aeea33;
`

export const BoxNav = styled.div`

`

export const Nav = styled.nav`

`

export const NavLink = styled(Link)`
width:auto;
text-decoration: none;
font-size: 1.375rem;
font-weight: 600;
color: #fff;
  &:hover {
    color: #fad305;
  }
`

export const WrapLink = styled.div`

`