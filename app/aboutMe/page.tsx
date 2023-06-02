import Image from "next/image";
import splashInk from "../../public/images/ink-splash.jpg";
import FewWords from "@/components/pageAboutMe/FewWords";
import Hobbies from "@/components/pageAboutMe/hobbies/Hobbies";
import Personality from "@/components/pageAboutMe/Personality";
import SoftSkills from "@/components/pageAboutMe/SoftSkills";
import BackgroundLayout from "@/components/BackgroundLayout";

const page = () => {
    return (
        <>
            <main className="about-me">
                <BackgroundLayout>
                    <Image
                        height={2700}
                        width={2700}
                        alt="Splash of ink"
                        src={splashInk}
                    />
                </BackgroundLayout>
                <h1>About me</h1>
                <section className="about-me__first-section">
                    <SoftSkills />
                    <FewWords />
                </section>
                <section className="about-me__second-section">
                    <Hobbies />
                    <Personality />
                </section>
            </main>
        </>
    );
};

export default page;
