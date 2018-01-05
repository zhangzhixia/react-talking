import React,{Component} from "react";
import Clock from "./Clock";
// reactjs小书挂在阶段的组件的生命周期
class ClockIndex extends Component{
    constructor(){
        super();
        this.state={
            isShow:true
        }
    }
    handleClick(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    
    render(){
        return(
            <div>
                 {this.state.isShow? <Clock/>:""} 
                 <input type="button" value="显示/隐藏" onClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}

export default ClockIndex;