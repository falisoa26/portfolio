import React from 'react'
import Text from '../../general/text/Text'
import './Testimonial.scss'
import Cardtest from '../../display/card/Cardtest'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


type Props = {}

const Testimonial = (props: Props) => {
    return (
        <>

            <section className="testimonial" id='testimonial'>
                <div className="title">
                    <div className="litletitle">
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            color='#3F3E3E'
                        >
                            What Clients Say
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
                            Testimonial
                        </Text>
                    </div>
                    <div className="cardTestimonial">
                        <Splide aria-label="My Favorite Images" options={{
                            autoplay: true,
                            perPage: 2,
                            gap: 20,
                            // arrows: false,
                            speed: 1000,
                            // type: 'loop',
                        }}>
                            <SplideSlide>
                                <Cardtest />
                            </SplideSlide>
                            <SplideSlide>
                                <Cardtest />
                            </SplideSlide>
                            <SplideSlide>
                                <Cardtest />
                            </SplideSlide>
                            <SplideSlide>
                                <Cardtest />
                            </SplideSlide>
                        </Splide>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Testimonial