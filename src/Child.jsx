import React from "react";

class Child extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor call");
        this.state = {
            on: false,
        };
    }

    componentDidMount() {
        console.log("component did Mount call");
    }
    componentDidUpdate() {
        console.log("component did update call");
    }
    componentWillUnmount() {
        console.log("component will umount ");
    }

    render() {
        console.log("render was called");
        return (
            <div>
                <button
                    onClick={() => {
                        if (this.state.on) {
                            this.setState({ on: false });
                        }
                        else {
                            this.setState({ on: true });
                        }
                    }}
                >
                    click
                </button>
            </div>
        );
    }

}

export default Child;