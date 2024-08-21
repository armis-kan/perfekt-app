import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const nameRef = useRef(null);
    const numberRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,    
                number: numberRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value
            });
            alert("Poruka je uspješno poslana. Hvala Vam na interesu!");
        } catch (error) {
            console.log(error);
            alert("Nismo uspjeli poslati email. Molimo pokušajte ponovo.");
        } finally {
            setLoading(false);
            nameRef.current.value = "";
            numberRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        }
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <section id='contact' className="relative py-24 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm w-[95%] lg:w-[80%] mx-auto text-white shadow-md mt-10">

                <div className="absolute top-1 right-1 lg:w-64 lg:h-64 w-32 h-32 opacity-10 flex items-center justify-center">
                    <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    >
                        <path d="m10.25 8c0 3.25 4 3.25 4 0 0-3.45178-2.7982-6.25-6.25-6.25-3.45178 0-6.25 2.79822-6.25 6.25s2.79822 6.25 6.25 6.25c2.25 0 3.25-1 3.25-1"></path>
                        <circle cx="8" cy="8" r="2.25"></circle>
                    </svg>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">Kontakt</span>
                        <h2 className="text-4xl text-center font-bold text-gray-900 py-5">Kontakt</h2>
                        <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl p-4 mx-auto">
                            Za sva pitanja stojimo na raspolaganju, a možete nas kontaktirati putem dolje navedene forme:
                        </p>
                        <svg className='w-12 h-12 mx-auto opacity-40 mt-5' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 23l-1-0v-8.938c0-0.011-0.003-0.021-0.003-0.031s0.003-0.020 0.003-0.031c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v8h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM16 11c1.105 0 2-0.896 2-2s-0.895-2-2-2-2 0.896-2 2 0.896 2 2 2zM16-0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.031c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032z"></path> </g></svg>
                        <div className='text-left w-full mt-4 flex flex-col md:flex-row gap-10 justify-center p-6'>
                            <p className="text-lg text-justify font-normal text-gray-500 max-w-md md:max-w-2xl mb-4 indent-8">
                                Samouslužna autopraonica PERFEKT nalazi se na <b>magistralnom putu Velika Kladuša - Bužim</b>. <b>Cilj je pružiti jednostavno i kvalitetno
                                    održavanje limenih ljubimaca </b> tako što će ponuditi vrhunske usluge pranja i čišćenja vozila po pristupačnim cijenama.
                            </p>

                            <p className="text-lg text-justify font-normal text-gray-500 max-w-md md:max-w-2xl indent-8">
                                Sistem samouslužne autopraonice omogućuje brzu i jednostavnu uslugu pranja vozila, a <b>korisnici sami biraju
                                    vrstu i količinu sredstava za pranje, kao i trajanje pranja</b>. Uz to, korisnici mogu koristiti i usluge usisavanja
                                i pranja poda, a sve uz pomoć modernih uređaja i sredstava za pranje.
                            </p>
                        </div>

                    </div>

                    {/* Flex container for two divs in 40/60 ratio */}
                    <div className="flex flex-col md:flex-row gap-10 min-h-[400px] m-4">
                        {/* Left side: 40% width, with two stacked divs */}
                        <div className="flex-1 flex flex-col justify-between min-h-full">
                            {/* First div */}
                            <div className="p-6 bg-gradient-to-tr from-gray-500 to-zinc-600 rounded-2xl shadow text-white h-1/2">
                                <div className='flex flex-row items-center gap-2'>
                                    <svg className='w-12 h-12 bg-white p-2 rounded-xl' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m13.25 7c0 3.75-5.25 7.25-5.25 7.25s-5.25-3.5-5.25-7.25c0-2.89949 2.35051-5.25 5.25-5.25 2.8995 0 5.25 2.35051 5.25 5.25z"></path> <circle cx="8" cy="7" r="1.25" fill="#000000"></circle> </g></svg>
                                    <h2 className="text-xl font-semibold">Adresa</h2>
                                </div>
                                <p className='text-lg pt-5 pr-5 mb-5'>
                                    Velika Kladuša, Podzvizd bb <br />
                                    Odmah uz magistralnu cestu M4.3 <br />
                                </p>
                                <a href="#location" className='text-sm text-gray-300 bg-slate-700 p-3 rounded-lg mt-5 flex flex-row gap-3 w-fit items-center hover:bg-blue-800 transition-all ease-in-out hover:text-white'>
                                    Prikaži na mapi
                                    <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 11L12 15M12 15L16 11M12 15V3M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.87958 19.412 6.13007 17 4.51555" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>                                </a>
                            </div>
                            {/* Second div */}
                            <div className="p-6 bg-gradient-to-br from-cyan-600 to-zinc-300 rounded-2xl shadow text-white mt-6 h-1/2">
                                <div className='flex flex-row items-center gap-2'>
                                    <svg className='w-12 h-12 bg-white p-2 rounded-xl' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m10.25 8c0 3.25 4 3.25 4 0 0-3.45178-2.7982-6.25-6.25-6.25-3.45178 0-6.25 2.79822-6.25 6.25s2.79822 6.25 6.25 6.25c2.25 0 3.25-1 3.25-1"></path> <circle cx="8" cy="8" r="2.25"></circle> </g></svg>
                                    <h3 className="text-xl font-semibold">E-mail adresa</h3>
                                </div>
                                <p className='text-lg pt-5 pr-5'>
                                    autopraonicaperfekt@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Right side: 60% width, with form */}
                        <div className="flex-1 p-6 border border-gray-200 rounded-lg shadow min-h-full">
                            <form className='rounded-2xl text-black' onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Ime
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        ref={nameRef}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Vaše ime"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                        Broj tel.
                                    </label>
                                    <input
                                        type="number"
                                        id="number"
                                        ref={numberRef}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Vaš br. tel."
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        ref={emailRef}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Vaš email"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Poruka
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        ref={messageRef}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Vaša poruka"
                                        required
                                    ></textarea>
                                </div>

                                <div className='w-full flex justify-center items-center'>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-12 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-950 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ease-in-out"
                                    >
                                        {loading ? "Šaljem..." : "Pošalji"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
