import Notification from "@/components/Notification";
import GradientBorder from "@/components/ui/GradientBorder";
import emailjs from "@emailjs/browser";
import {
    FormEvent,
    MutableRefObject,
    useRef,
    useState,
    useEffect,
    useReducer,
} from "react";

interface State {
    name: string;
    mail: string;
    message: string;
}

interface ChangeNameAction {
    type: "change_name";
    newName: string;
}

interface ChangeMailAction {
    type: "change_mail";
    newMail: string;
}

interface ChangeMessageAction {
    type: "change_message";
    newMessage: string;
}
interface UnknownAction {
    type: "unknown";
}

type Action =
    | ChangeNameAction
    | ChangeMailAction
    | ChangeMessageAction
    | UnknownAction;

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "change_name": {
            return {
                name: action.newName,
                mail: state.mail,
                message: state.message,
            };
        }
        case "change_mail": {
            return {
                name: state.name,
                mail: action.newMail,
                message: state.message,
            };
        }
        case "change_message": {
            return {
                name: state.name,
                mail: state.mail,
                message: action.newMessage,
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
};

const useInputs = () => {
    const nameLabelRef = useRef<HTMLLabelElement | null>(null);
    const mailLabelRef = useRef<HTMLLabelElement | null>(null);
    const textLabelRef = useRef<HTMLLabelElement | null>(null);
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        mail: "",
        message: "",
    });

    const classManager = (
        inputValue: string,
        labelRef: MutableRefObject<HTMLLabelElement | null>
    ) => {
        if (inputValue !== "") {
            labelRef.current?.classList.add("fill");
        } else {
            labelRef.current?.classList.remove("fill");
        }
    };
    useEffect(() => {
        classManager(state.name, nameLabelRef);
        classManager(state.mail, mailLabelRef);
        classManager(state.message, textLabelRef);
    }, [state]);
    return {
        state,
        dispatch,
        nameLabelRef,
        mailLabelRef,
        textLabelRef,
    };
};

type FormHookType = {
    state: State;
    dispatch: any;
};

const useForm = ({ state, dispatch }: FormHookType) => {
    const [showSuccessNotif, setShowSuccessNotif] = useState(false);
    const [showErrorNotif, setShowErrorNotif] = useState(false);
    const [isCorrectlySend, setIsCorrectlySend] = useState<boolean | undefined>(
        undefined
    );
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleNotifs = (success: boolean) => {
        if (success) {
            setShowSuccessNotif(true);
            setTimeout(() => {
                setShowSuccessNotif(false);
            }, 3010);
        }
        if (!success) {
            setShowErrorNotif(true);
            setTimeout(() => {
                setShowErrorNotif(false);
            }, 3010);
        }
    };

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_fkk0chp",
                "template_zi9craq",
                formRef.current!,
                "85EYi41tlXcH8EcCT"
            )
            .then(
                (result) => {
                    setIsCorrectlySend(true);
                },
                (error) => {
                    setIsCorrectlySend(false);
                }
            );
    };

    useEffect(() => {
        const resetForm = () => {
            dispatch({
                type: "change_name",
                newName: "",
            });
            dispatch({
                type: "change_mail",
                newMail: "",
            });
            dispatch({
                type: "change_message",
                newMessage: "",
            });
        };
        const handleDOM = (success: boolean) => {
            resetForm();
            handleNotifs(success);
        };
        if (isCorrectlySend) handleDOM(true);
        if (isCorrectlySend === false) handleDOM(false);
    }, [isCorrectlySend, dispatch]);

    return {
        formRef,
        showErrorNotif,
        showSuccessNotif,
        sendEmail,
    };
};

const Form = () => {
    const { state, dispatch, nameLabelRef, mailLabelRef, textLabelRef } =
        useInputs();
    const { formRef, showErrorNotif, showSuccessNotif, sendEmail } = useForm({
        state,
        dispatch,
    });
    return (
        <form ref={formRef} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form__name-division">
                <input
                    id="from_name"
                    value={state.name}
                    type="text"
                    name="from_name"
                    onChange={(e) =>
                        dispatch({
                            type: "change_name",
                            newName: e.target.value,
                        })
                    }
                />
                <label htmlFor="from_name" ref={nameLabelRef}>
                    Name
                </label>
            </div>
            <div className="contact__form__adress-division">
                <input
                    id="email_id"
                    value={state.mail}
                    type="email"
                    name="email_id"
                    onChange={(e) =>
                        dispatch({
                            type: "change_mail",
                            newMail: e.target.value,
                        })
                    }
                />
                <label htmlFor="email_id" ref={mailLabelRef}>
                    Email
                </label>
            </div>
            <div className="contact__form__mail-division">
                <textarea
                    id="message"
                    value={state.message}
                    name="message"
                    onChange={(e) =>
                        dispatch({
                            type: "change_message",
                            newMessage: e.target.value,
                        })
                    }
                />
                <label htmlFor="message" ref={textLabelRef}>
                    Message
                </label>
            </div>
            <GradientBorder>
                <input
                    className="contact__form__submit"
                    type="submit"
                    value="Send"
                />
            </GradientBorder>
            {showErrorNotif && (
                <Notification
                    dynamicId="email_error"
                    isOpen={true}
                    text="An error occured during the submission"
                    error={true}
                />
            )}
            {showSuccessNotif === true && (
                <Notification
                    dynamicId="email_success"
                    isOpen={true}
                    text="Your email has been send"
                    error={false}
                />
            )}
        </form>
    );
};

export default Form;
