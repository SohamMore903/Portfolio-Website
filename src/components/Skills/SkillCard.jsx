import React from "react";
import Button from "../Shared/Button";
import "./Skills.css";

const SkillCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
         <center> <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[225px] w-[225px] object-cover rounded-md logoc"
              />
              {/* hover button */}
              <div className="hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
            <br></br>
             <center><h2 className="font-semibold">{data.title}</h2></center>
            </div>
          </div></center>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
