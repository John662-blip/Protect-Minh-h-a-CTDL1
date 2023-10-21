import React from "react";
import ChildComponent from "../ChildComponent/ChildComponent";
import ShowComponent from "../ChildComponent/ShowComponent";
class MyComponent extends React.Component {
    state = {
        NodeInfor: [],
        index: -1,
    }

    addTailNode = (job) => {

        this.setState({
            NodeInfor: [...this.state.NodeInfor, job],
            index: this.state.index + 1
        })
    }
    deleteHead = () => {
        if (this.state.NodeInfor.length > 0) {
            const updatedArray = [...this.state.NodeInfor];
            const a = updatedArray.shift()
            this.setState({
                NodeInfor: updatedArray,
                index: this.state.index - 1
            });
        } else {
            alert('Không có phần tử để xóa.');
        }
    }
    deleteTail = () => {
        if (this.state.NodeInfor.length > 0) {
            const updatedArray = this.state.NodeInfor.slice(0, this.state.NodeInfor.length - 1);
            this.setState({
                NodeInfor: updatedArray,
                index: this.state.index - 1
            });
        } else {
            alert('Không có phần tử để xóa.');
        }
    }
    render() {
        return (
            <>
                <div style={{ margin: "10px 0" }}>
                    <ChildComponent deleteTail={this.deleteTail} deleteHead={this.deleteHead} addTailNode={this.addTailNode} />
                    <ShowComponent NodeInfor={this.state.NodeInfor} index={this.state.index} />
                </div>
            </>
        )
    }

}
export default MyComponent