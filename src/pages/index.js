import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Main from '../components/Main'

export const query = graphql`
    query {
        alldata {
          headers {
            logo {
              url
            }
            home
            taxi
            booking
            contactUs
            titleBook
            number
            textCityTaxi
            titleEveryday
            btnSearch
            arrowLeft {
              url
            }
            arrowRigh {
              url
            }
            car1 {
              url
            }
            car2 {
              url
            }
            car3{
              url
            }
          }
          footers {
            titleAddress
            descriptionAddress
            titleLink
            about
            home
            taxi
            booking
            contactUs
            titleFollow
            imageFacebook {
              url
            }
            facebook
            imageTwitter {
              url
            }
            twitter
            imageLinkedin {
              url
            }
            linkedin
            imageYoutube {
              url
            }
            youtube
            imageInstagram {
              url
            }
            instagram
            titleNewsletter
            btnSubscribe
            textReserved
            imageLink{
              url
            }
          }
        }
    }
`

export default function Index({ data }) {

    console.log(data.alldata)

    const dataHeaders = data.alldata.headers[0]
    const dataFooters = data.alldata.footers[0]
    

    return (
        <div>
           <Header
              logo={dataHeaders.logo.url}
              home={dataHeaders.home}
              taxi={dataHeaders.taxi}
              booking={dataHeaders.booking}
              contactUs={dataHeaders.contactUs}
              titleBook={dataHeaders.titleBook}
              number={dataHeaders.number}
              textCityTaxi={dataHeaders.textCityTaxi}
              titleEveryday={dataHeaders.titleEveryday}
              btnSearch={dataHeaders.btnSearch}
              arrowLeft={dataHeaders.arrowLeft.url}
              arrowRigh={dataHeaders.arrowRigh.url}
              car1={dataHeaders.car1.url}
              car2={dataHeaders.car2.url}
              car3={dataHeaders.car3.url}
            />
            <Main />
            <Footer 
              titleAddress={dataFooters.titleAddress}
              descriptionAddress={dataFooters.descriptionAddress}
              titleLink={dataFooters.titleLink}
              about={dataFooters.about}
              home={dataFooters.home}
              taxi={dataFooters.taxi}
              booking={dataFooters.booking}
              contactUs={dataFooters.contactUs}
              titleFollow={dataFooters.titleFollow}
              imageFacebook ={dataFooters.imageFacebook.url}
              facebook ={dataFooters.facebook}
              imageTwitter ={dataFooters.imageTwitter.url}
              twitter={dataFooters.twitter}
              imageLinkedin ={dataFooters.imageLinkedin.url}
              linkedin={dataFooters.linkedin}
              imageYoutube={dataFooters.imageYoutube.url}
              youtube={dataFooters.youtube}
              imageInstagram ={dataFooters.imageInstagram.url}
              instagram={dataFooters.instagram}
              titleNewsletter={dataFooters.titleNewsletter}
              btnSubscribe={dataFooters.btnSubscribe}
              textReserved={dataFooters. textReserved}
              imageLink={dataFooters.imageLink.url}
            />
            
        </div>
    )
}
