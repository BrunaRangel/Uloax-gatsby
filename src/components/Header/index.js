import React from 'react'
import * as S from '../Styles/header'
import GlobalStyle from "../Styles/global";
//import Slider from "react-slick";

export function Header({
    logo,
    home,
    taxi,
    booking,
    contactUs,
    titleBook,
    number,
    textCityTaxi,
    titleEveryday,
    btnSearch,
    arrowLeft,
    arrowRigh, 
    car1,
    car2,
    car3
}) {
    return (
        <S.Container>
            <GlobalStyle />
            <S.BoxMenu>
                <S.BoxLogo>
                    <S.Logo src={logo} alt="" />
                </S.BoxLogo>
                 <S.Nav>
                    <S.NavLink to="">{home}</S.NavLink>
                    <S.NavLink to="">{taxi}</S.NavLink>
                    <S.NavLink to="">{booking}</S.NavLink>
                    <S.NavLink to="">{contactUs}</S.NavLink>
                </S.Nav> 
            </S.BoxMenu>
            <S.BoxSlider>
                <S.Wrap>
                    <S.Box1>
                        <S.BoxTexts>
                            <S.Title>{titleBook}</S.Title>
                            <S.Number>{number}</S.Number>
                        </S.BoxTexts>
                        <S.BoxImage>
                            <S.Image src={car2} alt="" />
                        </S.BoxImage>
                    </S.Box1>
                    <S.Box2>
                        <S.TextCity>{textCityTaxi}</S.TextCity>
                        <S.Form>
                            <S.Everyday>{titleEveryday}</S.Everyday>
                            <S.BoxInputs>
                                <S.Input placeholder="Pickup"></S.Input>
                                <S.Input placeholder="Drop"></S.Input>
                                <S.Input placeholder="When"></S.Input>
                                <S.Btn>{btnSearch}</S.Btn>
                            </S.BoxInputs>
                        </S.Form>
                    </S.Box2>
                </S.Wrap>
                {/* <S.Wrap>
                    <S.Box1>
                        <S.BoxTexts>
                            <S.Title>{titleBook}</S.Title>
                            <S.Number>{number}</S.Number>
                        </S.BoxTexts>
                        <S.BoxImage>
                            <S.Image src={car2} alt="" />
                        </S.BoxImage>
                    </S.Box1>
                    <S.Box2>
                        <S.TextCity>{textCityTaxi}</S.TextCity>
                        <S.Form>
                            <S.Everyday>{titleEveryday}</S.Everyday>
                            <S.BoxInputs>
                                <S.Input placeholder="Pickup"></S.Input>
                                <S.Input placeholder="Drop"></S.Input>
                                <S.Input placeholder="When"></S.Input>
                            </S.BoxInputs>
                           <S.Btn>{btnSearch}</S.Btn>
                        </S.Form>
                    </S.Box2> 
                </S.Wrap>
                <S.Wrap>
                    <S.Box1>
                        <S.BoxTexts>
                            <S.Title>{titleBook}</S.Title>
                            <S.Number>{number}</S.Number>
                        </S.BoxTexts>
                        <S.BoxImage>
                            <S.Image src={car3} alt="" />
                        </S.BoxImage>
                    </S.Box1>
                    <S.Box2>
                        <S.TextCity>{textCityTaxi}</S.TextCity>
                        <S.Form>
                            <S.Everyday>{titleEveryday}</S.Everyday>
                            <S.BoxInputs>
                                <S.Input placeholder="Pickup"></S.Input>
                                <S.Input placeholder="Drop"></S.Input>
                                <S.Input placeholder="When"></S.Input>
                            </S.BoxInputs>
                           <S.Btn>{btnSearch}</S.Btn>
                        </S.Form>
                    </S.Box2>  
                </S.Wrap> */}
                <S.BoxBtns>
                    <S.BtnArrowLeft>
                        <S.ArrowLeft src={arrowLeft} alt="" />
                    </S.BtnArrowLeft>
                    <S.BtnArrowRigh>
                        <S.ArrowRigh src={arrowRigh} alt="" />
                    </S.BtnArrowRigh>
                </S.BoxBtns>
            </S.BoxSlider>
        </S.Container>
    )
}