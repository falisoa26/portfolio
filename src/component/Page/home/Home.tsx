import React, { useEffect } from 'react'
import Text from '../../general/text/Text'
import './Home.scss'
import Button from '../../general/button/Button'
import MyPhoto from '../../../Image/ImgHome/ImgHero/picture.png'
import About from '../about/About'
import Services from '../service/Services'
import Skill from '../skill/Skill'
import Portfolio from '../portfolio/Portfolio'
import Testimonial from '../testiminial/Testimonial'
import Contact from '../contact/Contact'
import gsap from 'gsap'







type Props = {}

const Home = (props: Props) => {
    useEffect(() => {
        gsap.timeline().fromTo('.nom', {
            opacity: 0,
        }, {
            stagger: 0.2,
            opacity: 1,
            duration: 1,
            // repeat: -1,
        }).fromTo('.job', {
            opacity: 0,
        }, {
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            // repeat: -1,

        })
    })



    return (
        <>
            <section className='hero' id='home'>

                <div className="myImage">
                    <img src={MyPhoto} className='sariko' />
                </div>
                <div className="presentation">
                    <div className="introduction">
                        <Text
                            tag='h3'
                            className='h3'

                        >
                            INTRODUCTION
                        </Text>
                    </div>
                    <div className="myName">
                        <Text
                            tag='h1'
                            className='h1part1'
                        >
                            Hi, I 'm
                        </Text>
                        <div className="stagger">
                            <span className='nom'>N</span>
                            <span className='nom'>y</span>
                            <span className='nom'>A</span>
                            <span className='nom'>n</span>
                            <span className='nom'>t</span>
                            <span className='nom'>s</span>
                            <span className='nom'>a</span> &nbsp;
                            <span className='nom'>F</span>
                            <span className='nom'>a</span>
                            <span className='nom'>l</span>
                            <span className='nom'>i</span>
                            <span className='nom'>s</span>
                            <span className='nom'>o</span>
                            <span className='nom'>a</span>
                        </div>
                    </div>
                    <div className="myJob">
                        <Text
                            tag='h1'
                            className='h1part2'
                            color=''
                        >
                            A
                        </Text>
                        <div className="stagger">

                            <span className='job'>D</span>
                            <span className='job'>e</span>
                            <span className='job'>v</span>
                            <span className='job'>e</span>
                            <span className='job'>l</span>
                            <span className='job'>o</span>
                            <span className='job'>p</span>
                            <span className='job'>p</span>
                            <span className='job'>e</span>
                            <span className='job'>u</span>
                            <span className='job'>r</span>


                        </div>
                    </div>
                    <div className="textHero">
                        <Text
                            tag='h3'
                            className='h3'
                            weight={100}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicingdolor sit amet consectetur adipisicing elit. Fuga earum sunt inventore debitis dolor, laudantium necessitatibus ex.
                        </Text>
                    </div>
                    <div className="btn">
                        <Button />
                    </div>
                </div>
            </section>

            <section className="intro">
                <About />
            </section>

            <section className="services">
                <Services />
            </section>

            <section className="skill">
                <Skill />
            </section>

            <section className="portfolio">
                <Portfolio />
            </section>

            <section className="testimonial">
                <Testimonial />
            </section>

            <section className="mycontact">
                <Contact />
            </section>
        </>

    )
}

export default Home