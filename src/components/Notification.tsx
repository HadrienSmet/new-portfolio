import { MutableRefObject } from "react";
import ReactDOM from "react-dom";
import { FaCheck, FaTimes } from "react-icons/fa";

type NotificationType = {
    ref: MutableRefObject<HTMLDivElement | null>;
    text: string;
    error: boolean;
    isOpen: boolean;
};

const Notification = ({ ref, text, error, isOpen }: NotificationType) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div ref={ref} className="notification-container">
            {error ? <FaTimes /> : <FaCheck />}
            <p>{text}</p>
        </div>,
        document.getElementById("portal")!
    );
};

export default Notification;
