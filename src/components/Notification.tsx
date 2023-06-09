import { MutableRefObject } from "react";
import ReactDOM from "react-dom";
import { FaCheck, FaTimes } from "react-icons/fa";

type NotificationType = {
    dynamicRef: MutableRefObject<HTMLDivElement | null>;
    text: string;
    error: boolean;
    isOpen: boolean;
};

const Notification = ({
    dynamicRef,
    text,
    error,
    isOpen,
}: NotificationType) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div ref={dynamicRef} className="notification-container">
            {error ? <FaTimes /> : <FaCheck />}
            <p>{text}</p>
        </div>,
        document.getElementById("portal")!
    );
};

export default Notification;
