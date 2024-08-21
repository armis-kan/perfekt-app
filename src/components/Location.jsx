import React from 'react'

const Location = () => {
    return (
        <section
            id="location"
            className="relative py-24 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm w-[95%] lg:w-[80%] mx-auto text-white shadow-md mt-10 mb-10"
        >
            <div className="absolute top-1 right-1 lg:w-64 lg:h-64 w-32 h-32 opacity-10 flex items-center justify-center">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m10.25 5.25v8.5m-4.5-10.5v8.5m-4 2.5v-9.5l4-2 4.5 2 4-2v9.5l-4 2-4.5-2z"></path> </g></svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
                        Lokacija
                    </span>
                    <h2 className="text-4xl text-center font-bold text-gray-900 py-5">Gdje se nalazimo</h2>
                    <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                        Samouslužna autopraonica PERFEKT nalazi se na magistralnom putu Velika Kladuša - Bužim.
                    </p>
                </div>

                {/* Google Maps iframe */}
                <div className="w-full h-96 mt-8">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180018.8993938862!2d15.579428672790543!3d45.17099482112489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766b14731f4a225%3A0xa6773bf48e6d5564!2sSamoposlu%C5%BEna%20Autopraonica!5e0!3m2!1shr!2sba!4v1724242560839!5m2!1shr!2sba"                        allowFullScreen=""
                        loading=""
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Location