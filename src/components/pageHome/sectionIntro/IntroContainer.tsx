import Image from "next/image";
import splashInk from "../../../../public/images/7468.jpg";

const IntroContainer = () => {
    return (
        <div className="intro-container">
            <Image
                height={2700}
                width={2700}
                alt="Splash of ink"
                src={splashInk}
            />
            <h1 className="intro-title">
                <span className="hadrien-smet">Hadrien Smet</span>
                <span className="web-developer">Web developer</span>
            </h1>
        </div>
    );
};

export default IntroContainer;
