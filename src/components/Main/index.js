import React from 'react'

import * as S from './styles';
import { graphql, useStaticQuery } from 'gatsby';

const  Main = () => {

    const data = useStaticQuery(graphql`
        query {
            alldata {
                mains {
                    titleOurTaxi
                    numberOne
                    firstCar
                    descriptionCar
                    imageCar {
                    url
                    }
                    numberTwo
                    secondCar
                    numberThree
                    thirdCar
                    title
                    titleYellow
                    firstImage {
                    url
                    }
                    firstTitle
                    firstDescription
                    labelButton
                    secondImage {
                    url
                    }
                    secondTitle
                    thirdImage {
                    url
                    }
                    thirdTitle
                    fourthImage {
                    url
                    }
                    fourthTitle
                    titleOurTaxiYellow
                    imageBackground {
                        url
                    }
                    textDownload
                    textApp
                    imagePhone {
                        url
                    }
                }
            }
        }
        `)

        const {
        titleOurTaxi, 
        firstCar,
        descriptionCar,
        imageCar,
        secondCar,
        thirdCar,
        title,
        titleYellow,
        firstImage,
        firstTitle,
        firstDescription,
        labelButton,
        secondImage,
        secondTitle,
        thirdImage,
        thirdTitle,
        fourthImage, 
        fourthTitle,
        titleOurTaxiYellow,
        imageBackground,
        textDownload,
        textApp,
        imagePhone
        } = data.alldata.mains[0];

        const BoxInformation = [
            {
                number: '01',
                car: firstCar,
                description: descriptionCar,
                image: imageCar.url,
            },
            {
                number: '02',
                car: secondCar,
                description: descriptionCar,
                image: imageCar.url,
            },
            {
                number: '03',
                car: thirdCar,
                description: descriptionCar,
                image: imageCar.url,
            },
        ];

    return(
        <>
            <S.Container>
                <S.BoxText>
                    <S.Text>{titleOurTaxi}</S.Text>
                    <S.TextYellow>{titleOurTaxiYellow}</S.TextYellow>
                </S.BoxText>
                <S.ContainerCar>
                    {BoxInformation.map(item => (
                        <S.BoxCar>
                            <S.Number>{item.number}</S.Number>
                            <S.TextCar>{item.car}</S.TextCar>
                            <S.DescriptionCar>{item.description}</S.DescriptionCar>
                            <S.ImageCar src={item.image} alt="image car" />
                        </S.BoxCar>
                    ))} 
                </S.ContainerCar>
            </S.Container>
            <div>
                <S.BoxAll>
                    <S.BoxWhy>
                        <S.Title>{title}</S.Title>
                        <S.TitleYellow>{titleYellow}</S.TitleYellow>
                    </S.BoxWhy>
                </S.BoxAll>
                <S.BoxItem>
                    <img src={firstImage.url} alt=""/>
                    <S.BoxTextItemRight>
                        <S.TitleItem>{firstTitle}</S.TitleItem>
                        <S.DescriptionItem>{firstDescription}</S.DescriptionItem>
                        <S.Button>{labelButton}</S.Button>
                    </S.BoxTextItemRight>
                </S.BoxItem>
                <S.BoxItem>
                    <S.BoxTextItemLeft>
                        <S.TitleItem>{secondTitle}</S.TitleItem>
                        <S.DescriptionItemLeft>{firstDescription}</S.DescriptionItemLeft>
                        <S.Button>{labelButton}</S.Button>
                    </S.BoxTextItemLeft>
                    <img src={secondImage.url} alt=""/>
                </S.BoxItem>
                <S.BoxItem>
                    <img src={thirdImage.url} alt=""/>
                    <S.BoxTextItemRight>
                        <S.TitleItem>{thirdTitle}</S.TitleItem>
                        <S.DescriptionItem>{firstDescription}</S.DescriptionItem>
                        <S.Button>{labelButton}</S.Button>
                    </S.BoxTextItemRight>
                </S.BoxItem>
                <S.BoxItem>
                    <S.BoxTextItemLeft>
                        <S.TitleItem>{fourthTitle}</S.TitleItem>
                        <S.DescriptionItemLeft>{firstDescription}</S.DescriptionItemLeft>
                        <S.Button>{labelButton}</S.Button>
                    </S.BoxTextItemLeft>
                    <img src={fourthImage.url} alt=""/>
                </S.BoxItem>
            </div>
            <S.BoxDownload src={imageBackground.url}>
                <S.BoxTextDown>
                    <S.TextDownload>{textDownload}</S.TextDownload>
                    <S.TextApp>{textApp}</S.TextApp>
                </S.BoxTextDown>
                <S.ImagePhone src={imagePhone.url} />
            </S.BoxDownload>
        </>
    )
}

export default Main;