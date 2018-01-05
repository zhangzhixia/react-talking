import React,{Component} from "react";

class Header extends Component{
    constructor(){
        super();
        console.log("constructor")
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render(){
        console.log("render")
        return(
            <header>我是头部</header>
        )
    }
}


class IsShowHeader extends Component{
    constructor(){
        super();
        this.state={
            isShow:true
        }
    }
    handleClick(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
    
    render(){
        return(
           <div>
                <input type="button" value="显示/隐藏" onClick={this.handleClick.bind(this)}/>
                {this.state.isShow?<Header/>:""}  
           </div>
        )
    }
}

export default IsShowHeader;