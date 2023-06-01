import FewWords from "@/components/pageAboutMe/FewWords";
import Hobbies from "@/components/pageAboutMe/hobbies/Hobbies";
import Personality from "@/components/pageAboutMe/Personality";
import SoftSkills from "@/components/pageAboutMe/SoftSkills";

const page = () => {
    return (
        <>
            <main className="about-me">
                <h1>About me</h1>
                <SoftSkills />
                <FewWords />
                <Hobbies />
                <Personality />
            </main>
        </>
    );
};

export default page;
