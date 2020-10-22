import React,{Fragment,Component} from 'react';
import ListItem from './ListItem.js';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : '',
      list:[]
    }
    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handlerClickBtn = this.handlerClickBtn.bind(this);
    this.handlerDeleteItem = this.handlerDeleteItem.bind(this);
  }
  render(){
      return (
        <Fragment>
          <input
           value={this.state.inputValue}
           onChange={this.handlerInputChange}
           />
          <button onClick={this.handlerClickBtn}>提交</button>
          <ul>
            {
              this.getListItem()
            }
          </ul>
        </Fragment>
      );
  }

  getListItem(){
    return this.state.list.map((item,index)=>{
            return (
              <ListItem key={index} content={item} index={index} deleteItem={this.handlerDeleteItem} />
            )
          })
  }

  handlerInputChange(e){
    const inputValue = e.target.value;
    this.setState(()=>({
      inputValue
    }))
  }

  handlerClickBtn(){
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }))
  }
  
  handlerDeleteItem(index){
    this.setState((prevState)=>{
      let list = [...prevState.list];
      list.splice(index , 1);
      return {list}
    })
  }
}

export default TodoList;
