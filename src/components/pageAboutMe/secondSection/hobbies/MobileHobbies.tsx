import { mobileHobbies } from "@/data/hobbiesData";
import MobileHobby from "./MobileHobby";

const MobileHobbies = () => {
    return (
        <div className="mobile-hobbies-container">
            {mobileHobbies.map((hobby, i) => (
                <MobileHobby key={`mobile-hobby-${i}`} hobby={hobby} />
            ))}
        </div>
    );
};

export default MobileHobbies;
