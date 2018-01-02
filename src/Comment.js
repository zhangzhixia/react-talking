import React ,{Component} from "react";

class Comment extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.comment)
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }


// render(){
    //     const comments=this.props.commentsList;
    //     return(
    //         <div>
    //             {comments.map((comment,i)=>{
    //                 return(
    //                     <div key={i}>
    //                         {comment.username}:{comment.content}
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     )
    // }


}
export default Comment;