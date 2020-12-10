import React,{Component} from 'react';
import { Input,Button,List } from 'antd';
import store from './store';
class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.onHandlerInputChange = this.onHandlerInputChange.bind(this);
    this.onHandlerClickBtn = this.onHandlerClickBtn.bind(this);
    store.subscribe(()=>{
      this.setState(store.getState())
    });
  }

  render(){
     
    return (<div>
      <Input 
        placeholder="Basic usage" 
        value={this.state.inputValue} 
        style={{width:'300px',height:'32px',margin:'10px 10px 0 10px'}}
        onChange={this.onHandlerInputChange}
      /> 
      <Button
       type="primary"
       onClick={this.onHandlerClickBtn}
      >addItem</Button>
      <List
        bordered
        dataSource={this.state.list}
        style={{width:'300px',margin:'10px 0px 0 10px'}}
        renderItem={item => (
          <List.Item>
             {item}
          </List.Item>
        )}
      />
    </div>)
  }

  onHandlerInputChange(e){
    store.dispatch({
      type:'change_input_value',
      value : e.target.value
    })
  }

  onHandlerClickBtn(){
    store.dispatch({
      type:'submit_input_value'
    })
  }
}

export default TodoList;