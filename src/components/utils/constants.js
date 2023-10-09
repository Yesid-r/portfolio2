import html from "../../assets/img/tech/html.png"
import css from "../../assets/img/tech/css.png"
import javascript from "../../assets/img/tech/javascript.png"
import reactjs from "../../assets/img/tech/reactjs.png"
import nodejs from "../../assets/img/tech/nodejs.png"
import mongodb from "../../assets/img/tech/mongodb.png"
import git from "../../assets/img/tech/git.png"
import figma from "../../assets/img/tech/figma.png"
import java from "../../assets/img/tech/java.png"
import mysql from "../../assets/img/tech/mysql.png"
import linux from "../../assets/img/tech/linux.png"
import springboot from "../../assets/img/tech/springboot.png"
import tailwind from "../../assets/img/tech/tailwind.png"
import azure from "../../assets/img/tech/azure.png"

import edunet from "../../assets/img/edunet.png"
import university from "../../assets/img/university.png"
import Swing from "../../assets/img/Swing.png"
import aspropabelen from "../../assets/img/projects/aspropabelen.png"
import task from "../../assets/img/projects/task.png"
import gdpaz from "../../assets/img/projects/gdpaz.png"
import springboot2 from "../../assets/img/projects/springboot.png"
import uptcstore from "../../assets/img/projects/uptcstore.jpeg"


export const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },


    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "java",
        icon: java,
    },
    {
        name: "mysql",
        icon: mysql,
    },
    {
        name: "linux",
        icon: linux,
    },
    {
        name: "springboot",
        icon: springboot,
    },
    {
        name: "tailwind",
        icon: tailwind,
    },
    {
        name: "Azure",
        icon: azure
    }
];
export  const projects = [
    {
        name: "Aspropabelen",
        description: "Aspropabelen is a website created for an association of farmers, where they can showcase their products, and clients can view them.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            }
        ],
        image: aspropabelen,
        source_code_link: "",
        page_link: "https://www.aspropabelen.com/",

    },
    {
        name:'task-project',
        description:'This is a task project created with React JS, express, Mongodb and jwt.',
        tags:[
            {
                name:'react',
                color:'blue-text-gradient'
            },
            {
                name:'express',
                color:'pink-text-gradient'
            },
            {
                name:'mongodb',
                color:'green-text-gradient'
            },
            {
                name:'jwt',
                color:'orange-text-gradient'
            }
        ],
        image:task,
        source_code_link:'https://github.com/Yesid-r/TaskProject',
        page_link:'https://task-project-zma5-git-deploy-yesid-r.vercel.app/'

    },
    {
        name:'Generaciones de Paz',
        description:'This webpage have two types of users: teachers and administrators. Teachers can access educational games for classroom use, as well as the blog and gallery. Administrators manage courses, teachers, and content on the platform. Access to the games requires a login for security and control',
        tags:[
            {
                name:'react',
                color:'blue-text-gradient'
            },
            {
                name:'tailwind',
                color:'pink-text-gradient'
            },
            {
                name:'firebase',
                color:'orange-text-gradient'
            }
        ],
        image:gdpaz,
        source_code_link:'https://github.com/Julieth-Plazas/ProyectoTrabajoCampo',
        page_link:''

    },{
        name:'Spring Boot',
        description:'This is a project created with Spring Boot, this project is a web service for store game with two serves in azure, each one with a different database.',
        tags:[
            {
                name:'java',
                color:'green-text-gradient'
            },
            {
                name:'springboot',
                color:'pink-text-gradient'
            },
            {
                name:'azure',
                color:'orange-text-gradient'
            }
        ],
        image:springboot2,
        source_code_link:'https://github.com/Yesid-r/adminTiendaGames.git',
        page_link:''


    },
    {
        name:"Uptc store",
        description:"This is a sotre created with React JS, express, Mongodb and jwt. and implement mercadopago",
        tags:[
            {
                name:'react',
                color:'blue-text-gradient'
            },
            {
                name:'express',
                color:'pink-text-gradient'
            },
            {
                name:'mongodb',
                color:'green-text-gradient'
            },
            {
                name:'jwt',
                color:'orange-text-gradient'
            }
        ],
        image:uptcstore,
        source_code_link:'https://github.com/Yesid-r/UptcStore',
        page_link:''

    },
    {
        name: "Edunet",
        description:
            "Edunet is a web page created for students to upload files, such as their university works.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            }
        ],
        image: edunet,
        source_code_link: "https://github.com/Yesid-r/project-edunet-final",
        video_link: "https://youtu.be/0lZghqMd6hk",
    },
    {
        name: "University",
        description:
            "University is a web service specifically designed for reviewing concepts related to Spring Boot. This service is a part of a Spring Boot course available on Udemy, taught by Matias Macrino.",
        tags: [
            {
                name: "java",
                color: "green-text-gradient",
            },
            {
                name: "loombook",
                color: "pink-text-gradient",
            },
            {
                name: "MapStruct",
                color: "green-text-gradient",
            },
            {
                name: "Postman",
                color: "orange-text-gradient",
            },
        ],
        image: university,
        source_code_link: "https://github.com/Yesid-r/universidad-backend",
    },
    {
        name: "Swing",
        description:
            "Here's an example of a Java Swing application designed for managing clients. also use persistence with Json. and create tests with JUnit.",
        tags: [
            {
                name: "java",
                color: "green-text-gradient",
            },
            {
                name: "swing",
                color: "green-text-gradient",
            },
            {
                name: "awt",
                color: "blue-text-gradient",
            },
            {
                name: "JUnit",
                color: "green-text-gradient",
            },
        ],
        image: Swing,
        source_code_link: "https://github.com/Yesid-r/Taller-GUI-Persistencia",

    },
];

