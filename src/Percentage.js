import React ,{Component} from "react";
// reactjs小书百分比换算器  前端应用状态管理--状态提升
class Input extends Component {
    constructor(){
      super();
      this.state={
        val:""
      }
    }
    handleChangeVal(ev){
      this.setState({
        val:ev.target.value
      })
      if(this.props.onChange){
        const val = ev.target.value;
        
        this.props.onChange({val})
      }
    }
    render () {
      return (
        <div>
          <input type='number' value={this.state.val} onChange={this.handleChangeVal.bind(this)}/>
        </div>
      )
    }
  }
  
  class PercentageShower extends Component {
    static defaultProps={
        val:0
    };
    constructor(){
      super();
    }
    render () {
        var oldVal=this.props.nums.val;
        var newVal=0;
        if(oldVal){
            newVal=(oldVal* 100).toFixed(2)+'%';
        }
      return (
        <div>{newVal}</div>
      )
    }
  }
  
  class PercentageApp extends Component {
    constructor(){2
      super();
      this.state={
        numb:0
      }
    }
    handleSubmitVal(num){
        console.log(num)
      this.setState({
        numb:num
      })
    }
    render () {
      return (
        <div>
          <Input onChange={this.handleSubmitVal.bind(this)}/>
          <PercentageShower nums={this.state.numb}/>
        </div>
      )
    }
  }
  export default PercentageApp;