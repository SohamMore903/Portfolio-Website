import React from "react";
import Heading from "../Shared/Heading.jsx";
import SkillCard from "./SkillCard.jsx";
import "./Skills.css";

// images import
import Img1 from "../../assets/product/html.png";
import Img2 from "../../assets/product/css.png";
import Img3 from "../../assets/product/js.png";
import Img4 from "../../assets/product/node.png";
import Img5 from "../../assets/product/express.png";
import Img6 from "../../assets/product/git.png";
import Img7 from "../../assets/product/react.png";
import Img8 from "../../assets/product/tailwind.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "HTML5",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "CSS",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "JavaScript",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Node.js",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Express.js",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Git & GitHub",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "React.js",
    aosDelay: "400",
  },
];
const Skills = (props) => {
  return (
    <div>
      <div className="container marginer">
        {/* Header section */}
        <Heading title={props.text} subtitle={""} />
        {/* Body section */}
        <SkillCard data={ProductsData} />
        <SkillCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Skills;
