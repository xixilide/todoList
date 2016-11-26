import React,{Component, PropTypes} from 'react'

export default class TodoList extends Component {

handleChange(e){
  e.preventDefault();
  
}
  render() {
    let list = this.props.items.map( item =>
      // <li key={index}>{item}</li>
      <div>
        <input type="radio" checked={item.completed} onChange={this.handleChange.bind(this)}/>

        <span style={item.completed ? {textDecoration: "line-through"} : null}>{item.title}</span>
        <button>删除</button>
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
