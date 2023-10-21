import React from "react";
import './HeadComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
class HeadComponent extends React.Component {
    state = {
    }
    render() {
        let { display } = this.props
        return (
            <div className="containera" style={{ position: "absolute" }}>
                {display === true ?
                    <div className="Head" style={{ display: "block" }}>
                        <span>Head</span>
                        <FontAwesomeIcon className="icon-left" icon={faArrowRight} style={{ color: "#ffffff", }} />
                    </div> :
                    <div className="container" style={{ display: "none" }}>
                        <span>Head</span>
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} />
                    </div>
                }
            </div >
        )
    }
}

export default HeadComponent;