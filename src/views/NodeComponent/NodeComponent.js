import React from "react";
import './NodeComponent.scss'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadComponent from "../HeadComponent/HeadComponent";
import TailComponent from "../TailComponent/TailComponent"
class NodeComponent extends React.Component {
    render() {
        let { Ten, Gia, id, idHead, idTail } = this.props;
        let head = (id === idHead) ? true : false
        let tail = (id === idTail) ? true : false
        return (
            <>
                <div className="Node" >
                    <div className="container">
                        <div className="Ten"><span style={{ color: "#49e269" }}>Tên:</span> {Ten}</div>
                        <div className="Gia"><span style={{ color: "yellow" }}>Giá:</span> {Gia}</div >
                    </div >
                    <FontAwesomeIcon icon={faArrowDownLong} />
                    {head &&
                        <HeadComponent display={true}></HeadComponent>
                    }
                    {tail &&
                        <TailComponent display={true}></TailComponent>

                    }
                </div>
            </>
        )
    }
}

export default NodeComponent;