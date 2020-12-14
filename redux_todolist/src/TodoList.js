import React,{Component} from 'react';
import store from './store';
import { changeInputValue,submitInputValue,deleteListItem,getListData } from './store/actions'

import TodoListUI from './TodoListUI';
class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.onHandlerInputChange = this.onHandlerInputChange.bind(this);
    this.onHandlerClickBtn = this.onHandlerClickBtn.bind(this);
    this.onClickHandlerDelete = this.onClickHandlerDelete.bind(this);
    store.subscribe(()=>{
      this.setState(store.getState());
    });
  }
  componentDidMount(){
    const action = getListData();
    store.dispatch(action)
  }
  render(){
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        onHandlerInputChange={this.onHandlerInputChange}
        onHandlerClickBtn={this.onHandlerClickBtn}
        onClickHandlerDelete={this.onClickHandlerDelete}
        list={this.state.list}
      />
    )
  }

  onHandlerInputChange(e){
    const action = changeInputValue(e.target.value)
    store.dispatch(action)
  }

  onHandlerClickBtn(){
    const action = submitInputValue()
    store.dispatch(action)
  }

  onClickHandlerDelete(index){
    const action = deleteListItem(index)
    store.dispatch(action)
  }
}

export default TodoList;