import React,{Fragment,Component} from 'react';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : '',
      list:[]
    }
    
  }
  render(){
      return (
        <Fragment>
          <input
           value={this.state.inputValue}
           onChange={this.handlerInputChange.bind(this)}
           />
          <button>提交</button>
          <ul>
            <li>学习</li>
          </ul>
        </Fragment>
      );
  }

  handlerInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
}

export default TodoList;
