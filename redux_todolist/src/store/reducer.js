import { CHANGE_INPUT_VALUE,SUBMIT_INPUT_VALUE,DELETE_LIST_ITEM,INIT_LIST_DATA } from './actionTypes'
 
 let defaultStore = {
   inputValue : '123',
   list : []
 }

 const reducer = (store=defaultStore,action)=>{
   if(action.type === CHANGE_INPUT_VALUE){
     const newStore = JSON.parse(JSON.stringify(store));
     newStore.inputValue = action.value;
     return newStore;
   }else if(action.type === SUBMIT_INPUT_VALUE){
    const newStore = JSON.parse(JSON.stringify(store));
    newStore.list.push(newStore.inputValue);
    newStore.inputValue = "";
    return newStore;
   }else if(action.type === DELETE_LIST_ITEM){
    const newStore = JSON.parse(JSON.stringify(store));
    newStore.list.splice(action.index,1)
    return newStore;
   }else if(action.type === INIT_LIST_DATA){
    const newStore = JSON.parse(JSON.stringify(store));
    newStore.list = action.list;
    return newStore;
   }
   return store;
 }

 export default reducer;