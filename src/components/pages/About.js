import React from "react";

// import InfoCard from "./InfoCard";

import "../../assets/styles/dist/css/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__dev">
        <div className="about__dev-card">
          <div className="card-head">Frontend Web Development</div>
          <div className="card-body">
            <p>
              Hi, I am <strong>Piyush Kaushik</strong>, a self taught{" "}
              <strong>frontend web developer</strong>. My developer alias is{" "}
              <strong>kaushikDev</strong>. I have been learning web development
              and writing code for the last <strong>One and a half</strong>{" "}
              years.
            </p>
            <p>
              I use <strong>Adobe Xd</strong> to design my web apps and use{" "}
              <strong>JavaScript/React</strong> to bring them to life. I then
              use <strong>SASS/CSS</strong> to make them beautiful. For writing
              code I prefer <strong>VS Code</strong> and for maintaining the
              code I use <strong>Github</strong>.
            </p>
            <p>
              Writing clean yet efficient and simple to understand code, is
              always my first priority. I also run a{" "}
              <a
                href="https://www.youtube.com/channel/UC3uwdZ9kqFhz5CrDyGNsOZQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> youtube channel </strong>
              </a>
              where I make videos mostly on javascript. Because I firmly believe
              that free education is the greatest form of service and a great
              way of giving back to the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
