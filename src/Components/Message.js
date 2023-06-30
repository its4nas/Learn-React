import {Component} from "react";
class Message extends Component
{
    render()
    {
        const {name} = this.props
        return <h1>This is a class component {name}</h1>
    }
}
export default Message;