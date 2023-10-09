import React, { useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mensaje: "",
    });
    const [isLoading , setIsLoading] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true)
        console.log(formData);

        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.mensaje === ""
        ) {
            alert("Todos los campos son obligatorios");
            setIsLoading(false)
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("El correo no es válido");
            setIsLoading(false)
            return;
        }

        emailjs.init("qXas-E1xmQ8FtAURA");

        const templateParams = {
            to_email: 'dairo3rincon@gmail.com',
            message: formData.mensaje,
            from_name: formData.name,
            from_email: formData.email,
        };

        emailjs
            .send("service_gzmmipl", "template_veabqxn", templateParams)
            .then((response) => {
                console.log("Correo enviado:", response);
                
                alert("Correo enviado");
                setIsLoading(false)
                setFormData({name: "", email: "", mensaje: ""})
                console.log(`formData`)
                console.log(formData)
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                alert("Error al enviar el correo");
                setIsLoading(false)
            });
    };

    return (
        <div id="contact" className="container mx-auto max-w-screen-sm py-8">
            <div className="rounded-lg shadow-lg  p-6 bg-white ">
                <h2 className="mb-12 text-3xl font-bold">Get in touch</h2>
                <form className="p-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="hidden">
                            name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                            }}
                            required
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                            }}
                            required
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="mensaje" className="hidden">
                            Message
                        </label>
                        <textarea
                            name="mensaje"
                            id="mensaje"
                            placeholder="message"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            onChange={(e) => {
                                setFormData({ ...formData, mensaje: e.target.value });
                            }}
                            required
                        ></textarea>
                    </div>
                    <button
                        className="md:w-32 mx-auto bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:shadow-lg transition duration-300"
                        onClick={handleClick}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>



        </div>

    );
};

export default Contact;
