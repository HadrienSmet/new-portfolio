import React from "react";
import SvgSass from "../../../../assets/svg/SvgSass";
import SvgTypeScript from "../../../../assets/svg/SvgTypeScript";
import SvgReact from "../../../../assets/svg/SvgReact";
import SvgNextJS from "../../../../assets/svg/SvgNextJS";
import SvgNodeJS from "../../../../assets/svg/SvgNodeJS";
import SvgExpress from "../../../../assets/svg/SvgExpress";
import SvgSocketIO from "../../../../assets/svg/SvgSocketIO";
import SvgMongoDB from "../../../../assets/svg/SvgMongoDB";
import SvgPostgreSQL from "../../../../assets/svg/SvgPostgreSQL";

const StacksContainer = () => {
    return (
        <div className="stacks-container">
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
    );
};

export default StacksContainer;
