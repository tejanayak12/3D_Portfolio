import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const projectchatai = useRef(null);
    const projecthrrd = useRef(null);
    const projecthiremepro = useRef(null);

    useGSAP(() => {
        const projects = [projectchatai.current, projecthiremepro.current, projecthrrd.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>

                    {/* LEFT */}
                    <a
                        href="https://ai-bg-removal-teja.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='first-project-wrapper'
                        ref={projectchatai}
                    >
                        <div className='image-wrapper'>
                            <img src="/images/chatai.png" alt="aibgremovalpic" />
                        </div>
                        <div className='text-content'>
                            <h2>AI Background Remover App</h2>
                            <p className='text-white-50 md:text-xl'>
                                A web app built with React.js, Tailwind CSS, Node.js, MongoDB, and other front-end tools that lets users upload photos and get AI-generated background-free images quickly and beautifully.
                            </p>
                        </div>
                    </a>

                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <a
                            href="https://hrrd.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='project'
                            ref={projecthrrd}
                        >
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/hrrd.png" alt="hrrd" />
                            </div>
                            <h2>Full Stack Job Portal for Recruiters</h2>
                        </a>

                        <a
                            href="https://hire-me-pro.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='project'
                            ref={projecthiremepro}
                        >
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/hiremepro.png" alt="hiremepro" />
                            </div>
                            <h2>HIRE_ME_PRO AI Job Seeker Platform</h2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCaseSection;
