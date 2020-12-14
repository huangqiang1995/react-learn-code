
import { CHANGE_INPUT_VALUE,SUBMIT_INPUT_VALUE,DELETE_LIST_ITEM } from './actionTypes'

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