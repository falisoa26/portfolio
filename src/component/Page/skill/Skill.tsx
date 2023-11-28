import React from 'react'
import Text from '../../general/text/Text'
import LinearDeterminate from '../../display/card/Progess/LinearDeterminate'
import './Skill.scss'

type Props = {}

function Skill({ }: Props) {
    return (
        <>
            <section className="skill" id='skill'>
                <div className="title">
                    <div className="litletitle">
                        <Text
                            tag='h3'
                            className='h3'
                            size='20px'
                            color='#3F3E3E'


                        >
                            My Level Of Knowledge In Some Tools
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
                            Skills
                        </Text>
                    </div>
                </div>

                <div className="skillSkill">
                    <LinearDeterminate />
                </div>

            </section>
        </>
    )
}

export default Skill