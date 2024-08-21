import React from 'react';
import { motion } from "framer-motion";

const Services = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <section id="services" className="relative py-24 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm w-[95%] lg:w-[80%] mx-auto text-white shadow-md mt-10 -z-10">

                <div className="absolute top-1 right-1 lg:w-64 lg:h-64 w-32 h-32 opacity-10 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path> </g></svg>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <span
                            className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">Usluge</span>
                        <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
                            Nudimo fantastične usluge
                        </h2>
                        <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                            Ponosno Vam predstavljamo najbolje osigurane ponude
                            za naše vjerne i nove klijente:
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                                <div className="bg-red-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-red-300">
                                    <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#000000" strokeWidth="1.7280000000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294" stroke="#f00000" strokeLinecap="round"></path> <path d="M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z" stroke="#f00000"></path> <path d="M12 6V8" stroke="#f00000" strokeLinecap="round"></path> <path d="M5.63599 8.63574L7.0502 10.05" stroke="#f00000" strokeLinecap="round"></path> <path d="M18.364 8.63574L16.9498 10.05" stroke="#f00000" strokeLinecap="round"></path> <path d="M20.6934 17.3291L18.7615 16.8115" stroke="#f00000" strokeLinecap="round"></path> <path d="M3.30664 17.3291L5.23849 16.8115" stroke="#f00000" strokeLinecap="round"></path> </g></svg>
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-3">
                                    Snažan pritisak vode
                                </h4>
                                <p className="text-sm font-normal text-gray-500">
                                    Olakšano detaljno pranje vozila zahvaljujući snažnom pritisku vode
                                </p>
                            </div>
                            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                                <div className="bg-green-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-green-600">
                                    <svg className='w-10 h-10' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#05eb09" d="M18.36 18.36V61.93C34.627 68.63 57.354 57.75 56.34 37.66c-.428-8.467-2.997-14.816-6.8-19.3H18.362zm70.935 0c-8.762 6.123-14.738 15.86-14.117 28.154 2.822 55.843 74.69 43.358 72.61 2.193-.73-14.484-6.11-24.363-13.638-30.346H89.295zm160.44 0c-.77 2.073-1.154 4.366-1.028 6.86 1.518 30.043 40.184 23.326 39.064 1.176-.153-3.05-.69-5.72-1.53-8.035h-36.504zm-39.6 14.732c-13.868-.192-28.148 9.758-27.35 25.554 2.04 40.344 53.96 31.326 52.457 1.59-.956-18.91-12.87-26.975-25.107-27.144zm72.136 30.902c-18.84-.26-38.24 13.26-37.157 34.727.16 3.18.553 6.13 1.145 8.862-13.22-.435-27.03 8.986-26.27 24.068 1.228 24.295 21.65 29.56 35.858 22.89-3.048 5.303-7.85 10.39-14.81 14.89-30.926 20-71.9-25.052-41.349-54.955-17.843-15.657-45.15-14.958-64.37-2.758-11.738-25.242-52.11-14.796-50.764 11.836.955 18.904 12.577 27.248 24.785 27.836 14.04-3.622 30.87 3.156 31.998 25.49 1.277 25.31-37.17 35.205-48.2 11.073-14.592 6.695-25.635 20.36-24.71 38.668 1.84 36.44 27.72 49.087 51.076 45.316-1.726 10.21-2.637 20.695-2.637 31.396 0 103.293 83.735 187.025 187.028 187.025 103.293 0 187.025-83.734 187.025-187.025 0-86.036-58.096-158.493-137.197-180.305-5.765-19.033-22.106-25.988-37.472-24.066-1.99-24.32-17.772-34.743-33.977-34.966zM41.09 120.23c-8.12-.113-16.354 2.547-22.73 7.426v51.614c19.334 16.46 55.685 3.082 54.27-24.944-1.2-23.755-16.17-33.886-31.54-34.097zm305.99 23.813c4.212-.068 8.445.638 12.496 1.986-12.756 1.485-24.682 11.16-23.945 25.75 1.74 34.452 39.317 33.438 50.296 14.275-1.235 7.157-4.886 14.728-11.713 22.28-28.037 31.018-88.545-11.576-50.51-53.66 6.57-7.27 14.926-10.495 23.377-10.632zm-74.404 41.64c11.91.163 23.51 8.013 24.44 26.42 1.463 28.96-49.077 37.74-51.06-1.53-.78-15.385 13.12-25.074 26.62-24.89zm124.322 42.99c9.134.124 18.197 1.884 26.598 5.42-25.967-3.65-55.135 12.415-58.756 40.22-19.837-11.83-51.45 1.51-50.13 27.628 2.172 43.01 49.663 41.154 62.476 16.634 25.55 30.17 80.996 15.122 87.332-23.23.246 2.257.45 4.556.572 6.94 3.127 61.913-79.096 90.707-119.992 51.277-30.644 12.28-71.25 1.878-79.932-42.828-18.6 10.04-47.025 3.74-48.682-29.058-1.528-30.262 41.848-43.098 58.39-18.63 16.493-20.24 47.792-28.115 72.108-17.59 13.89-11.007 32.075-17.03 50.016-16.782zm-215.773 62.143c17.442-.282 35.54 20.266 17.142 40.622-17.71 19.596-55.942-7.316-31.912-33.903 4.15-4.593 9.43-6.632 14.77-6.72zm51.447 44.147c.478.006.957.024 1.433.05-6.825 4.058-11.688 11.082-11.228 20.186 1.36 26.906 26.273 30.494 40.2 20.347-6.124 30.702-61.747 37.17-64.085-9.106-.983-19.457 16.602-31.712 33.68-31.477zm66.8 48.166c-2.646 4.508-4.096 9.84-3.792 15.856 2.55 50.456 67.483 39.175 65.605 1.977-.033-.658-.082-1.297-.137-1.934.522-.663 1.07-1.325 1.668-1.987 17.356-19.203 54.816 7.17 31.27 33.22-7.726 8.55-19.426 8.052-27.965 2.587-8.86 41.688-84.556 50.255-87.75-12.948-.845-16.75 8.347-29.605 21.1-36.773z"></path></g></svg>
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-3">
                                    Savršeno djelotvorna aktivna turbo pjena
                                </h4>
                                <p className="text-sm font-normal text-gray-500">
                                    Jednim nanosom pjene na površinu vozila, uklanja i najtvrdokornije
                                    nečistoće
                                </p>
                            </div>
                            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                                <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                                    <svg className='w-10 h-10' fill="#42b3c2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#42b3c2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 12" id="Layer_12"> <path d="M25.41,7.09l-9-4a1,1,0,0,0-.82,0l-9,4A1,1,0,0,0,6,8v8.56A8.69,8.69,0,0,0,8.91,23l6.43,5.71a1,1,0,0,0,1.32,0L23.09,23A8.69,8.69,0,0,0,26,16.56V8A1,1,0,0,0,25.41,7.09ZM24,16.56a6.67,6.67,0,0,1-2.24,5L16,26.66l-5.76-5.12a6.67,6.67,0,0,1-2.24-5V8.65l8-3.56,8,3.56Z"></path> <path d="M13,14.29a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,19,11.79l-4.29,4.3Z"></path> </g> </g></svg>
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-3">
                                    Fantastična zaštita nano voskom
                                </h4>
                                <p className="text-sm font-normal text-gray-500">
                                    Nano vosak pruža dugotrajan sjaj i zaštitu vozila od spoljnih
                                    utjecaja
                                </p>
                            </div>
                            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                                <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                                    <svg
                                        className='w-10 h-10'
                                        fill="#97761c"
                                        viewBox="0 0 938.692 938.692"
                                        stroke="#97761c"
                                    >
                                        <path d="M689.212,37.158C686.63,16.636,669.09,0,650.035,0H512.818c0.003,0.057,0.011,0.113,0.012,0.17l3.607,175.708c0.104,5.087-4.073,9.211-9.334,9.211h-72.896c-5.259,0-9.399-4.124-9.246-9.211L430.247,0.17c0.002-0.057,0.01-0.113,0.013-0.17H295.782c-19.055,0-36.727,16.636-39.469,37.158L140.768,901.534c-2.743,20.521,19.369,37.158,49.39,37.158H402.48c-0.273-0.76-0.424-1.553-0.398-2.376l5.525-183.663c0.153-5.087,5.853-9.211,12.729-9.211h95.306c6.876,0,12.535,4.124,12.641,9.211l3.771,183.663c0.018,0.823-0.14,1.617-0.422,2.376h216.636c30.021,0,52.265-16.638,49.684-37.158L689.212,37.158z M422.657,252.468c0.152-5.087,4.677-9.211,10.104-9.211h75.231c5.428,0,9.913,4.124,10.017,9.211l3.608,175.708c0.104,5.087-4.667,9.211-10.657,9.211h-83.023c-5.989,0-10.722-4.124-10.568-9.211L422.657,252.468z M514.787,687.48h-93.061c-6.714,0-12.032-4.124-11.88-9.211l5.286-175.708c0.153-5.088,5.264-9.211,11.417-9.211h85.269c6.152,0,11.225,4.123,11.328,9.211l3.608,175.708C526.859,683.356,521.501,687.48,514.787,687.48z" />
                                    </svg>                        </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-3">
                                    Pristupačnost
                                </h4>
                                <p className="text-sm font-normal text-gray-500">
                                    Odmah uz glavnu cestu, pristupačno svima, u bilo koje doba dana
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-5 p-10 rounded-2xl bg-custom-bg bg-cover bg-center w-full h-full shadow-lg">

                        <div className='w-full flex flex-col items-center text-left text-black'>
                            <h2 className="text-2xl text-white bg-gray-100 bg-opacity-30 rounded-2xl p-4 font-semibold mb-4">Programi pranja</h2>
                            <div className="relative flex flex-col items-start w-full md:w-[90%] space-y-6 text-white pl-4">
                                <div className="relative p-4 rounded-lg w-full">
                                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white rounded-full w-8 h-8 flex items-center justify-center font-extrabold">1</div>
                                    <h2 className="text-lg font-semibold uppercase">Aktivna Turbo Pjena</h2>
                                    <p className='text-sm'>Odabrati opciju broj 1 i pištoljem br. 2 nanijeti pjenu na površinu vozila. Ostaviti pjenu otprilike 1-2 minute i zatim detaljno isprati čistom hladnom vodom.</p>
                                </div>
                                <div className="relative p-4 rounded-lg w-full">
                                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h2 className="text-lg font-semibold uppercase">Pranje toplom vodom i mikroprahom</h2>
                                    <p className='text-sm'>Odabrati opciju broj 2 i pištoljem br. 1 detaljno saprati vozilo.</p>
                                </div>
                                <div className="relative p-4 rounded-lg w-full">
                                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h2 className="text-lg font-semibold uppercase">Nano vosak (zaštita i sjaj)</h2>
                                    <p className='text-sm'>Odabrati opciju broj 3 i pištoljem br. 1 nanijeti nano vosak na površinu vozila.</p>
                                </div>
                                <div className="relative p-4 rounded-lg w-full">
                                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h2 className="text-lg font-semibold uppercase">Ispiranje čistom hladnom vodom</h2>
                                    <p className='text-sm'>Odabrati opciju broj 4 i pištoljem br. 1 detaljno isprati vozilo.</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center text-left text-white'>
                            <h2 className="text-xl text-white bg-gray-100 bg-opacity-30 rounded-2xl p-4 font-semibold mb-4">Preporučeni tijek pranja</h2>
                            <div className="relative flex flex-col items-center space-y-6 w-full md:w-[90%] pl-4">
                                <div className="relative flex flex-col w-full h-fit p-4">
                                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">!</div>
                                    <div className='flex flex-col gap-4'>
                                        <p>Preporučljivo je prvo opcijom broj 2
                                            omekšati prljavštinu toplom vodom i mikroprahom.
                                        </p>
                                        <p>
                                            Nakon opcije broj 2, detaljno nanijeti aktivnu turbo pjenu
                                            (opcija broj 1) koja će svojim aktivnim djelovanjem ukloniti sve nečistoće.
                                            Ostaviti pjenu na vozilu 1-2 minute.
                                        </p>
                                        <p>
                                            Detaljno isprati vozilo čistom hladnom vodom (opcija broj 4). Potom nanijeti
                                            vosak (opcija broj 3) koji će pružiti dugotrajan sjaj i zaštitu vozila.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
        </motion.div>
    );
};

export default Services;
