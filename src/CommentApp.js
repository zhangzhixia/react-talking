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
    componentWillMount(){
        this._getCount();
    }

    handleSubmitContent(commont){
        if(!commont) return;
        if(!commont.username) return alert("请输入用户名");
        if(!commont.content) return alert("请输入评论内容");  
        this.state.comments.push(commont);
        const comments=this.state.comments;
        this.setState({comments});
        this._setContent(comments)
    }

    _setContent(commont){
        localStorage.setItem("comments",JSON.stringify(commont));
    }
    _getCount(){
        let comments=localStorage.getItem("comments");
        if(comments){
            comments = JSON.parse(comments);
            this.setState({comments})
        }
       
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