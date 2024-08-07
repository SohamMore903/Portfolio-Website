import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "About Me",
    link: "/#",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
];

const Contact = () => {
  return (
    <div className="dark:bg-gray-950 contact">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              Soham More
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              <b>Get in Touch with me!</b>
              <br></br>
              <br></br>
              Have a question, a project in mind, or just want to say hello? I'd love to hear from you! <br></br>

            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Where?
              </h1>
              <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Pune, Maharashtra, India</p>
                </div>  
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Number?
              </h1>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 7666168208</p>
                </div>

                {/* social links */}
                <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                Social Handles ...
              </h1>
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
