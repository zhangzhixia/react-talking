import React,{Component} from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import  "./index.css";
class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }
    handleSubmitContent(commont){
        this.state.comments.push(commont);
        this.setState({
            comments:this.state.comments
        })
    }
    render(){
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: 'Good'}
        // ]
        return(
        <div className="wrapper">
            <CommentInput onSubmit={this.handleSubmitContent.bind(this)}/>
            <CommentList comments={this.state.comments}/>
        </div>)
    }
}

export default CommentApp;