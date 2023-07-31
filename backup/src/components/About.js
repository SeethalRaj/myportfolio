import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Seethal.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          An enthusiastic and creative .NET developer with a passion for crafting exceptional software solutions. With more than 7 years of experience in the field, I have honed my skills in building robust and scalable applications that meet the unique needs of businesses.
          <br/>
          <br/>
          My expertise lies in leveraging the power of the .NET framework to develop cutting-edge solutions that drive efficiency and enhance user experiences. From designing elegant user interfaces to implementing complex backend logic, I thrive on the challenges that come with each project.
          <br/>
          <br/>
          I am well-versed in C#, ASP.NET, and MVC frameworks, and I stay up-to-date with the latest industry trends and best practices. My ability to understand business requirements and translate them into functional code allows me to deliver tailored solutions that exceed expectations.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#experience"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}