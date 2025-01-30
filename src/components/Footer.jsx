import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="fixed bottom-0 w-screen bg-gray-800 text-white py-4 rounded">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Harshit Pradhan. No rights reserved.</p>
                    {/* <div className="mt-2">
                        <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
                        <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    </div> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer
