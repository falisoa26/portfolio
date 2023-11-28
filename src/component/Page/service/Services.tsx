import React, { useEffect } from 'react'
import Text from '../../general/text/Text'
import Card from '../../display/card/Card'
import Word from '../../../Image/ImgHome/ImgServices/Serviceimg1.png'
import Pent from '../../../Image/ImgHome/ImgServices/Serviceimg2.png'
import Figma from '../../../Image/ImgHome/ImgServices/Serviceimg3.png'
import Pag from '../../../Image/ImgHome/ImgServices/Serviceimg4.png'
import Analitic from '../../../Image/ImgHome/ImgServices/Serviceimg5.png'
import Message from '../../../Image/ImgHome/ImgServices/Serviceimg6.png'
import "./Service.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
type Props = {}

gsap.registerPlugin(ScrollTrigger)
export default function Services({ }: Props) {
    useEffect(() => {
        gsap.fromTo('.card1', {
            opacity: 0,
            x: -300
        }, {
            opacity: 2,
            x: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".card1",
                start: "top center",
                end: "bottom center"
            }
            // ease: 'bounce'
        })
    })

    return (
        <>
            <section className="services" id='services'>
                <div className="title">
                    <div className="litletitle">
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            color='#3F3E3E'

                        >
                            Services I offer to My client
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
                            Services
                        </Text>
                    </div>
                </div>
                <div className="cardServices">
                    <div className="card1">
                        <div className='pub'>
                            <Card picture={Word} className="litlecard" children="Development" statue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus impedit." />
                        </div>
                        <div className='pub'>
                            <Card picture={Pent} className="litlecard" children="Development" statue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus impedit." />
                        </div>
                        <div className='pub'>
                            <Card picture={Figma} className="litlecard" children="Development" statue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus impedit." />
                        </div>

                        <div className='pub'>
                            <Card picture={Pag} className="litlecard" children="Development" statue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus impedit." />
                        </div>
                        <div className='pub'>
                            <Card picture={Analitic} className="litlecard" children="Development" statue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus impedit." />
                        </div>
                        <div className='pub'>
                            <Card picture={Message} className="litlecard" children="Development" statue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus impedit." />
                        </div>
                    </div>

                </div>


            </section>


        </>
    )
}