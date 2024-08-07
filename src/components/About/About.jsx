import React from 'react';
import "./About.css";

function About (props) {

    return (
        <div className='about-section'>
        <center>
        <h3 id="rank-title">{props.text}</h3>
        <h1 className='hello'>Hello from Soham!</h1>
           <p className='about'>
           "I am an aspiring front-end developer, for creating intuitive, dynamic and responsive web interfaces.<br></br>
            I am versed in modern frameworks such as React.js, Tailwind CSS and Bootstrap. I enjoy the challenge of optimizing <br></br>
            user experiences and am constantly exploring new tools and techniques to enhance my skills.<br></br>
            When I started exploring various sites on the internet, I was amazed how the look and feel of the sites was so artistically defined,<br></br>
            and its 'reactivity' and programming intrigued me. I am enthusiastic about learning from experience devs, collaborating on exciting<br></br>
            collaborating on exciting projects, and contributing to innovative web solutions. As I continue to grow in this field, I am eager to <br></br>
            to embrace new challenges. <br></br>
            Thankyou for taking the time to learn a bit aboout me. I look forward to connecting and exploring opportunities to create amazing web experiences together."
            </p>
        </center>
        </div>
    )
}

export default About;