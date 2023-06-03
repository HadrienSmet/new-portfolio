import SvgReact from "../../../assets/svg/SvgReact";
import SvgNextJS from "../../../assets/svg/SvgNextJS";
import SvgSass from "../../../assets/svg/SvgSass";
import SvgNodeJS from "../../../assets/svg/SvgNodeJS";
import SvgExpress from "../../../assets/svg/SvgExpress";
import SvgMongoDB from "../../../assets/svg/SvgMongoDB";
import SvgPostgreSQL from "../../../assets/svg/SvgPostgreSQL";
import SvgSocketIO from "../../../assets/svg/SvgSocketIO";
import SvgTypeScript from "../../../assets/svg/SvgTypeScript";

const SectionTools = () => {
    return (
        <section className="section-tools">
            <h2>Stacks</h2>
            <div className="tools-container">
                <SvgSass />
                <SvgTypeScript />
                <SvgReact />
                <SvgNextJS />
                <SvgNodeJS />
                <SvgExpress />
                <SvgSocketIO />
                <SvgMongoDB />
                <SvgPostgreSQL />
            </div>
        </section>
    );
};

export default SectionTools;
