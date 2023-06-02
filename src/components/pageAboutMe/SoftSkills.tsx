import { FaBook, FaMedapps, FaHandsHelping } from "react-icons/fa";

const SoftSkills = () => {
    return (
        <div className="about-me__soft-skills">
            <div className="progress" style={{ ["--i" as any]: 75 }}>
                <h3>
                    75<span>%</span>
                </h3>
                <FaBook />
                <h4>Learning</h4>
            </div>
            <div className="progress" style={{ ["--i" as any]: 72 }}>
                <h3>
                    72<span>%</span>
                </h3>
                <FaMedapps />
                <h4>Thinking</h4>
            </div>
            <div className="progress" style={{ ["--i" as any]: 62 }}>
                <h3>
                    62<span>%</span>
                </h3>
                <FaHandsHelping />
                <h4>Inclusive</h4>
            </div>
            <p>
                How?
                <br />
                Come see the results from my personality tests!
            </p>
        </div>
    );
};

export default SoftSkills;
