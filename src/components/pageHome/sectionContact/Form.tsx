import GradientBorder from "@/components/ui/GradientBorder";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

const useForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

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
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return {
        formRef,
        sendEmail,
    };
};

const Form = () => {
    const { formRef, sendEmail } = useForm();
    return (
        <form ref={formRef} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form__name-division">
                <input type="text" name="from_name" />
                <label>Name</label>
            </div>
            <div className="contact__form__adress-division">
                <input type="email" name="email_id" />
                <label>Email</label>
            </div>
            <div className="contact__form__mail-division">
                <textarea name="message" />
                <label>Message</label>
            </div>
            <GradientBorder>
                <input type="submit" value="Send" />
            </GradientBorder>
        </form>
    );
};

export default Form;
