import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export type ExperienceProps = {
    readonly company: string;
    readonly description: string;
    readonly period: {
        readonly from: string;
        readonly to: string;
    };
    readonly stacks: Array<string>;
    readonly title: string;
};
export const Experience = (props: ExperienceProps) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className="experience-container">
            <div className="experience-header" onClick={() => setExpanded(state => !state)}>
                <h3>{props.company}</h3>
                {isExpanded
                    ? <FaAngleUp />
                    : <FaAngleDown />
                }
            </div>
            {isExpanded && (
                <div className="experience-content">
                    <div className="experience-row">
                        <p>Period</p>
                        <p>From {props.period.from.toLocaleLowerCase()} to {props.period.to.toLocaleLowerCase()}.</p>
                    </div>
                    <div className="experience-row">
                        <p>Title</p>
                        <p>{props.title}</p>
                    </div>
                    <div className="experience-row">
                        <p>Stacks</p>
                        <p>{props.stacks.join(", ")}.</p>
                    </div>
                    <div className="experience-row">
                        <p>Description</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
