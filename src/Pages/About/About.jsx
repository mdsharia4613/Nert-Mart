import Section1 from "./AboutComponents/Section1";
import Section2 from "./AboutComponents/Section2";
import Section3 from "./AboutComponents/Section3";
import Section4 from "./AboutComponents/Section4";
import Section5 from "./AboutComponents/Section5";


const About = () => {
    return (
       <>
            <div className="container mx-auto px-10">
                <Section1></Section1>
                <Section2></Section2>
                <Section3></Section3>
                <Section4></Section4>
                <Section5></Section5>
            </div>
       </>
    );
};

export default About;
