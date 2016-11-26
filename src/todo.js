import React, { PropTypes } from 'react'
import TodoList from './todolist';

class Todo extends React.Component {
  constructor(props){
    super();
    this.state={
      items:[
        {title:'aa',completed:false},
        {title:'bb',completed:true}
      ]
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let inputValue = this.refs.input.value.trim();

    this.refs.input.value=null //清空内容
    if (inputValue==''&& !inputValue) {
      this.refs.input.focus();
      return alert('不能为空')
    }　//排除空值
    let newItem={title:inputValue,completed:false}
    this.state.items.push(newItem)　//将输入的内容
      this.setState({  items:this.state.items  })　

  }

  render () {
    return(
      <div>
        <h1>Todo</h1>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='add a todo' ref="input"/>
          <button>add#{this.state.items.length+1}</button>
      </form>
      </div>
    )
  }
}
export default Todo;
