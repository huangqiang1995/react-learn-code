import React , {Component} from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  render(){
    const {content} =  this.props;
    return (
      <div onClick={this.deleteItem}>{content}</div>
    )
  }
  deleteItem(){
    const {deleteItem,index} = this.props;
    deleteItem(index);
  }
}

export default ListItem;