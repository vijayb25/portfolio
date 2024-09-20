import React from 'react';
import EmailForm from '../components/Socials/EmailForm';

function Contact() {
    return (
        <div className='wrapper'>
            <div className="lg:flex gap-4 flex-wrap items-center mt-40 px-4 md:flex-row sm:flex-col">
                <div className="lg:w-[49%] md:w-[100%] sm:w-full">
                    <h2 className="font-bold text-4xl uppercase mb-4">Get In Touch</h2>
                    <p>Thank you for visiting my portfolio! If you'd like to discuss a project, collaborate, or just connect, feel free to reach out.</p>
                </div>
                <EmailForm/>
            </div>
            <div className="flex flex-col gap-2 mt-5 px-4">
                <h2>You can also contact me through these platforms.</h2>
                <ul className="flex gap-4">
                <li><a href="mailto:jaybaclay025@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" >
                <i className="fab fa-google fa-2x text-white hover:text-red-600"></i>
                </a></li>
                <li><a href="https://www.linkedin.com/in/vijay-baclay-3a4837269/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" >
                <i className="fab fa-linkedin fa-2x text-white hover:text-red-600"></i>
                </a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;