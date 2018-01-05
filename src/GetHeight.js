import React ,{Component} from "react";

class Post extends Component {
    constructor(){
      super();
    }
    static defaultProps=""
    componentDidMount (){
        console.log(this.p)
        console.log(this.p.style.height)
    }
    render () {
    //   var content=this.props.content;
    var content="<div style='height:399px'></div>";
      return ( <p ref={(p)=>this.p = p}>content</p>)
    }
  }

// class Post extends Component {
//     componentDidMount () {
//         console.log(this.p.style.height)
//     //   this.p.focus()
      
//     }
  
//     render () {
//       return (
//         // <input ref={(input) => this.input = input} />
//         <p ref={(p)=>this.p = p}></p>
//       )
//     }
//   }

  export default Post;