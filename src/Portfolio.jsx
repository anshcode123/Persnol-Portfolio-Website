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
      desc: "An Ai-powered Assistant who can speak and understand.",
      details:
        "The Jarvis project is an AI-powered chat assistant designed to interact with users through natural language. It can perform tasks like answering queries, managing data, and automating simple processes using voice or text commands. The project focuses on backend logic, integrating APIs and databases to provide real-time, intelligent responses.",
    },
    {
      title: "Chat Box",
      desc: "Chat Box is a real-time chat application built with NodeJs and ExpressJs.",
      details:
        "The chat box project is an interactive communication system that enables users to send and receive messages instantly. It includes backend functionalities for handling user authentication, storing chat history, and managing real-time message delivery using technologies like Node.js and WebSocket for smooth communication.",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-gray-950 z-50 gap-4 md:gap-0">
        <h1
          className="text-2xl font-bold text-purple-400 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          My Portfolio
        </h1>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("info")}>Info</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
        <a
          href="./Resumee.pdf"
          download="Anshul_Resume.pdf"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition text-sm md:text-base"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="p-6 sm:p-10 my-16 sm:my-20 flex flex-col md:flex-row items-center justify-center gap-10"
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
            className="w-56 sm:w-72 md:w-96 rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Info Section */}
      <section
        id="info"
        className="p-6 sm:p-10 bg-gray-900 text-center my-16 sm:my-24 rounded-2xl shadow-lg mx-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-purple-400 font-semibold mb-5">
            Information
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Name: <span className="text-white">Anshul</span> <br />
            Age: <span className="text-white">18</span> <br />
            Location: <span className="text-white">New Delhi</span> <br />
            Profession:{" "}
            <span className="text-white">Full-Stack Developer</span> <br />
            Email:{" "}
            <span className="text-purple-400">
              anshulrohilla39@gmail.com
            </span>
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="p-6 sm:p-10 my-16 sm:my-24 text-center bg-gray-950 rounded-2xl"
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
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
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
              className="bg-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl shadow-md border border-gray-700 text-sm sm:text-base"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="p-6 sm:p-10 bg-gray-900 my-16 sm:my-24 rounded-2xl shadow-lg mx-4"
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
          className="grid sm:grid-cols-2 gap-6"
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
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {project.desc}
                </p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
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
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center px-4"
          >
            <div className="bg-gray-900 p-6 rounded-xl w-full sm:w-3/4 md:w-1/2 relative shadow-lg max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {selectedProject.details}
              </p>
            </div>
          </motion.div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 sm:p-10 text-center my-16 sm:my-20">
        <motion.h2
          className="text-3xl text-purple-400 font-semibold mb-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-6 text-sm sm:text-base"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Feel free to reach out to me for collaborations or opportunities.
        </motion.p>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
            e.target.reset();
          }}
          className="max-w-md mx-auto flex flex-col gap-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-transform hover:scale-105 text-sm sm:text-base"
          >
            Send Message
          </Button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-6 mt-8 text-xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="mailto:anshulrohilla39@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/anshcode123"
            target="_blank"
            className="hover:text-purple-400 transition-colors"
          >
            <Github />
          </a>
          <Code2 className="hover:text-purple-400 transition-colors" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-600 border-t border-gray-800 text-sm">
        © 2025 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
