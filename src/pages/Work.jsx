import React from 'react';

function Work() {
    return (
        <div className='wrapper'>
            <div className="work_container mt-40 px-4">
                <div className="typwriter-container w-max">
                <h2 className="font-bold text-4xl uppercase typewriter">Experience</h2>
                </div>

                <h2 className="font-bold text-4xl"><span className="block text-2xl normal-case mt-4"><small><figure><img src="pro-icon.png" alt="" /></figure></small><a href="https://www.proweaver.com" target='_blank' className="underline hover:text-red-500 hover:no-underline">Proweaver Inc.</a></span></h2>
                <span>Web Developer</span>
                <span className="block mb-4">2022-2024</span>
                <p>Convert designs into fully functional WordPress websites with seamless mobile responsiveness.</p>

                <h2 className="mt-5 font-bold text-3xl">Skills</h2>
                <ul className="flex items-center gap-3 mt-4 flex-wrap">
                    <li><i className="fa-brands fa-html5 text-4xl"></i></li>
                    <li><i className="fa-brands fa-css3-alt text-4xl"></i></li>
                    <li><i className="fa-brands fa-wordpress text-4xl"></i></li>
                    <li><i className="fa-brands fa-js text-4xl"></i></li>
                    <li><i className="fa-brands fa-git text-4xl"></i></li>
                    <li><i className="fa-brands fa-php text-4xl"></i></li>
                </ul>
            </div>
        </div>
    );
}

export default Work;