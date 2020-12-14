
import { CHANGE_INPUT_VALUE,SUBMIT_INPUT_VALUE,DELETE_LIST_ITEM,INIT_LIST_DATA } from './actionTypes'
import axios from 'axios'

export const changeInputValue = (value)=>({
  type:CHANGE_INPUT_VALUE,
  value
})

export const submitInputValue = ()=>({
  type:SUBMIT_INPUT_VALUE
})

export const deleteListItem = (index)=>({
  type:DELETE_LIST_ITEM,
  index
})

export const initListData = (list)=>({
  type:INIT_LIST_DATA,
  list
})

export const getListData = ()=>((dispatch)=>{
    axios.get("http://localhost:3000/api/test").then(res=>{
      const action = initListData(res.data);
      dispatch(action)
    })
})