import React,{Component} from "react";
import PropTypes from 'prop-types';
class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            content:""
        }
    }
    static propTypes ={
        onSubmit:PropTypes.func
    }
    componentWillMount(){
        this._getUserName();
    }
    handleChangeUserName(ev){
        this.setState({
            username:ev.target.value
        })
    }

    handleChangeContent(ev){
        this.setState({
            content:ev.target.value
        })
    }

    handleSubmitInfo(ev){
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({username,content});
        }
        this.setState({
            content:" "
        })
    }
    handleBlurUserName(ev){
        this._setUserName(ev.target.value);
    }
    _setUserName(username){
        localStorage.setItem("username",username);
    }
    _getUserName(){
        if(localStorage.username){
           this.setState({
               username:localStorage.username
           })
        }
    }

    componentDidMount(){
        this.getTextAreaDom.focus();
    }
    render(){
        return(
            <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input 
                    value={this.state.username} 
                    onChange={this.handleChangeUserName.bind(this)} 
                    onBlur={this.handleBlurUserName.bind(this)}
                />
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name' >评论内容：</span>
              <div className='comment-field-input'>
                <textarea 
                    value={this.state.content} 
                    ref={(textarea)=>this.getTextAreaDom=textarea}
                    onChange={this.handleChangeContent.bind(this)}/>
              </div>
            </div>
            <div className='comment-field-button'>
              <button onClick={this.handleSubmitInfo.bind(this)}>
                发布
              </button>
            </div>
          </div>
        )
    }
}

export default CommentInput;