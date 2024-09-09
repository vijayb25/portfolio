import React from 'react';

function Contact() {
    return (
        <div className='wrapper'>
            <div className="mt-40 px-4">
                <div className="typewriter-container w-max">
                    <h2 className="font-bold text-4xl uppercase typewriter">Contacts</h2>
                </div>
                <p>You can reach me through these platforms. Looking forward to connecting!</p>
                <div className="flex gap-2 mt-5">
                    <a href="mailto:jaybaclay025@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" >
                    <i className="fab fa-google fa-2x text-white hover:text-red-600"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vijay-baclay-3a4837269/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" >
                    <i className="fab fa-linkedin fa-2x text-white hover:text-red-600"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;