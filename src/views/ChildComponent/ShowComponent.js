import React from "react";
import NodeComponent from "../NodeComponent/NodeComponent";

class ShowComponent extends React.Component {
    render() {
        const { NodeInfor, list } = this.props;

        return (
            <>
                <div className="Node-lists">
                    {NodeInfor && NodeInfor.map((item) => {

                        return (
                            <div key={item.id}>
                                <NodeComponent id={item.id} Ten={item.Ten} Gia={item.Gia}
                                    idHead={list.pHead.value.id} idTail={list.pTail.value.id} />
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default ShowComponent;
