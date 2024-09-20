import React from 'react';
import Header from '../components/Header';
import '../index.css'

function About() {
    return (
       <>
        <div className="wrapper">
            <div className="about_con mt-40 px-3 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-10">
                <figure className='shrink-0 hidden md:block'>
                    <img src="undraw_Drink_coffee_v3au.png" alt="" />
                </figure>

                <div className="max-w-[800px]">
                    <div className="typewriter-container">
                        <h1 className="block font-bold text-4xl">ABOUT ME</h1>
                    </div>
                    <p className="mt-5 mb-5">Hi! I'm <span className="font-bold text-xl">Vijay</span>, an aspiring web developer with 2 years hands on experience in web development focusing in wordpress. I am 27 years old and currently looking for opportunities that would help me achieve my career goals. I spend most of my time exploring modern web technologies.</p>
                    <a className="block w-max p-3 bg-red-700 mb-5 rounded-md hover:bg-red-600" href="/Baclay_Vijay.pdf" download="Baclay_Vijay.pdf">Resume</a>

                    <h2 className="font-bold text-4xl">Skills</h2>
                    <ul className="flex items-center gap-3 mt-4 flex-wrap">
                        <li><i className="fa-brands fa-html5 text-4xl"></i></li>
                        <li><i className="fa-brands fa-css3-alt text-4xl"></i></li>
                        <li><i className="fa-brands fa-wordpress text-4xl"></i></li>
                        <li><i className="fa-brands fa-js text-4xl"></i></li>
                        <li><i className="fa-brands fa-git text-4xl"></i></li>
                        <li><i className="fa-brands fa-php text-4xl"></i></li>
                        <li><i className="fa-brands fa-react text-4xl"></i></li>
                    </ul>
                </div>
            </div>
        </div>
       </>
    );
}

export default About;