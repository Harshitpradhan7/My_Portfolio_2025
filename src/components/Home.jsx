import React from 'react'
const Home = () => {
    return (
        <>
            <div className='home-page'>
                <section className=" w-screen h-screen m-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white ">
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Hi, I'm Harshit Pradhan
                        </h1>
                        <p className="mt-4 text-lg">Frontend Developer | React | JavaScript</p>
                        <a
                            href="/project"
                            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                        >
                            View My Work
                        </a>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Home
