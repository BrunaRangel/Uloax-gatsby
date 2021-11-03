import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'

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
        }
    }
`

export default function Index({ data }) {

    console.log(data.alldata)

    const dataHeaders = data.alldata.headers[0]

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
        </div>
    )
}
