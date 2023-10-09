import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Project = ({ image, description, name, source_code_link, page_link }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const openGithub = () => {
    window.open(source_code_link, '_blank')
  };

  return ( 
    <div className="relative hover:scale-105 hover:shadow-lg transition duration-300">
      <img
        className="rounded-lg object-cover cursor-pointer"
        width="100%"
        height="100%"
        layout="responsive"
        src={image}
        alt="Project"
        onClick={toggleDescription}
      />
      {showDescription && (
        <div onClick={toggleDescription}  className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 text-white p-4 rounded-lg transition-opacity duration-300">
          <p className="text-xl cursor-pointer">{description}</p>
        </div>
      )}
      {
        !showDescription &&(<div className="absolute flex items-center justify-center bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
        <h3 className="text-xl ">{name}</h3>
        <AiFillGithub className="ml-2 text-xl cursor-pointer" onClick={openGithub}/>
        {page_link && (
              <a href={page_link} target="_blank" rel="noopener noreferrer">
                <button className="text-xl cursor-pointer ml-2 text-blue-500">Visit Page</button>
              </a>
            )}
        </div>)
      }
      
        
    </div>
  );
};

export default Project;
