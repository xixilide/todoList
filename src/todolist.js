import React,{Component, PropTypes} from 'react'
import Img from './img/delete.svg'

export default class TodoList extends Component {

handleChange(id){

  //传入一个方法
  this.props.handleComponent(id)
}
handleDelete(id){
  this.props.handleDel(id)
}
  render() {
    let list = this.props.items.map( item =>
      // <li key={index}>{item}</li>
      <div key={item.id} className="li">
        <input type="radio" checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>

        <span style={item.completed ? {textDecoration: "line-through",color:'#999'} : null}>{item.title}</span>
        <span onClick={this.handleDelete.bind(this,item.id)} className="del"><img src={Img} /></span>
      </div>
    )
    return (
      <div>
      <ul>
        {list}
      </ul>
    </div>
    );
  }
}
