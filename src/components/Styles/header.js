import styled from "styled-components";
import { Link } from 'gatsby'

export const Container = styled.section`
width:100%;
display:flex;
align-items: center;
flex-direction:column;
background-color: #1a1a1a;
`

export const BoxMenu = styled.div`
width:83%;
height:13vh;
display:flex;
justify-content: space-between;
align-items: center;
`

export const BoxLogo = styled.div`
width:52%;
height:100%;
`

export const Logo = styled.img`
height:50px;
margin:10px 0px;
`

export const Nav = styled.nav`
width:48%;
height:100%;
display:flex;
align-items: center;
justify-content:flex-start;
gap:4rem;
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

export const BoxSlider = styled.section`
width:100%;
height:73vh;
`

export const Wrap = styled.div`
display:flex;
justify-content: space-between;
height:100%;
`

export const Box1 = styled.div`
width:49%;
height:100%;
display:flex;
flex-direction:column;
align-items: end;
justify-content: flex-start;
`

export const BoxTexts = styled.div`
background-color:#fad305;
width:27rem;
height:8.5rem;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;

`

export const Title = styled.h1`
font-size:3.125rem;
margin: 0px;
`

export const Number = styled.p`
color:#000;
font-size:2.5rem;
margin: 0px 0px 10px;
`

export const BoxImage = styled.div`
margin:3rem 0px 0px;
`

export const Image = styled.img`
width:495px;
`

export const Box2 = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items: center;
justify-content:flex-start;
`

export const TextCity = styled.p`
font-size:1.75rem;
margin:0.625rem 0px 1.5rem;
`

export const Form = styled.form`
background-color:#fff;
width:96%;
height:64%;
display:flex;
flex-direction:column;
align-items: center;
justify-content: flex-start;
margin:0px auto;
`

export const Everyday = styled.h3`
color:#000;
font-size:1.875rem;
margin:1rem 0px 10px;
`

export const BoxInputs = styled.div`
width:90%;
height:auto;
gap:1rem;
display:flex;
flex-direction:column;
align-items: flex-end;
margin:0px;
`


export const Input = styled.input`
width:97%;
background-color:#e1e1e1;
color:#000;
border:none;
height:2.5rem;
border-radius:5px;
text-transform:uppercase;
font-size:1.2rem;
padding-left:1rem;
margin:0px auto;
outline-color:#cfcfcf;
&::placeholder {
    color:#1a1a1a;
  }
`

export const Btn = styled.button`
width:9.5rem;
height:3.5rem;
background-color:#353433;
border:0px;
border-radius:10px;
color:#fff;
font-size:1.2rem;
text-transform:uppercase;
    &:hover {
        color: #000;
        background-color:#fad305;
    }
`


export const BoxBtns = styled.div`
width:60px;
position: absolute;
bottom:247px;
left:66px;
`

export const BtnArrowLeft = styled.button`
width:65px;
height:65px;
border-radius:50px;
border:none;
background-color:#fad305;
margin-bottom:0.5rem;
display:flex;
align-items: center;
justify-content: center;
`

export const ArrowLeft = styled.img`
width:16px;
`

export const BtnArrowRigh = styled.button`
width:65px;
height:65px;
border-radius:50px;
border:none;
background-color:#fad305;
`

export const ArrowRigh = styled.img`
width:16px;
`