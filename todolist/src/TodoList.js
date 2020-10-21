import React,{Fragment,Component} from 'react';

import ListItem from './ListItem.js';

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
          <button onClick={this.handlerClickBtn.bind(this)}>提交</button>
          <ul>
            {
              this.state.list.map((item,index)=>{
                return (
                  <ListItem content={item} index={index} deleteItem={this.handlerDeleteItem.bind(this)} />
                )
              })
            }
          </ul>
        </Fragment>
      );
  }

  handlerInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  handlerClickBtn(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  
  handlerDeleteItem(index){
    let list = [...this.state.list];
    list.splice(index , 1);
    this.setState({
      list
    })
  }
}

export default TodoList;
