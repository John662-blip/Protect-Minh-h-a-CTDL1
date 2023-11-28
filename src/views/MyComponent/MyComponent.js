import React from "react";
import ChildComponent from "../ChildComponent/ChildComponent";
import ShowComponent from "../ChildComponent/ShowComponent";
import LIST from "../Logic/LIST";

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NodeInfor: [],
        }
        this.list = new LIST();
    }

    addTailNode = (Book) => {
        this.list.AddTail(Book)
        this.setState({
            NodeInfor: this.list.toArr(),
        })
    }
    deleteHead = () => {
        let bool = this.list.RemoveHead();
        if (!bool) {
            alert("Không còn phần tử nào để xóa");
            return;
        }
        this.setState({
            NodeInfor: this.list.toArr(),
        });

    }
    deleteTail = () => {
        let bool = this.list.RemoveTail();
        if (!bool) {
            alert("Không còn phần tử nào để xóa");
            return;
        }
        this.setState({
            NodeInfor: this.list.toArr(),
        });
    }
    render() {
        return (
            <>
                <div style={{ margin: "10px 0" }}>
                    <ChildComponent deleteTail={this.deleteTail} deleteHead={this.deleteHead} addTailNode={this.addTailNode} />
                    <ShowComponent NodeInfor={this.state.NodeInfor} list={this.list} />
                </div>
            </>
        )
    }

}
export default MyComponent