import Notification from "@/components/Notification";
import GradientBorder from "@/components/ui/GradientBorder";
import emailjs from "@emailjs/browser";
import {
    FormEvent,
    MutableRefObject,
    useRef,
    useState,
    useEffect,
} from "react";

const useForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const responseRef = useRef<HTMLDivElement | null>(null);
    const errorRef = useRef<HTMLDivElement | null>(null);
    const [isCorrectlySend, sendIsCorrectlySend] = useState<
        boolean | undefined
    >(undefined);

    const childRemover = (ref: MutableRefObject<HTMLDivElement | null>) => {
        const portal = document.getElementById("portal");
        setTimeout(() => {
            portal?.removeChild(ref.current!);
        }, 3000);
    };

    const handleDOM = (success: boolean) => {
        formRef.current?.reset();
        if (success) childRemover(responseRef);
        if (!success) childRemover(errorRef);
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
                    sendIsCorrectlySend(true);
                    handleDOM(false);
                },
                (error) => {
                    sendIsCorrectlySend(false);
                    handleDOM(false);
                }
            );
    };

    return {
        formRef,
        responseRef,
        errorRef,
        isCorrectlySend,
        sendEmail,
    };
};

const useInputs = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const nameLabelRef = useRef<HTMLLabelElement | null>(null);
    const mailRef = useRef<HTMLInputElement | null>(null);
    const mailLabelRef = useRef<HTMLLabelElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const textLabelRef = useRef<HTMLLabelElement | null>(null);
    const classRemover = (
        inputRef: MutableRefObject<
            HTMLTextAreaElement | HTMLInputElement | null
        >,
        labelRef: MutableRefObject<HTMLLabelElement | null>
    ) => {
        if (inputRef.current?.value !== "") {
            labelRef.current?.classList.add("fill");
        } else {
            labelRef.current?.classList.remove("fill");
        }
    };
    useEffect(() => {
        classRemover(nameRef, nameLabelRef);
        classRemover(mailRef, mailLabelRef);
        classRemover(textRef, textLabelRef);
    }, [
        nameRef.current?.value,
        mailRef.current?.value,
        textRef.current?.value,
    ]);
    return {
        nameRef,
        nameLabelRef,
        mailLabelRef,
        mailRef,
        textLabelRef,
        textRef,
    };
};

const Form = () => {
    const {
        nameRef,
        nameLabelRef,
        mailLabelRef,
        mailRef,
        textLabelRef,
        textRef,
    } = useInputs();
    const { formRef, responseRef, errorRef, isCorrectlySend, sendEmail } =
        useForm();
    return (
        <form ref={formRef} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form__name-division">
                <input ref={nameRef} type="text" name="from_name" />
                <label ref={nameLabelRef}>Name</label>
            </div>
            <div className="contact__form__adress-division">
                <input ref={mailRef} type="email" name="email_id" />
                <label ref={mailLabelRef}>Email</label>
            </div>
            <div className="contact__form__mail-division">
                <textarea ref={textRef} name="message" />
                <label ref={textLabelRef}>Message</label>
            </div>
            <GradientBorder>
                <input type="submit" value="Send" />
            </GradientBorder>
            {isCorrectlySend === false && (
                <Notification
                    ref={errorRef}
                    isOpen={true}
                    text="An error occured during the submission"
                    error={true}
                />
            )}
            {isCorrectlySend === true && (
                <Notification
                    ref={responseRef}
                    isOpen={true}
                    text="Your email has been send"
                    error={false}
                />
            )}
        </form>
    );
};

export default Form;
