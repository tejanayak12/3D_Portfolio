import React from 'react'
import { testimonials } from '../constants/index.js'
import TitleHeader from '../components/TitleHeader.jsx'

const Testimonials = () => {
    return (
        <section id="testimonials" className="w-full section-padding">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="What My Clients Say" sub="💬 Testimonials" />
            </div>

            <div className="mt-20 padding-x-lg">
                <div className="grid-3-cols">
                    {testimonials.map(({ name, mentions, review, imgPath }) => (
                        <div key={name} className="card-border rounded-2xl p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:bg-black-50/50">
                            <div>
                                <div className="flex gap-2 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="size-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-white-50 text-lg leading-relaxed italic">
                                    "{review}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-8">
                                <img
                                    src={imgPath}
                                    alt={name}
                                    className="size-14 rounded-full object-cover border-2 border-white/10"
                                />
                                <div className="flex flex-col">
                                    <h4 className="text-white font-semibold text-lg">{name}</h4>
                                    <p className="text-blue-50 text-sm font-medium">{mentions}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
