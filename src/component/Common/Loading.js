import React from 'react';
import ClockLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

class Loading extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sweet-loading">
                <ClockLoader
                    css={""}
                    size={50}
                    color={"rgb(54, 215, 183)"}
                    loading={this.props.loading}
                />
            </div>
        );
    }
}

export default Loading