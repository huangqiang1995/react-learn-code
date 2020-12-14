import React from 'react';
import { Input,Button,List } from 'antd';
const TodoListUI = (props)=>{
  return (
    <div>
      <Input 
        placeholder="Basic usage" 
        value={props.inputValue}
        style={{width:'300px',height:'32px',margin:'10px 10px 0 10px'}}
        onChange={props.onHandlerInputChange}
      />
      <Button
       type="primary"
       onClick={props.onHandlerClickBtn}
      >addItem</Button>
      <List
        bordered
        dataSource={props.list}
        style={{width:'300px',margin:'10px 0px 0 10px'}}
        renderItem={(item,index) => (
          <List.Item onClick={()=>{props.onClickHandlerDelete(index)}}>
             {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI;