import React from "react";
import NodeComponent from "../NodeComponent/NodeComponent";

class ShowComponent extends React.Component {
    render() {
        const { NodeInfor, index } = this.props;

        return (
            <>
                <div className="Node-lists">
                    {NodeInfor && NodeInfor.map((item, itemIndex) => {
                        return (
                            <div key={item.id}>
                                <NodeComponent Ten={item.Ten} Gia={item.Gia} stt={itemIndex} index={index} />
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default ShowComponent;
