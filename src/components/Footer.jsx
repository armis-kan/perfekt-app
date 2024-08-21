import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm w-[95%] lg:w-[80%] mx-auto text-white shadow-md">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="./assets/logoPLAVA.svg"
                            className="sm:w-36 sm:h-36 w-44 h-44"
                            alt="Perfekt Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#landing" className="hover:underline me-4 md:me-6">Naslovna</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline me-4 md:me-6">Naše usluge</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline me-4 md:me-6">Kontakt</a>
                        </li>
                        <li>
                            <a href="#gallery" className="hover:underline me-4 md:me-6">Galerija</a>
                        </li>
                        <li>
                            <a href="#location" className="hover:underline">Gdje se nalazimo</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-200 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Samouslužna autopraonica PERFEKT</a>. Sva prava zadržana.</span>
            </div>
        </footer>

    )
}

export default Footer