import PortfolioImage from "../src/assets/gray.jpg";
// import Podcast from "../src/assets/podcast.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { animate, motion } from "framer-motion";

const App = () => {
  const projects = [
    {
      name: "Interest-Based Video Chat App",
      imageUrl: "src/assets/video-chat/1.png",
      description:
        "Developed using ReactJS, Firebase and ZegoCloud. It facilitates random video chats with users who share specified interests. The app uses matching algorithm to connect users based on their selected interests, ensuring more relevant and engaging  conversations.",
    },
    {
      name: "Podcast App",
      imageUrl: "src/assets/gray.jpg",
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

  // const fadeInAnimationVariants = {
  //   initial: {
  //     y: 200,
  //     opacity: 0,
  //   },
  //   animate: (delay) => ({
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       delay,
  //       type: "spring",
  //       damping: 8,
  //       stiffness: 100,
  //       duration: 0.75,
  //       ease: "easeInOut",
  //     },
  //   }),
  // };
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
                <p className="text-xl font-semibold">Contact Me</p>
                <p className="text-xl font-semibold">Something</p>
              </div>
            </div>
          </header>
          <motion.div
            className="h-[90vh] grid grid-cols-5 grid-rows-2 gap-3"
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
            <div className="rounded-xl col-span-2 flex flex-col justify-end items-end shadow-lg shadow-gray-400 p-4">
              <h1 className="text-4xl font-bold ">Mulugeta Hailay</h1>
              <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-center">
                Software Engineer
              </h1>
            </div>
            <div className="rounded-xl row-span-2 col-span-3 flex justify-center items-center p-5">
              <img
                src={PortfolioImage}
                alt="Portfolio Image"
                className="rounded-xl"
              />
            </div>
            <div className="rounded-xl col-span-2 flex flex-col justify-start items-end p-4">
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
                className="bg-gray-700 h-[90vh] grid grid-cols-5 grid-rows-2 rounded-xl gap-3"
              >
                <div className="rounded-xl col-span-2 flex flex-col justify-end items-end shadow-lg shadow-gray-400 p-4">
                  <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-start">
                    {project.name}
                  </h1>
                </div>
                <div className="rounded-xl row-span-2 col-span-3 flex justify-center items-center p-5">
                  <img
                    src="src/assets/gray.jpg"
                    alt="Portfolio Image"
                    className="rounded-xl shadow-xl shadow-gray-500 object-cover"
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
                className="bg-gray-700 h-[90vh] grid md:grid-cols-5 md:grid-rows-2 rounded-xl"
              >
                <div className="rounded-xl w-full md:row-span-2 md:col-span-3 flex justify-center items-center p-5">
                  <img
                    src={project.imageUrl}
                    alt="Portfolio Image"
                    className="rounded-xl shadow-xl shadow-gray-500 object-cover"
                  />
                </div>
                <div className="rounded-xl col-span-2 flex flex-col justify-end items-start shadow-lg shadow-gray-400 p-4">
                  <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-start">
                    {project.name}
                  </h1>
                </div>
                <div className="rounded-xl col-span-2 flex flex-col justify-start items-start p-4 overflow-auto">
                  <h2 className="text-2xl">{project.description}</h2>
                  <div className="flex flex-row gap-5">
                    <FaReact size={40} className="bg-red" />
                    <FaNodeJs size={40} />
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
        {/* Vision */}
        {/* <motion.div initial="initial" whileInView={animate}>
          <div className="h-dvh"></div>
        </motion.div> */}
        {/* contact me */}
        <motion.div className="w-full h-[20vh] bg-gray-700 rounded-xl flex flex-col gap-1 justify-center items-center p-5">
          <div className="flex flex-row gap-5 justify-center items-center ">
            <FaGithub size={60} />
            <FaLinkedin size={60} />
            <FaTelegram size={60} />
            <FaWhatsapp size={60} />
          </div>
          <div>
            <p className="text-xl font-semibold">
              Copyright &#169; 2024 Mulugeta Hailay
            </p>
          </div>
          {/* <div className="h-80 max-w-7xl mx-auto bg-green-500 from-gray-800 to-gray-200">
            <div className="text-3xl font-bold">Find out about Me</div>
            <div className="flex  flex-col gap-5">
              <a href="https://github.com/Mulu-13">
                <FaGithub size={40} />
              </a>
              <div className="flex flex-row gap-2">
                <p className="text-3xl font-semibold">GitHub</p>
                <FaGithub size={40} />
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-3xl font-semibold">Linkedin</p>
                <FaLinkedin size={50} />
              </div>
              <a href="https://t.me/mullu_h">
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl font-semibold">Telegram</p>
                  <FaTelegram size={50} />
                </div>
              </a>

              <div></div>
            </div>
          </div> */}
          <div></div>
        </motion.div>
      </main>
    </>
  );
};

export default App;
