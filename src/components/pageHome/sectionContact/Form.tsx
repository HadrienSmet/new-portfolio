import GradientBorder from "@/components/ui/GradientBorder";

const Form = () => {
    return (
        <form action="" className="contact__form">
            <div className="contact__form__adress-division">
                <input type="email" name="" id="" />
                <span>Mail adress</span>
            </div>
            <div className="contact__form__mail-division">
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <span>Message</span>
            </div>
            <GradientBorder>
                <button>Send mail</button>
            </GradientBorder>
        </form>
    );
};

export default Form;
