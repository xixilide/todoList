import React,{Component, PropTypes} from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap'; // 导航组件

export default class App extends Component {
  constructor(){
    super();
    //控制组件内部的状态，知道如何定义
    this.state = {
      item :[],
      text:''
  }

}
handleSubmit(e){
  e.preventDefault()
  var newItem = {
    text:this.state.text,
    index:0

  }
  this.setState ((prevState) => ({
      item:prevState.items.concat(newItem),
      text:''
  }))
}
handleChange(e){
  this.setState ({text:e.target.value})
}
  render(){
    return(
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    )
  }
}

class TodoList extends React.Component{
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item=>(
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
    </div>
    );
  }
}
