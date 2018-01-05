import React,{Component} from "react";
/*
我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；
在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；
组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。
*/
class Clock extends Component{
    constructor(){
        super();
        this.state={
            date:new Date(),
        }
    }
    componentWillMount(){
       this.timer= setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    //清除定时器
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>
               时间：{this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
export default Clock;