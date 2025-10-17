import { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Code2, Github, Mail, Download } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import profileImg from "./assets/Photo.jpg";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Jarvis AI",
      desc: "An Ai-powered Asistant who can speak and understand.",
      details:
        "The Jarvis project is an AI-powered chat assistant designed to interact with users through natural language. It can perform tasks like answering queries, managing data, and automating simple processes using voice or text commands. The project focuses on backend logic, integrating APIs and databases to provide real-time, intelligent responses.",
    },
    {
      title: "Chat Box",
      desc: "Chat Box is a real-time chat application built with NodeJs and ExpressJs.",
      details:
        "he chat box project is an interactive communication system that enables users to send and receive messages instantly. It includes backend functionalities for handling user authentication, storing chat history, and managing real-time message delivery using technologies like Node.js and WebSocket for smooth communication.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-gray-950 z-50">
        <h1
          className="text-2xl font-bold text-purple-400 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          My Portfolio
        </h1>
        <nav className="flex gap-6 text-gray-300">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("info")}>Info</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
        <Button
          className="bg-purple-600 hover:bg-purple-700 flex gap-2"
          onClick={() => window.open("/Resumee.pdf")}
        >
          <Download className="w-4 h-4" /> Download Resume
        </Button>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="p-10 my-20 flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <motion.div
          className="md:w-1/2 text-left border-l-4 border-purple-600 pl-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-purple-400 mb-3">
            About Me
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed">
            I’m a passionate web developer focused on creating clean, modern,
            and user-friendly digital experiences.{" "}
            <ReactTyped
              strings={[
                "I love clean code.",
                "I love learning.",
                "I love building new things.",
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
              className="text-purple-400"
            />
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Info Section */}
      <section
        id="info"
        className="p-10 bg-gray-900 text-center my-24 rounded-2xl shadow-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-purple-400 font-semibold mb-5">
            Information
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Name: <span className="text-white">Anshul</span> <br />
            Age: <span className="text-white">18</span> <br />
            Location: <span className="text-white">New Delhi</span> <br />
            Profession:{" "}
            <span className="text-white">Full-Stack Developer</span> <br />
            Email:{" "}
            <span className="text-purple-400">anshulrohilla39@gmail.com</span>
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="p-10 my-24 text-center bg-gray-950 rounded-2xl"
      >
        <motion.h2
          className="text-3xl text-purple-400 font-semibold mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Python",
            "Java",
          ].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={skill}
              className="bg-gray-800 px-8 py-4 rounded-2xl shadow-md border border-gray-700"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section  */}
      <section
        id="projects"
        className="p-10 bg-gray-900 my-24 rounded-2xl shadow-lg"
      >
        <motion.h2
          className="text-3xl text-purple-400 font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          >
            <div className="bg-gray-900 p-6 rounded-xl w-11/12 md:w-1/2 relative shadow-lg">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300">{selectedProject.details}</p>
            </div>
          </motion.div>
        )}
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="p-10 text-center my-20"
      >
        {/* Title */}
        <motion.h2
          className="text-3xl text-purple-400 font-semibold mb-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Contact
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Feel free to reach out to me for collaborations or opportunities.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);

            const res = await fetch("https://formspree.io/f/your_form_id_here", {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            });

            if (res.ok) {
              alert("Message sent successfully!");
              form.reset();
            } else {
              alert("Something went wrong. Please try again.");
            }
          }}
          className="max-w-md mx-auto flex flex-col gap-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-transform hover:scale-105"
          >
            Send Message
          </Button>
        </motion.form>

        {/* Icons Section */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <a href="mailto:anshulrohilla39@gmail.com" className="hover:text-purple-400 transition-colors"><Mail /></a>
          <a href="https://github.com/anshcode123" target="_blank" className="hover:text-purple-400 transition-colors"><Github /></a>
          <Code2 className="hover:text-purple-400 transition-colors" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-600 border-t border-gray-800">
        © 2025 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}



// import { motion } from 'framer-motion';
// import { Button } from './components/ui/button';
// import { Card, CardContent } from './components/ui/card';
// import { useState } from 'react';
// import { Code2, Github, Mail, Download } from 'lucide-react';

// export default function Portfolio() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       title: 'Portfolio Website',
//       desc: 'A responsive portfolio site built with React and Tailwind.',
//       details: 'Used React.js, Tailwind CSS, and Framer Motion for animations. Focused on modern UI/UX design and mobile responsiveness.',
//     },
//     {
//       title: 'E-commerce App',
//       desc: 'A full-stack shopping app using MERN stack.',
//       details: 'Includes product management, cart functionality, and secure payment integration using Stripe API.',
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Message sent successfully!');
//   };

//   const scrollToSection = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white font-sans">
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-gray-950 z-50">
//         <h1 className="text-2xl font-bold text-purple-400 cursor-pointer" onClick={() => scrollToSection('about')}>My Portfolio</h1>
//         <nav className="flex gap-6 text-gray-300">
//           <button onClick={() => scrollToSection('about')}>About</button>
//           <button onClick={() => scrollToSection('info')}>Info</button>
//           <button onClick={() => scrollToSection('skills')}>Skills</button>
//           <button onClick={() => scrollToSection('projects')}>Projects</button>
//           <button onClick={() => scrollToSection('contact')}>Contact</button>
//         </nav>
//         <Button className="bg-purple-600 hover:bg-purple-700 flex gap-2" onClick={() => window.open('/resume.pdf')}>
//           <Download className="w-4 h-4" /> Download Resume
//         </Button>
//       </header>

//       {/* About Section */}
//       <section id="about" className="p-10 my-20 flex flex-col md:flex-row items-center justify-center gap-10">
//         <motion.div
//           className="md:w-1/2 text-left border-l-4 border-purple-600 pl-6"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-semibold text-purple-400 mb-3">About Me</h2>
//           <p className="text-gray-400 max-w-lg leading-relaxed">
//             I’m a passionate web developer focused on creating clean, modern, and user-friendly digital experiences.
//             I enjoy turning complex problems into simple, beautiful, and intuitive designs.
//           </p>
//         </motion.div>

//         <motion.div
//           className="md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <img src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png" alt="Coding Illustration" className="w-72 md:w-96 rounded-2xl shadow-lg" />
//         </motion.div>
//       </section>

//       {/* Info Section */}
//       <section id="info" className="p-10 bg-gray-900 text-center my-20 rounded-2xl">
//         <h2 className="text-3xl text-purple-400 font-semibold mb-5">Information</h2>
//         <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
//           Name: Anshul<br />
//           Age: 18<br />
//           Location: New Delhi<br />
//           Profession: Full-Stack Developer<br />
//           Email: anshulrohilla39@gmail.com
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="p-10 my-20">
//         <h2 className="text-3xl text-purple-400 font-semibold mb-5 text-center">Skills</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind'].map(skill => (
//             <motion.div whileHover={{ scale: 1.1 }} key={skill} className="bg-gray-800 px-6 py-3 rounded-2xl shadow-md">
//               {skill}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="p-10 bg-gray-900 my-20 rounded-2xl">
//         <h2 className="text-3xl text-purple-400 font-semibold mb-6 text-center">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <Card key={index} className="bg-gray-800 border-gray-700">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.desc}</p>
//                 <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setSelectedProject(project)}>
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {selectedProject && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
//             <div className="bg-gray-900 p-6 rounded-xl w-11/12 md:w-1/2 relative">
//               <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-3 text-gray-400 hover:text-white">✖</button>
//               <h3 className="text-2xl font-bold text-purple-400 mb-3">{selectedProject.title}</h3>
//               <p className="text-gray-300">{selectedProject.details}</p>
//             </div>
//           </motion.div>
//         )}
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="p-10 text-center my-20">
//         <h2 className="text-3xl text-purple-400 font-semibold mb-4">Contact</h2>
//         <p className="text-gray-400 mb-6">Feel free to reach out to me for collaborations or opportunities.</p>
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
//           <input type="text" placeholder="Your Name" required className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
//           <input type="email" placeholder="Your Email" required className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
//           <textarea placeholder="Your Message" rows="4" required className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
//           <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Send Message</Button>
//         </form>
//         <div className="flex justify-center gap-6 mt-8">
//           <a href="mailto:johndoe@email.com" className="hover:text-purple-400"><Mail /></a>
//           <a href="https://github.com" target="_blank" className="hover:text-purple-400"><Github /></a>
//           <Code2 className="hover:text-purple-400" />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="p-6 text-center text-gray-600 border-t border-gray-800">© 2025 My Portfolio. All rights reserved.</footer>
//     </div>
//   );
// }
