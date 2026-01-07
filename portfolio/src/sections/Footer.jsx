import React from 'react'
import { socialImgs } from '../constants/index.js'

const Footer = () => {
    return (
        <footer className="footer border-t border-black-50">
            <div className="footer-container items-center">
                <div className="flex gap-4 text-sm md:text-base justify-center md:justify-start">
                    <p className="hover:text-white transition-colors">Terms & Conditions</p>
                    <p className="text-white-50/20">|</p>
                    <p className="hover:text-white transition-colors">Privacy Policy</p>
                </div>

                <div className="flex justify-center items-center">
                    <p className="text-white-50 text-center text-sm md:text-base">
                        All Rights Reserved @TejaNaik
                    </p>
                </div>

                <div className="socials md:justify-end">
                    {socialImgs.map((social) => (
                        <div key={social.name} className="icon group">
                            <img
                                src={social.imgPath}
                                alt={social.name}
                                className="size-5 opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
