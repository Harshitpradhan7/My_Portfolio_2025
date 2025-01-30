import React from 'react'

const Contact = () => {
    return (
        <div >
            <section id="contact" className="h-screen py-16 bg-gradient-to-br from-gray-900 to-black text-white text-center">
                <h2 className="text-4xl font-bold">Contact Me</h2>
                <p className="text-gray-400 mt-2">Let's connect! Reach out via email or LinkedIn.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <a href="mailto:pradhanharshit089@gmail.com" className="text-blue-400 hover:underline">Email</a>
                    <a href="https://www.linkedin.com/in/harshitpradhan/" className="text-blue-400 hover:underline">LinkedIn</a>
                    <a href="https://github.com/Harshitpradhan7" className="text-blue-400 hover:underline">GitHub</a>
                </div>
            </section>
        </div>
    )
}

export default Contact
