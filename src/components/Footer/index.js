import React from 'react'
import * as S from '../Styles/footer'
import GlobalStyle from "../Styles/global";
import { Link } from 'gatsby'

export function Footer({
    titleAddress,
    descriptionAddress,
    titleLink,
    about,
    home,
    taxi,
    booking,
    contactUs,
    titleFollow,
    imageFacebook,
    facebook,
    imageTwitter,
    twitter,
    imageLinkedin,
    linkedin,
    imageYoutube,
    youtube,
    imageInstagram,
    instagram,
    titleNewsletter,
    btnSubscribe,
    textReserved,
    imageLink
}) {
    return (
        <S.Container>
             <GlobalStyle /> 
                <S.WrapFooter>
                <S.BoxAddress>
                    <S.Title>{titleAddress}</S.Title>
                    <S.Description>{descriptionAddress}</S.Description>
                </S.BoxAddress> 
                <S.WrapNav>
                    <S.Title>{titleLink}</S.Title>
                    <S.Nav>
                        <S.BoxNav>
                            <S.ImageLink src={imageLink} />
                            <S.NavLink to="">{about}</S.NavLink>
                        </S.BoxNav>
                        <S.BoxNav>
                            <S.ImageLink src={imageLink} />
                            <S.NavLink to="">{home}</S.NavLink>
                        </S.BoxNav>
                        <S.BoxNav>
                            <S.ImageLink src={imageLink} />
                            <S.NavLink to="">{taxi}</S.NavLink>
                        </S.BoxNav>
                        <S.BoxNav>
                            <S.ImageLink src={imageLink} />
                            <S.NavLink to="">{booking}</S.NavLink>
                        </S.BoxNav>
                        <S.BoxNav>
                            <S.ImageLink src={imageLink} />
                            <S.NavLink to="">{contactUs}</S.NavLink>
                        </S.BoxNav>
                    </S.Nav>
                </S.WrapNav>
                <S.WrapLink>
                    <S.Title>{titleFollow}</S.Title>
                    <S.BoxNetwork>
                        <S.ImageNetwork src={imageFacebook} alt="" />
                        <S.FollowLink to="">{facebook}</S.FollowLink>
                    </S.BoxNetwork>
                    <S.BoxNetwork>
                        <S.ImageNetwork  src={imageTwitter} alt="" />
                        <S.FollowLink to="">{twitter}</S.FollowLink>
                    </S.BoxNetwork>
                    <S.BoxNetwork>
                        <S.ImageNetwork  src={imageLinkedin} alt="" />
                        <S.FollowLink to="">{linkedin}</S.FollowLink>
                    </S.BoxNetwork>
                    <S.BoxNetwork>
                        <S.ImageNetwork  src={imageYoutube} alt="" />
                        <S.FollowLink to="">{youtube}</S.FollowLink>
                    </S.BoxNetwork>
                    <S.BoxNetwork>
                        <S.ImageNetwork src={imageInstagram} alt="" />
                        <S.FollowLink to="">{instagram}</S.FollowLink>
                    </S.BoxNetwork>
                    </S.WrapLink>
                    <S.BoxNewsletter>
                        <S.Title>{titleNewsletter}</S.Title>
                        <S.Input placeholder="Enter Your Email"></S.Input>
                        <S.Btn>{btnSubscribe}</S.Btn>
                    </S.BoxNewsletter>    
                </S.WrapFooter>
                <S.BoxReserved>
                    <S.TextReserved>{textReserved}</S.TextReserved>
                </S.BoxReserved>
        </S.Container>
    )
}
