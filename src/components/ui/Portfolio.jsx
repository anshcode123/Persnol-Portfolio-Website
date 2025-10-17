// // import { Button } from './components/ui/button';
// // import { Card, CardContent } from './components/ui/card';
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
//           Name: John Doe<br />
//           Age: 25<br />
//           Location: New York, USA<br />
//           Profession: Full-Stack Developer<br />
//           Email: johndoe@email.com
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
// // import { useState } from 'react';
// // import { Code2, Github, Mail, Download } from 'lucide-react';
// // import { Button } from './components/ui/button';
// // import { Card, CardContent } from './components/ui/card';

// // export default function Portfolio() {
// //   const [selectedProject, setSelectedProject] = useState(null);

// //   const projects = [
// //     {
// //       title: 'Portfolio Website',
// //       desc: 'A responsive portfolio site built with React and Tailwind.',
// //       details: 'Used React.js, Tailwind CSS, and Framer Motion for animations. Focused on modern UI/UX design and mobile responsiveness.',
// //     },
// //     {
// //       title: 'E-commerce App',
// //       desc: 'A full-stack shopping app using MERN stack.',
// //       details: 'Includes product management, cart functionality, and secure payment integration using Stripe API.',
// //     },
// //   ];

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert('Message sent successfully!');
// //   };

// //   const scrollToSection = (id) => {
// //     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-950 text-white font-sans">
// //       {/* Header */}
// //       <header className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-gray-950 z-50">
// //         <h1 className="text-2xl font-bold text-purple-400 cursor-pointer" onClick={() => scrollToSection('about')}>My Portfolio</h1>
// //         <nav className="flex gap-6 text-gray-300">
// //           <button onClick={() => scrollToSection('about')}>About</button>
// //           <button onClick={() => scrollToSection('info')}>Info</button>
// //           <button onClick={() => scrollToSection('skills')}>Skills</button>
// //           <button onClick={() => scrollToSection('projects')}>Projects</button>
// //           <button onClick={() => scrollToSection('contact')}>Contact</button>
// //         </nav>
// //         <Button onClick={() => window.open('/resume.pdf')}> <Download className="w-4 h-4" /> Download Resume </Button>
// //       </header>

// //       {/* About Section */}
// //       <section id="about" className="p-10 my-20 flex flex-col md:flex-row items-center justify-center gap-10">
// //         <div className="md:w-1/2 text-left border-l-4 border-purple-600 pl-6">
// //           <h2 className="text-3xl font-semibold text-purple-400 mb-3">About Me</h2>
// //           <p className="text-gray-400 max-w-lg leading-relaxed">
// //             I’m a passionate web developer focused on creating clean, modern, and user-friendly digital experiences. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
// //           </p>
// //         </div>

// //         <div className="md:w-1/2 flex justify-center">
// //           <img src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png" alt="Coding Illustration" className="w-72 md:w-96 rounded-2xl shadow-lg" />
// //         </div>
// //       </section>

// //       {/* Info Section */}
// //       <section id="info" className="p-10 bg-gray-900 text-center my-20 rounded-2xl">
// //         <h2 className="text-3xl text-purple-400 font-semibold mb-5">Information</h2>
// //         <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
// //           Name: John Doe<br />
// //           Age: 25<br />
// //           Location: New York, USA<br />
// //           Profession: Full-Stack Developer<br />
// //           Email: johndoe@email.com
// //         </p>
// //       </section>

// //       {/* Skills Section */}
// //       <section id="skills" className="p-10 my-20">
// //         <h2 className="text-3xl text-purple-400 font-semibold mb-5 text-center">Skills</h2>
// //         <div className="flex flex-wrap justify-center gap-4">
// //           {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind'].map(skill => (
// //             <div key={skill} className="bg-gray-800 px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform">
// //               {skill}
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Projects Section */}
// //       <section id="projects" className="p-10 bg-gray-900 my-20 rounded-2xl">
// //         <h2 className="text-3xl text-purple-400 font-semibold mb-6 text-center">Projects</h2>
// //         <div className="grid md:grid-cols-2 gap-6">
// //           {projects.map((project, index) => (
// //             <Card key={index}>
// //               <CardContent>
// //                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
// //                 <p className="text-gray-400 mb-4">{project.desc}</p>
// //                 <Button onClick={() => setSelectedProject(project)}>View Details</Button>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>

// //         {selectedProject && (
// //           <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
// //             <div className="bg-gray-900 p-6 rounded-xl w-11/12 md:w-1/2 relative">
// //               <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-3 text-gray-400 hover:text-white">✖</button>
// //               <h3 className="text-2xl font-bold text-purple-400 mb-3">{selectedProject.title}</h3>
// //               <p className="text-gray-300">{selectedProject.details}</p>
// //             </div>
// //           </div>
// //         )}
// //       </section>

// //       {/* Contact Section */}
// //       <section id="contact" className="p-10 text-center my-20">
// //         <h2 className="text-3xl text-purple-400 font-semibold mb-4">Contact</h2>
// //         <p className="text-gray-400 mb-6">Feel free to reach out to me for collaborations or opportunities.</p>
// //         <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
// //           <input type="text" placeholder="Your Name" required className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
// //           <input type="email" placeholder="Your Email" required className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
// //           <textarea placeholder="Your Message" rows="4" required className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
// //           <Button type="submit">Send Message</Button>
// //         </form>
// //         <div className="flex justify-center gap-6 mt-8">
// //           <a href="mailto:johndoe@email.com" className="hover:text-purple-400"><Mail /></a>
// //           <a href="https://github.com" target="_blank" className="hover:text-purple-400"><Github /></a>
// //           <Code2 className="hover:text-purple-400" />
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="p-6 text-center text-gray-600 border-t border-gray-800">© 2025 My Portfolio. All rights reserved.</footer>
// //     </div>
// //   );
// // }
