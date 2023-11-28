import React from 'react'
import './Footer.scss'
import Text from '../../general/text/Text'
import Facebook from '../../general/icons/Facebook'
import Twiter from '../../general/icons/Twiter'
import Instagram from '../../general/icons/Instagram'
import Linkding from '../../general/icons/Linkding'
import ImgLine from '../../../../src/Image/ImgFooter/Line 1 (1).png'

export default function Footer() {
    return (
        <>
            <footer className='foot'>
                <div className="nameFooter">
                    <Text
                        tag='h2'
                        className='h2'
                        size='36px'
                    >
                        Ny Antsa Falisoa
                    </Text>
                </div>
                <div className="textFooter">
                    <Text
                        tag='h4'
                        className='h6'
                        size='16px'
                        weight={100}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius voluptatibus,temporibus nihil.Eius voluptatibus, eveniet adipisci fugit commodi nemo provident expedita enim temporibus nihil.
                    </Text>

                </div>
                <div className="iconsFooter">
                    <Facebook />
                    <Linkding />
                    <Twiter />
                    <Instagram />

                </div>
                <div className="imageFooter">
                    <img src={ImgLine} />
                </div>
                <div className="minText">
                    <Text
                        tag='h4'
                        className='h6'
                        size='16px'
                        weight={100}
                    >
                        Copyright @2023 All Right Reserved By WebFolio
                    </Text>
                </div>

            </footer>
        </>
    )
}
