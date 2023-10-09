import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
} from "react-icons/ai";
import deved from '../assets/img/dev-ed-wave.png';
const About = () => {
    return (
        <div id='about' className="text-center p-10 py-20">
            <h2 className="text-5xl py-2 text-stone-800 font-medium  md:text-6xl">
                Yesid Rincon
            </h2>
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl">
                Fullstack developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800  max-w-xl mx-auto md:text-xl">
                As an experienced freelance fullstack developer, I'm here to showcase my skills and share my work. Feel free to connect with me through my social media profiles to stay updated on my latest projects and accomplishments.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-teal-600 ">
                <a href='/'>
                <AiFillTwitterCircle />
                </a>
                <a href='https://co.linkedin.com/in/dairo-yesid-rincon-carre%C3%B1o-9920aa154?trk=people_directory' target='_blank'>
                <AiFillLinkedin />
                </a>
                <a href='https://github.com/Yesid-r' target='_blank'>
                <AiFillGithub />
                </a>
                
                
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <img src={deved} layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default About