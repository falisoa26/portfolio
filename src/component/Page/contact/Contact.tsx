import React, { useRef, useState } from 'react'
import Text from '../../general/text/Text'
import Local from '../../general/icons/Local'
import Email from '../../general/icons/Email'
import { TextField } from '@mui/material'
import Buttonmess from '../../general/button/Buttonmess'
import './Contact.scss'
import Phone from '../../general/icons/Phone'
import axios from 'axios'

type Props = {}



const Contact = (props: Props) => {

    let nom: any = useRef(null)
    let email: any = useRef(null)
    let messages: any = useRef(null)

    const [user, setUser] = useState({})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const serviceId: string = 'service_20fgyka'
    const templateId: string = 'template_3x42xqw'
    const publicKey: string = 'zjimQNebssIaVuhZo'

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            ...user
        }
    }

    const post = async (e: any) => {

        let a = nom.lastElementChild.firstElementChild.value
        let b = email.lastElementChild.firstElementChild.value
        let c = messages.lastElementChild.firstElementChild.value
        // console.log(a, b, c)

        try {
            if (!a || !b || !c) {
                alert('veuiller tous remplir les formulaires')
            }
            else {
                await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
                console.log('succes');

                nom.lastElementChild.firstElementChild.value = ''
                email.lastElementChild.firstElementChild.value = ''
                messages.lastElementChild.firstElementChild.value = ''
            }

        }
        catch (error: any) {
            console.error(`${error.message}`);
        }
    }

    return (
        <>
            <section className="mycontact" id='contact'>
                <div className="title">
                    <div className="litletitle">
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            color='#3F3E3E'


                        >
                            Contact
                        </Text>
                    </div>
                    <div className="bigtitle">
                        <Text
                            tag='h2'
                            className='bigtitle1'
                            size='36px'
                            color='#3F3E3E'

                        >
                            My
                        </Text>
                        <Text
                            tag='h2'
                            className='bigtitle2'
                            size='36px'
                        >
                            Contact
                        </Text>
                    </div>
                    <div className="textoContact">
                        <Text
                            tag='h3'
                            className='h3Contact'
                            color='#3F3E3E'

                        >
                            Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                        </Text>
                    </div>
                </div>
                <div className="containerContact">
                    <div className="Contactme">
                        <div className="adressContact">
                            <Local />
                            <div className="textAdress">
                                <Text
                                    tag='h2'
                                    className='h2tetAdress'

                                >
                                    Adress
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3textAdress'
                                    size='20px'
                                    color='#3F3E3E'

                                >
                                    Antananarive
                                </Text>
                            </div>
                        </div>
                        <div className="adressContact">
                            <Email />
                            <div className="textAdress">
                                <Text
                                    tag='h2'
                                    className='h2tetAdress'
                                >
                                    Email
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3textAdress'
                                    size='20px'
                                    color='#3F3E3E'

                                >
                                    falisoan123@gmail.com
                                </Text>
                            </div>
                        </div>
                        <div className="adressContact">
                            <Phone />
                            <div className="textAdress">
                                <Text
                                    tag='h2'
                                    className='h2tetAdress'
                                >
                                    Phone
                                </Text>
                                <Text
                                    tag='h3'
                                    className='h3textAdress'
                                    size='20px'
                                    color='#3F3E3E'

                                >
                                    +126329419582
                                </Text>
                            </div>
                        </div>

                    </div>
                    <div className="inputContact">
                        <div className="inputName">
                            <TextField ref={el => nom = el} className="outlined-basic" name='nom' onChange={handleChange} label="Your Name" variant="outlined" />
                        </div>
                        <div className="inputEmail">
                            <TextField ref={el => email = el} className="outlined-basic" name='email' onChange={handleChange} label="Your Email" variant="outlined" />
                        </div>
                        <div className="inputMess">
                            <TextField ref={el => messages = el} className="outlined-basic" name='messages' id='inputMessage' label="Message" onChange={handleChange} variant="outlined" />
                        </div>
                        <Buttonmess className='btnmss' text='Send mess' onClick={post} />

                    </div>

                </div>


            </section></>
    )
}


export default Contact;