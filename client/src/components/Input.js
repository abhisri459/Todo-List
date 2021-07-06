import React, {Component} from "react";
import axios from "axios";

import Listtodo from "./ListTodo"

class Input extends Component {
    state = {
        action: ""
    }

    addTodo = () => {
        const task = {action: this.state.action}

        if(task.action && task.action.length >0) {
            axios.post("/api/todos",task)
                .then(res => {
                    if(res.data) {
                        
                        this.setState({action: ""})
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log("input field required");
        }
    }



    render() {
        let {action} = this.state;
        // this.onChange();
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={action}/>
                <button onClick={this.addTodo}>add Todo</button>
            </div>
        )
    }

}

export default Input