import React, { PropTypes } from 'react'
import TodoList from './todolist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Todo extends React.Component {
  constructor(props){
    super();
    this.state={
      items:[
        {title:'aa',completed:false,id:1},
        {title:'bb',completed:true,id:2}
      ],
      show:0
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
    let date = new Date;
    let newItem={title:inputValue,completed:false,id:date.getTime()}
    this.state.items.push(newItem)　//将输入的内容
      this.setState({  items:this.state.items  })　

  }

  handleComponent(id){
    var index = this.state.items.findIndex(function(ele){
      return id == ele.id
    })
    this.state.items[index].completed=!this.state.items[index].completed
    this.setState({
      items:this.state.items
    })
  }
  handleDel(id){
    var index = this.state.items.findIndex(function(ele){
      return id == ele.id
    })
    this.state.items.splice(index,1)
    this.setState({
      items:this.state.items
    })
  }
  handleShow(id){
    this.setState({show:id})
  }
  render () {
    if (this.state.show==0) {
      　var showItems=this.state.items;
    }else if (this.state.show==1) {
      　var showItems=this.state.items.filter(function (element) {
        return element.completed== false
      })
    }else {
    　  var showItems=this.state.items.filter(function (element) {
        return element.completed== true
      })//`add# ${this.items.length+1}`
      };

      let name = ["All","Active","Completed"];
      let button = name.map( (item,index) =>
        <button key={index} onClick={this.handleShow.bind(this,index)}
          style = {this.state.show == index ? {backgroundColor:'#00bcd4'} : null}>{item}</button>

    )
   return(
      <div>
        <h1>Todo</h1>
        <TodoList items={showItems} handleComponent={this.handleComponent.bind(this)}
           handleDel={this.handleDel.bind(this)}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='add a todo' ref="input"/>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <RaisedButton label="aa" primary={true}/>
            </MuiThemeProvider>


      </form>
        {button}
      </div>
    )
  }
}
export default Todo;
