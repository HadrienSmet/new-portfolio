import React from "react";
type Props = {
    children: JSX.Element;
};

const BackgroundLayout = ({ children }: Props) => {
    return <div className="background-layout">{children}</div>;
};

export default BackgroundLayout;
