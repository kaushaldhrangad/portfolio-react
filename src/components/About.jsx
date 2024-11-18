import Border from "./Border";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div>
        <h1 className="title flex font-['Libre_Franklin'] justify-center pt-8 text-3xl font-bold text-white uppercase underline">
          About Me
        </h1>
        <div className="font-['Chivo'] text-justify justify-center mt-7 w-[60%] m-auto text-[1.07rem] text-gray-300 max-sm:w-[73%]" data-aos="fade-up"  >
          <p>
            👋 Hey there! I'm Kaushal, a passionate frontend developer with a
            background in Computer Engineering from LDRP Institute of Technology and Research.
          </p>
          <br />

          <p>
            I am proficient in HTML, CSS, and JavaScript. My specialty lies in
            creating captivating user experiences by translating design concepts
            into polished, responsive interfaces. I excel in collaborative
            environments and leverage my communication skills to collaborate
            effectively. I am dedicated to staying updated with emerging trends
            and am eager to expand my skill set to elevate my craft.
          </p>
          <br />
          <p>
            I believe my dedication to staying up-to-date with the latest trends
            and best practices in front-end development sets me apart. Whether
            it is mastering the newest CSS frameworks like SASS and Tailwind CSS
            or experimenting with cutting-edge JavaScript libraries such as
            React JS, I am always eager to expand my skill set and improve my
            work.
          </p>
          <br />

          <p>
            While a fresher, I bring a positive attitude, a strong work ethic,
            and a passion for learning.
          </p>
          <br />
        </div>
      </div>
      <Border />
    </div>
  );
};

export default About;
