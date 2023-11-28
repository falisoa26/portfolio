import React from 'react'
import Text from '../../general/text/Text'
import ImgAbout from '../../../Image/ImgHome/ImgAbout/imageabout.png'
import Buttoncv from '../../general/button/Buttoncv'
import './About.scss'

type Props = {}

function About({ }: Props) {
    return (
        <>
            <section className="intro" id='about'>
                <div className="title">
                    <div className="litletitle">
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            color='#3F3E3E'


                        >
                            My intro
                        </Text>
                    </div>
                    <div className="bigtitle">
                        <Text
                            tag='h2'
                            className='bigtitle1'
                            size='36px'
                        >
                            About
                        </Text>
                        <Text
                            tag='h2'
                            className='bigtitle2'
                            size='36px'
                        >
                            Me
                        </Text>
                    </div>
                </div>
                <div className="composeIntro">
                    <div className="imgIntro">
                        <img src={ImgAbout} width='100%' />
                    </div>
                    <div className="aboutIntro">
                        <Text
                            tag='h2'
                            className='h2about'
                            color='#3F3E3E'

                        >
                            PERSONAL INFOS
                        </Text>
                        <div className="aboutMe">
                            <div className="aboutabout">
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}

                                >
                                    First name : Falisoa
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}
                                >
                                    Last name : Ny Antsa
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}
                                >
                                    Nationality : Malagasy
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}
                                >
                                    Adress : Antananarivo
                                </Text>
                            </div>
                            <div className="aboutabout">
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}
                                >
                                    Email : falisoan123@gmail.com
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}
                                >
                                    Phone : +126 32 94 195 82
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}
                                >
                                    Skype : FalisoanyAntsa
                                </Text>

                            </div>

                            <div className="textAbout">
                                <Text
                                    tag='h3'
                                    className='h3about'
                                    weight={100}

                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores corporis fuga aut veniam et quis nulla, consequuntur deleniti labore sequi soluta reiciendis!

                                </Text>
                            </div>
                            <div className="btnIntro">
                                <Buttoncv />
                            </div>



                        </div>
                    </div>
                </div>



            </section>

        </>
    )
}

export default About;