// import { useState } from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// const Contact = () => {
//   const socialLinks = [
//     {
//       icon: <FaLinkedin />,
//       paths: "linkedin",
//       alt: "linkedin",
//     },
//     {
//       icon: <FaTelegram />,
//       paths: "https://t.me/anonimka_o",
//       alt: "Telegram address",
//     },
//     {
//       icon: <FaGithub />,
//       paths: "linkedin",
//       alt: "Github link",
//     },
//     {
//       icon: <MdEmail />,
//       paths: "linkedin",
//       alt: "Email address",
//     },
//   ];

//   const contact_info = [
//     { logo: "mail", text: "karimovmoff@gmail.com" },
//     { logo: "logo-whatsapp", text: "123 456 780" },
//     {
//       logo: "location",
//       text: "demo location",
//     },
//   ];
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const SERVICE_ID = "service_xkrvao6";
//     const TEMPLATE_ID = "template_yua5v7n";
//     const PUBLIC_KEY = "QZbyfjrn-v0bsEJdJ";

//     emailjs
//       .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
//       .then((response) => {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         setStatus("Failed to send the message. Please try again.");
//         console.error("Error sending email:", error);
//       });
//   };
//   return (
//     <section id="contact" className="py-10 px-3 text-white">
//       <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
//         <div>
//           <h3 className="text-4xl font-semibold text-center">
//             <span className="text-[#ff00d0]">Contact</span>
//           </h3>
//           <div className="text-4xl flex items-center mb-12 lg:mb-0 lg:flex lg:flex-col">
//             {socialLinks.map(({ href, icon }, key) => {
//               <a href={href} key={key} target="_blank" className="href">
//                 {icon}
//               </a>;
//             })}
//           </div>
//         </div>
//         <div className="text-white  flex justify-end -right-[100px]">
//           <form
//             className="flex text-black flex-col flex-1 gap-5"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="bg-gray-900 outline-none rounded-lg py-1 px-2 text-white "
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="bg-gray-900 outline-none rounded-lg py-1 px-2 text-white "
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={10}
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="bg-gray-900 outline-none rounded-lg py-1 px-2 text-white "
//             ></textarea>
//             <button className="btn-primary w-fit" type="submit">
//               Send Message
//             </button>
//             {status && <p className="text-[#ff00d0]">{status}</p>}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser"; // To'g'ri import qilish

const Contact = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com", alt: "LinkedIn" },
    { icon: <FaTelegram />, href: "https://t.me/anonimka_o", alt: "Telegram" },
    {
      icon: <FaGithub />,
      href: "https://github.com/anonimka05",
      alt: "GitHub",
    },
    {
      icon: <MdEmail />,
      href: "https://mailto:munisamusayevaa@gmail.com",
      alt: "Email",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_jbjcc8h";
    const TEMPLATE_ID = "template_4g1968f";
    const PUBLIC_KEY = "xz9Hem_n2nsOYsfyK";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send the message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-10 px-3  text-white ">
      <h3 className="text-4xl font-semibold text-center text-[#ff00d0]">
        <span>Contact</span>
      </h3>
      <br />
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch ">
        <div className="border rounded-2xl w-[400px] relative flex justify-center  items-center left-[200px]">
          <div>
            <h2 className="text-3xl font-semibold text-center">
              Contact <span className="text-[#ff00d0]"> me</span> for <br />{" "}
              collabration
            </h2>
            <div className="text-4xl flex justify-center space-x-4 mt-4">
              {socialLinks.map(({ href, icon, alt }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="text-white text-4xl hover:text-[#ff00d0] transition duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <br />
        </div>
        <div className="">
          <form
            className=" flex flex-col flex-1 gap-5 w-[500px]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-900 outline-none rounded-lg py-2 px-3 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-900 outline-none rounded-lg py-2 px-3 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-900 outline-none rounded-lg py-3 px-3 text-white"
            ></textarea>
            <button
              className="bg-[#ff00d0] text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
            {status && <p className="text-[#ff00d0]">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
