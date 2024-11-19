import PortfolioImage from "../src/assets/gray.jpg";
// import Podcast from "../src/assets/podcast.jpg";

const App = () => {
  const projects = [
    {
      name: "Interest-Based Video Chat App",
      imageUrl: "../src/assets/gray.jpg", // Replace with an actual image URL
      description:
        "Developed using ReactJS, Firebase and ZegoCloud. It facilitates random video chats with users who share specified interests. The app uses matching algorithm to connect users based on their selected interests, ensuring more relevant and engaging  conversations.",
    },
    {
      name: "Podcast App",
      imageUrl: "../src/assets/gray.jpg",
      description:
        "Developed with Flutter for a seamless user experience, and powered by Node.js with Express.js and MongoDB on the backend, this app enables users to effortlessly upload and listen to podcasts.",
    },
    {
      name: "Expense Tracker",
      imageUrl: "../src/assets/gray.jpg",
      description:
        "Built an expense tracker web app using the MERN stack (MongoDB,Express.js, React, Node.js) for Timeless Technologies Plc. This application allows the company to efficiently manage their finances by tracking expense",
    },
  ];
  return (
    <main className="bg-gray-700 text-white font-Poppins">
      <section className="h-dvh max-w-7xl mx-auto">
        <header className="h-[10vh]">
          <div className="w-full rounded-xl flex flex-row justify-between h-full items-center">
            <h1 className="text-3xl font-bold ">LOGO</h1>
            <div className="flex flex-row gap-5">
              <a href="#projects">
                <p className="text-xl font-semibold">Projects</p>
              </a>
              <p className="text-xl font-semibold">Contact Me</p>
              <p className="text-xl font-semibold">Something</p>
            </div>
          </div>
        </header>
        <div className="h-[90vh] grid grid-cols-5 grid-rows-2">
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
        </div>
      </section>
      <section className="bg-gray-700 h-dvh max-w-7xl mx-auto" id="projects">
        <section className="h-[10vh]">
          <div className="w-full rounded-xl flex flex-row justify-between h-full items-center">
            <h1 className="text-3xl font-bold ">PROJECTS</h1>
          </div>
        </section>
        {/* <div className="h-[90vh] grid grid-cols-5 grid-rows-2">
          <div className="rounded-xl row-span-2 col-span-3 flex justify-center items-center p-5">
            <img
              src={PortfolioImage}
              alt="Portfolio Image"
              className="rounded-xl"
            />
          </div>
          <div className="bg-gray-700 rounded-xl col-span-2 flex flex-col justify-end items-start shadow-lg shadow-gray-400 p-4">
            <h1 className="text-3xl font-semibold text-gray-200 flex justify-center items-start">
              Interest Based Video Chat App
            </h1>
          </div>
          <div className="rounded-xl col-span-2 flex flex-col justify-start items-end p-4">
            <h2 className="text-2xl">
              Developed using ReactJS, Firebase and ZegoCloud. It facilitates
              random video chats with users who share specified interests. The
              app uses matching algorithm to connect users based on their
              selected interests, ensuring more relevant and engaging
              conversations.
            </h2>
          </div>
        </div> */}
        {projects.map((project, index) => (
          <div key={index} className="h-[90vh] grid grid-cols-5 grid-rows-2">
            <div className="rounded-xl row-span-2 col-span-3 flex justify-center items-center p-5">
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
            <div className="rounded-xl col-span-2 flex flex-col justify-start items-end p-4">
              <h2 className="text-2xl">{project.description}</h2>
            </div>
          </div>
        ))}
        {/* <div className="h-40 w-40 shadow-3xl"></div>
        <div className="h-dvh w-full"></div> */}
      </section>
    </main>
  );
};

export default App;
