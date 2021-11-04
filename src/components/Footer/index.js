import React from 'react'
import * as S from '../Styles/footer'
import GlobalStyle from "../Styles/global";


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
    btnSubscribe
}) {
    return (
        <S.Container>
            <GlobalStyle />
                <S.WrapFooter>
                    <S.BoxAddress>
                        <S.Title>{titleAddress}</S.Title>
                        <S.Description>{descriptionAddress}</S.Description>
                    </S.BoxAddress>
                    <S.BoxNav>
                        <S.Title>{titleLink}<S.Title>
                        <S.Nav>
                            <S.Link to="">{about}</S.Link>
                            <S.Link to="">{home}</S.Link>
                            <S.Link to="">{taxi}</S.Link>
                            <S.Link to="">{booking}</S.Link>
                            <S.Link to="">{contactUs}</S.Link>
                        </S.Nav> 
                    </S.BoxNav>
                    <S.WrapLink>
                        <S.Title>{titleFollow}</S.Title>
                        <div>
                            <img src={imageFacebook} alt="" />
                            <Link to="">{facebook}</Link>
                        </div>
                        <div>
                            <img src={imageTwitter} alt="" />
                            <Link to="">{twitter}</Link>
                        </div>
                        <div>
                            <img src={imageLinkedin} alt="" />
                            <Link to="">{linkedin}</Link>
                        </div>
                        <div>
                            <img src={imageYoutube} alt="" />
                            <Link to="">{ youtube}</Link>
                        </div>
                        <div>
                            <img src={ imageInstagram} alt="" />
                            <Link to="">{ instagram}</Link>
                        </div>
                    </S.WrapLink>
                    <div>
                        <S.Title>{titleNewsletter}</S.Title>
                        <input />
                        <button>{btnSubscribe}</button>
                    </div>   
                </S.WrapFooter>
        </S.Container>
    )
}