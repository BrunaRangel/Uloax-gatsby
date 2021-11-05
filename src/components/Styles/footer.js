import styled from "styled-components";
import { Link } from 'gatsby'

export const Container = styled.section`
width:100%;
height:auto;
margin-top:94px;
display:flex;
align-items:center;
flex-direction:column;
background-color: #1a1a1a;
`

export const WrapFooter = styled.div`
width:86%;
display:flex;
justify-content: space-between;
margin:6.25rem 0 2rem;
`

export const BoxAddress = styled.div`
width:16rem;
`

export const Title = styled.h3`
width:100%;
display:flex;
font-size:1.75rem;
margin:0px 0px 1rem;
`

export const Description = styled.p`
display:flex;
font-size:1.25rem;
`

export const WrapNav = styled.div`
width:10rem;
`

export const Nav = styled.div`
display:flex;
flex-direction:column;
`

export const BoxNav = styled.div`
 display:flex;
 align-items: center;
 margin-bottom:0.5rem;
 gap:1rem;

`

export const ImageLink = styled.img`
 width:10px;
 height: 10px;
`

export const NavLink = styled(Link)`
width:auto;
text-decoration: none;
font-size: 1.125rem;
font-weight: 600;
color: #fff;
  &:hover {
    color: #fad305;
  }
`

export const WrapLink = styled.div`
width:10rem;
`

export const BoxNetwork = styled.div`
display:flex;
gap:0.5rem;
margin-bottom:0.5rem;
`

export const ImageNetwork  = styled.img`
width:25px;
`

export const FollowLink = styled(Link)`
width:auto;
text-decoration: none;
font-size: 1.125rem;
font-weight: 600;
color: #fff;
  &:hover {
    color: #fad305;
  }
`

export const BoxNewsletter  = styled.div`
display:flex;
flex-direction:column;
`

export const Input  = styled.input`
width:15.5rem;
height:3rem;
border:0px;
border-radius:5px;
font-size:1rem;
padding-left:0.5rem;
`

export const Btn  = styled.button`
width:9.5rem;
height:3rem;
background-color:#ffdb39;
color:#fff;
border:0px;
border-radius:5px;
margin-top:1.2rem;
font-size:1.375rem;
font-weight: 600;
`

export const BoxReserved  = styled.div`
width:100%;
height:10vh;
background-color:#fff;
display:flex;
align-items: center;
justify-content:center;
`

export const TextReserved  = styled.p`
color:#000;
font-size:1.2rem;
`