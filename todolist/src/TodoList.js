import React,{Fragment,Component} from 'react';
import ListItem from './ListItem.js';
import './index.css';
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
  /**
   * 此生命周期钩子 react v16.9 已重命名并且不建议继续使用
   * componentWillMount --> UNSAFE_componentWillMount
   * componentWillReceiveProps --> UNSAFE_componentWillReceiveProps
   * componentWillUpdate --> UnSAFE_componentWillUpdate
   * 对于unsafe方法通常有更好的解决方法
   */
  UNSAFE_componentWillMount(){
    console.log('UNSAFE_componentWillMount');
  }

  componentDidMount(){
    console.log("componentWillDidMount");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }
  render(){
    console.log('render')
      return (
        <Fragment>
          <input
           value={this.state.inputValue}
           onChange={this.handlerInputChange}
           ref={(input)=>{this.input = input}}
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
              <ListItem key={item} content={item} index={index} deleteItem={this.handlerDeleteItem} />
            )
          })
  }

  handlerInputChange(e){
    const inputValue = this.input.value;
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
