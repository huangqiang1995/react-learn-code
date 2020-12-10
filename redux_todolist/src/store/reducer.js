 let defaultStore = {
   inputValue : '123',
   list : [
     "123"
   ]
 }

 const reducer = (store=defaultStore,action)=>{
   if(action.type === 'change_input_value'){
     const newStore = JSON.parse(JSON.stringify(store));
     newStore.inputValue = action.value;
     return newStore;
   }else if(action.type === 'submit_input_value'){
    const newStore = JSON.parse(JSON.stringify(store));
    newStore.list.push(newStore.inputValue);
    newStore.inputValue = "";
    return newStore;
   }
   return store;
 }

 export default reducer;