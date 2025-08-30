import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'

const ExperienceSection = () => {
    return (
        <div className='container'>
            <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
                <div className='w-full h-full md:px-20 px-5'>
                    <TitleHeader title="Professional Work Experience" sub="👨🏻‍💻 My Career Overview" />
                </div>

                <div className='mt-32 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card, index) => (
                            <div
                                key={card.title}
                                className='exp-card-wrapper flex justify-center px-5 md:px-10'
                            >
                                <div className='flex flex-col xl:flex-row items-center justify-center gap-10 max-w-6xl w-full'>

                                    <div className='w-full xl:w-2/6 flex justify-center'>
                                        <GlowCard card={card} index={index}>
                                            <div>
                                                <img
                                                    src={card.imgPath}
                                                    alt={card.title}
                                                    className="mx-auto"
                                                />
                                            </div>
                                        </GlowCard>
                                    </div>

                                    <div className='w-full xl:w-4/6 flex justify-center'>
                                        <div className='flex items-start'>
                                            <div className='timeline-wrapper'>
                                                <div className='timeline' />
                                                <div className='gradient-line w-1 h-full' />
                                            </div>

                                            <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                                <div className='timeline-logo'>
                                                    <img src={card.logoPath} alt="logo" />
                                                </div>

                                                <div>
                                                    <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                                    <p className='my-5 text-white-50'>
                                                        {card.date}
                                                    </p>

                                                    <p className='text-[#839cb5] italic'>
                                                        Responsibilites
                                                    </p>

                                                    <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                        {card.responsibilities.map((responsibility) => (
                                                            <li key={responsibility} className='text-lg'>
                                                                {responsibility}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExperienceSection
