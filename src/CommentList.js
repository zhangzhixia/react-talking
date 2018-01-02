import React ,{Component} from "react";
import Comment from "./Comment";
class CommentList extends Component{
    static defaultProps=[];
    constructor(){
        super();
    }
    render(){
        
        return(
            <div>       
               
                {this.props.comments.map((comment,i)=>
                    <Comment comment={comment} key={i}/>    
                )}
                


            </div>
        )
    }
}




    


export default CommentList;