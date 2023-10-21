import React from "react";
import './TailComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class TailComponent extends React.Component {
    state = {
    }
    render() {
        let { display } = this.props
        return (
            <>
                <div className="containerb" style={{ position: "absolute" }}>
                    {display === true ?
                        <div className="Head" style={{ display: "block" }}>
                            <FontAwesomeIcon className="icon-right" icon={faArrowLeft} style={{ color: "#ffffff", }} />
                            <span>Tail</span>
                        </div> :
                        <div className="container" style={{ display: "none" }}>
                            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", }} />
                            <span>Tail</span>
                        </div>
                    }
                </div>

            </>
        )
    }
}

export default TailComponent;