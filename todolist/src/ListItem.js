import React , {Component} from 'react';
import PropTypes from 'prop-types';
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

ListItem.propTypes = {
  content : PropTypes.string,
  index : PropTypes.number,
  deleteItem : PropTypes.func
}

ListItem.defaultProps = {
  content:'default'
}

export default ListItem;