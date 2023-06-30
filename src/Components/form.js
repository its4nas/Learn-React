import { Component } from "react";
class Form extends Component
{
    state =
    {
        firstname:"",
    };
    handlechange=(event)=>
    {
        this.setState({
            firstname: event.target.value, 
        })
    };
    handleSubmitChange=(event) =>
    {
        event.preventDefault();
        console.log({fname: this.state.firstname,});
    }
    render()
    {
        return (<div> <h2>Form</h2>
                <form onSubmit={this.handleSubmitChange}>
                    <input type="text" onChange={this.handlechange} value={this.state.firstname}></input>
                    <input type="submit" value="submit" onChange={this.handleSubmitChange}></input>
                </form>
        </div>)
    }
}
export default Form