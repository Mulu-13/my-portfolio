import { FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Interest-Based Video Chat App",
      imageUrl: "src/assets/gray.jpg",
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
  return (
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
            initial={{ scale: 0.5, x: i % 2 ? 500 : -500 }}
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
            <div className="rounded-xl col-span-2 flex flex-col justify-end items-start shadow-lg shadow-gray-400 p-4">
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
            initial={{ scale: 0.5, x: i % 2 ? 500 : -500 }}
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
            className="bg-gray-700 h-[90vh] grid grid-cols-5 grid-rows-2 rounded-xl"
          >
            <div className="rounded-xl row-span-2 col-span-3 flex justify-center items-center p-5">
              <img
                src={project.imageUrl}
                alt="Portfolio Image"
                className="rounded-xl shadow-xl shadow-gray-500 object-cover"
              />
            </div>
            <div className="rounded-xl col-span-2 flex flex-col justify-end items-start shadow-lg shadow-gray-400 p-4">
              <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-start">
                {i}
                {project.name}
              </h1>
            </div>
            <div className="rounded-xl col-span-2 flex flex-col justify-start items-start p-4">
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
  );
};

export default Projects;
