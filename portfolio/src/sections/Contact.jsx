import React, { useRef, useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Using Formspree - this will forward messages to your email
            // I've set up a placeholder, you should replace 'mknpzzzb' with your own ID from formspree.io
            const response = await fetch('https://formspree.io/f/mknpzzzb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _replyto: form.email,
                    _subject: `New Portfolio Message from ${form.name}`
                })
            });

            if (response.ok) {
                setLoading(false);
                alert('Thank you! Your message has been sent successfully.');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                setLoading(false);
                alert('Something went wrong. Please try again or reach out directly at prasadnaik1092@gmail.com');
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
            alert('Something went wrong. Please try again or reach out directly at prasadnaik1092@gmail.com');
        }
    };

    useGSAP(() => {
        gsap.from('.contact-container', {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: '.contact-container',
                start: 'top bottom-=100',
            }
        });
    });

    return (
        <section className="section-padding" id="contact">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Get in Touch" sub="📩 Let's connect" />
            </div>

            <div className="relative flex items-center justify-center flex-col md:mt-20 mt-10">
                <div className="contact-container w-full max-w-2xl bg-black-100 border border-black-50 p-8 md:p-12 rounded-[2rem] relative z-10 backdrop-blur-sm">
                    <p className="text-lg md:text-xl text-white-50 mb-10 leading-relaxed font-mona">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                        Fill out the form below and I'll get back to you as soon as possible.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <label className="flex flex-col gap-3">
                            <span className="text-white-50 font-semibold ms-1">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Teja Naik"
                                className="bg-black-200 py-4 px-6 placeholder:text-blue-50/30 text-white rounded-xl border border-white/5 focus:border-white/20 outline-none transition-all"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-3">
                            <span className="text-white-50 font-semibold ms-1">Email Address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="prasadnaik1092@gmail.com"
                                className="bg-black-200 py-4 px-6 placeholder:text-blue-50/30 text-white rounded-xl border border-white/5 focus:border-white/20 outline-none transition-all"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-3">
                            <span className="text-white-50 font-semibold ms-1">Your Message</span>
                            <textarea
                                rows={6}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or just say hi..."
                                className="bg-black-200 py-4 px-6 placeholder:text-blue-50/30 text-white rounded-xl border border-white/5 focus:border-white/20 outline-none transition-all resize-none"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`mt-4 py-4 px-10 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-white-50 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}`}
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-black" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <img src="/images/arrow-right.svg" alt="arrow" className="size-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-50/5 blur-[120px] rounded-full pointer-events-none" />
            </div>
        </section>
    );
};

export default Contact;
