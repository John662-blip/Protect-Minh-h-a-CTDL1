import React from "react";
import './NodeComponent.scss'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadComponent from "../HeadComponent/HeadComponent";
import TailComponent from "../TailComponent/TailComponent"
class NodeComponent extends React.Component {
    state = {
        Ten: this.props.Ten,
        Gia: this.props.Gia,
        stt: this.props.stt,
        head: this.props.stt === 0 ? true : false,
        tail: this.props.stt === this.props.index ? true : false,
        index: this.props.index
    }
    componentDidUpdate(prevProps) {
        if (prevProps.stt !== this.props.stt || prevProps.index !== this.props.index) {
            this.setState({
                head: this.props.stt === 0,
                tail: this.props.stt === this.props.index
            });
        }
    }
    render() {

        return (
            <>
                <div className="Node" >
                    <div className="container">
                        <div className="Ten"><span style={{ color: "#49e269" }}>Tên:</span> {this.state.Ten}</div>
                        <div className="Gia"><span style={{ color: "yellow" }}>Giá:</span> {this.state.Gia}</div >
                    </div >
                    <FontAwesomeIcon icon={faArrowDownLong} />
                    {this.state.head &&
                        <HeadComponent display={true}></HeadComponent>
                    }
                    {this.state.tail &&
                        <TailComponent display={true}></TailComponent>

                    }
                </div>
            </>
        )
    }
}

export default NodeComponent;