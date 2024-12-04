import PortfolioImage from "../src/assets/gray.jpg";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  const projects = [
    {
      name: "Music Album Mobile Application",
      imageUrl: "src/assets/my-rest.jpg",
      description:
        "Developed a mobile application for “ዕረፍተይ - My rest” at the artist's request. This project demonstrated my proficiency in mobile app development and audio integration using Flutter and the just_audio package.",
    },
    {
      name: "Podcast App",
      imageUrl: "src/assets/podcast.jpg",
      description:
        "Developed with Flutter for a seamless user experience, and powered by Node.js with Express.js and MongoDB on the backend, this app enables users to effortlessly upload and listen to podcasts.",
    },
    {
      name: "Expense Tracker",
      imageUrl: "src/assets/gray.jpg",
      description:
        "Built an expense tracker web app using the MERN stack (MongoDB,Express.js, React, Node.js) for Timeless Technologies Plc. This application allows the company to efficiently manage their finances by tracking expense",
    },
  ];

  return (
    <>
      <main className="bg-gray-800 text-white font-Poppins">
        <div className="h-dvh max-w-7xl mx-auto p-5">
          <header className="h-[10vh]">
            <div className="w-full rounded-xl flex flex-row justify-between h-full items-center">
              <h1 className="text-3xl font-bold ">MHailay,</h1>
              <div className="flex flex-row gap-5">
                <a href="#projects">
                  <p className="text-xl font-semibold">Projects</p>
                </a>
                <a href="#contact">
                  <p className="text-xl font-semibold">Contact Me</p>
                </a>
              </div>
            </div>
          </header>
          <motion.div
            className="h-[90vh] grid md:grid-cols-5 md:grid-rows-2 gap-3"
            initial={{ scale: 0.1 }}
            animate={{
              scale: 0.5,
            }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="rounded-xl w-full md:col-span-2 flex flex-col justify-end items-end shadow-lg shadow-gray-400 p-4 overflow-auto">
              <h1 className="text-4xl font-bold ">Mulugeta Hailay</h1>
              <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-center">
                Software Engineer
              </h1>
            </div>
            <div className="col-span-1 w-full rounded-xl md:rounded-xl md:row-span-2 md:col-span-3 md:flex md:justify-center md:items-center md:p-5">
              <img
                src={PortfolioImage}
                alt="Portfolio Image"
                className="rounded-xl"
              />
            </div>
            <div className="rounded-xl w-full md:col-span-2 flex flex-col justify-start items-start md:items-end p-4">
              <h1 className="text-2xl">Fresh IT graduate</h1>
              <h2 className="text-2xl">Eager to put my skills to work</h2>
            </div>
          </motion.div>
        </div>
        {/* Projects */}
        <motion.div
          className="bg-gray-800 max-w-7xl mx-auto flex flex-col gap-10 rounded-xl my-5"
          id="projects"
        >
          <div className="h-[10vh]">
            <div className="w-full rounded-xl flex flex-row justify-between h-full items-center">
              <h1 className="text-3xl font-bold ">PROJECTS</h1>
            </div>
          </div>
          {projects.map((project, i) =>
            i == 1 ? (
              <motion.div
                initial={{ scale: 0.7, x: 200 }}
                whileInView={{
                  scale: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    delay: 0.05 * i,
                    ease: "easeInOut",
                  },
                }}
                key={i}
                className="bg-gray-700 md:h-[90vh] grid md:grid-cols-5 md:grid-rows-2 rounded-xl gap-3"
              >
                <div className="rounded-xl col-span-2 flex flex-col justify-end items-end shadow-lg shadow-gray-400 p-4">
                  <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-start">
                    {project.name}
                  </h1>
                </div>
                <div className="rounded-xl row-span-2 col-span-3 flex justify-center items-center p-5">
                  <img
                    src={project.imageUrl}
                    alt="Portfolio Image"
                    className="rounded-xl shadow-xl shadow-gray-500 object-cover p-5"
                  />
                </div>
                <div className="rounded-xl col-span-2 flex flex-col justify-start items-end p-4">
                  <h2 className="text-2xl">{project.description}</h2>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.5, x: -200 }}
                whileInView={{
                  scale: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    delay: 0.05 * i,
                    ease: "easeInOut",
                  },
                }}
                key={i}
                className="bg-gray-700 md:h-[90vh] grid md:grid-cols-5 md:grid-rows-2 rounded-xl"
              >
                <div className="rounded-xl w-full md:row-span-2 md:col-span-3 flex justify-center items-center p-5">
                  <img
                    src={project.imageUrl}
                    alt="Portfolio Image"
                    className="rounded-xl shadow-xl shadow-gray-500 h-full w-full object-contain "
                  />
                </div>
                <div className="rounded-xl col-span-2 flex flex-col justify-end items-start shadow-lg shadow-gray-400 p-4">
                  <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-start">
                    {project.name}
                  </h1>
                </div>
                <div className="rounded-xl col-span-2 flex flex-col justify-start items-start p-4 overflow-auto">
                  <h2 className="text-2xl">{project.description}</h2>
                  {/* <div className="flex flex-row gap-5">
                    <FaReact size={40} className="bg-red" />
                    <FaNodeJs size={40} />
                  </div> */}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
        <motion.div className="w-full h-[20vh] bg-gray-700 rounded-xl flex flex-col gap-1 justify-center items-center p-5">
          <div className="flex flex-row gap-5 justify-center items-center ">
            <a href="https://github.com/Mulu-13">
              <FaGithub size={60} />
            </a>
            <a href="https://t.me/mullu_h">
              <FaTelegram size={60} />
            </a>
            <a href="https://www.linkedin.com/in/mulugeta-hailay-117839339">
              <FaLinkedin size={60} />
            </a>
            <a href="https://wa.me/251902538827">
              <FaWhatsapp size={60} />
            </a>
          </div>
          <div id="contact">
            <p className="text-xl font-semibold">
              Copyright &#169; 2024 Mulugeta Hailay
            </p>
          </div>
          <div></div>
        </motion.div>
      </main>
    </>
  );
};

export default App;
