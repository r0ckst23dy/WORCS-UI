import React from "react";

export default function(props) { 

        return (
            <div>
                <h3>{props.title}</h3>,
                <h5>{props.priority}</h5>
                <p>{props.assignmentSummary}</p>
            </div>
        )


}