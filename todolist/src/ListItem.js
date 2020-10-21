import React , {Component} from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  render(){
    return (
      <div onClick={this.deleteItem}>{this.props.content}</div>
    )
  }
  deleteItem(){
    this.props.deleteItem(this.props.index);
  }
}

export default ListItem;