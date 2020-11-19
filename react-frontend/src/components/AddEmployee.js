import React, { Component } from 'react'
import "./AddEmployee.css"

export class AddEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'',
             lastname:'',
             empid:'',
             gender:''
        }
    }
    handlefirstnamechange=(event)=>{
        this.setState({
            firstname: event.target.value
        })
    }
    handlelastnamechange=(event)=>{
        this.setState({
            lastname: event.target.value
        })
    }

    handleempidchange=(event)=>{
        this.setState({
            empid: event.target.value
        })
        
    }
    
    handlegenderchange=(event)=>{
        this.setState({
            gender: event.target.value
        })
    }
    handlesubmit=(event)=>{
        
        
    }

    render() {
        return (
            <form className="addemp" onSubmit={this.handlesubmit}>
                 <div class="empid">
                    <label>Employee Id</label>
                    <input type='text' value={this.state.empid} onChange={this.handleempidchange} />
                </div>

                <div class="firstname">
                    <label>First Name</label>
                    <input type='text' value={this.state.firstname} onChange={this.handlefirstnamechange} />
                    <label>Last Name</label>
                    <input type='text' value={this.state.lastname} onChange={this.handlelastnamechange} />
                </div>
                <div class="gender">
                    <label>
                        Gender
                    <select value={this.state.gender} onChange={this.handlegenderchange}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">Other</option>
                    </select>
                    </label>
                    
                </div>
                <button  type="submit">Add Employee</button>
               
            </form>
        )
    }
}

export default AddEmployee



