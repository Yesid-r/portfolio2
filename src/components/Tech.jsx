import React from 'react'
import { technologies } from './utils/constants'

const Tech = () => {
  return (
    <section id='tech' className="bg-gray-100 py-20">
        <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center">Technologies</h2>
            <div className="flex justify-center flex-wrap gap-10 py-10">
            {technologies.map((tech) => {
                const {  name, icon } = tech
                return (
                <article key={name} className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition duration-300  hover:scale-110 ">
                    <img src={icon} alt={name} className="w-12 h-12 mx-auto" />
                    
                </article>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default Tech