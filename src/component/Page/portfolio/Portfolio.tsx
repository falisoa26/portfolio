import React, { useEffect } from 'react'
import Text from '../../general/text/Text'
import PortfolioimgOne from '../../../Image/ImgHome/ImgPortfolio/photo1.png'
import PortfolioimgTwo from '../../../Image/ImgHome/ImgPortfolio/photo2.png'
import PortfolioimgThree from '../../../Image/ImgHome/ImgPortfolio/photo3.png'
import PortfolioimgFour from '../../../Image/ImgHome/ImgPortfolio/photo4.png'
import PortfolioimgFive from '../../../Image/ImgHome/ImgPortfolio/photo5.png'
import PortfolioimgSix from '../../../Image/ImgHome/ImgPortfolio/photo6.png'
import './Portfolio.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Props = {}

gsap.registerPlugin(ScrollTrigger)
function Portfolio({ }: Props) {
    useEffect(() => {
        gsap.fromTo('.containerPortfolio', {
            opacity: 0,
            x: -300
        }, {
            opacity: 2,
            x: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".containerPortfolio",
                start: "top center",
                end: "bottom center"
            }

        })
    })
    return (
        <>

            <section className="portfolio" id='portfolio'>
                <div className="title">
                    <div className="litletitle">
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            color='#3F3E3E'


                        >
                            Showcasing Some Of My Best Work
                        </Text>
                    </div>
                    <div className="bigtitle">
                        <Text
                            tag='h2'
                            className='bigtitle1'
                            size='36px'
                        >
                            My
                        </Text>
                        <Text
                            tag='h2'
                            className='bigtitle2'
                            size='36px'
                        >
                            Portfolio
                        </Text>
                    </div>
                </div>
                <div className="containerPortfolio">

                    <div className="imgPortfolio">
                        <div className="imagePort">
                            <img src={PortfolioimgOne} className='sariportfolio' />
                        </div>
                        <div className="imagePort">
                            <img src={PortfolioimgTwo} className='sariportfolio' />
                        </div>
                        <div className="imagePort">
                            <img src={PortfolioimgThree} className='sariportfolio' />
                        </div>

                        <div className="imagePort">
                            <img src={PortfolioimgFour} className='sariportfolio' />
                        </div>
                        <div className="imagePort">
                            <img src={PortfolioimgFive} className='sariportfolio' />

                        </div>
                        <div className="imagePort">
                            <img src={PortfolioimgSix} className='sariportfolio' />
                        </div>


                    </div>
                </div>


            </section>
        </>
    )
}

export default Portfolio