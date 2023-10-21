import React from "react";
import './ChildComponent.scss'
class ChildComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }

    handleChangeTitleJob = (Event) => {
        this.setState({
            title: Event.target.value
        })
    }
    handleChangeSalary = (Event) => {
        this.setState({
            salary: Event.target.value
        })
    }
    clickSubmitA = (Event) => {
        Event.preventDefault()
        this.props.deleteHead()
    }
    clickSubmitB = (Event) => {
        Event.preventDefault()
        this.props.deleteTail()
    }
    clickSubmit = (Event) => {
        Event.preventDefault()
        if (!this.state.title || !this.state.salary || !(Number(this.state.salary) == this.state.salary)) console.log("Du lieu vua nhap co van de")
        else {
            this.props.addTailNode({
                Ten: this.state.title,
                Gia: this.state.salary,
                id: Math.floor(Math.random() * 1000)
            })
            this.setState({
                title: "",
                salary: ""
            })
        }

    }

    render() {
        return (
            <>
                <form className="sss" action="/action_page.php">
                    <label htmlFor="fname">Tên Sách :</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.title}
                        onChange={(Event) => this.handleChangeTitleJob(Event)}
                    /><br />
                    <label htmlFor="lname">Giá:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.salary}
                        onChange={(Event) => this.handleChangeSalary(Event)}
                    /><br /><br />
                    <input type="submit" value="Thêm Cuối" className="btn-click"
                        onClick={(Event) => { this.clickSubmit(Event) }}
                    />
                    <input type="submit" value="Xóa Đầu" className="btn-click"
                        onClick={(Event) => { this.clickSubmitA(Event) }}
                    />
                    <input type="submit" value="Xóa Cuối" className="btn-click"
                        onClick={(Event) => { this.clickSubmitB(Event) }}
                    />
                </form>
            </>
        )
    }
}

export default ChildComponent