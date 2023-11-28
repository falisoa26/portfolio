import React from 'react'
import Text from '../../general/text/Text'
import Sir from '../../../Image/ImgHome/ImgTestimonial/Ellipse 5.png'
import { Rating } from '@mui/material'

type Props = {}

const Cardtest = (props: Props) => {
    return (
        <>
            <div className="cardtemoingnage">
                <div className="temoin">
                    <div className="imgtes">
                        <img src={Sir} />
                    </div>
                    <div className="name">
                        <Text
                            tag='h2'
                            className='bigtitle2'
                            size='36px'

                        >
                            Person One
                        </Text>
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            weight={100}
                        >
                            Albert Estheing
                        </Text>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </div>
                </div>

                <div className="textoTestimonial">
                    <Text
                        tag='h3'
                        className='h3'
                        size='20px'
                        weight={100}
                    >
                        Lorem ipsum dolor sit. Excepturi aperiam ipsam eligendi delectus ipsa quos maxime perferendis!
                    </Text>
                </div>
            </div>
        </>
    )
}

export default Cardtest