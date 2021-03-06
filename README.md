# React Transform Boilerplate

### Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

### eg通过滚轮调节字体大小

```js
export default class App extends Component {
  constructor(){
    super();
    //控制组件内部的状态，知道如何定义
    this.state = {
      fontSize:30
    }
  }
  handleClick(e){
    this.setState({
      fontSize:this.state.fontSize + e.deltaY/100
    })
  }
  render(){
    let styles = {
      fontSize:`${this.state.fontSize}px`
    }
    return(
      <div onWheel={this.handleClick.bind(this)} style={styles}>
          App
      </div>
    )
  }
}

//onWheel 事件是滚轮事件
```
### this.state 的定义

控制组件内部的状态，知道如何定义

###　react封装事件
　- onWheel 滚轮事件
    -  number deltaMode
    -  number deltaX
    -  number deltaY
    -  number deltaZ
  - onLoad onError image 事件
  - Mouse Events

    -  onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
    -  onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
    -  onMouseMove onMouseOut onMouseOver onMouseUp

### form表单

　将受控组件变成非受控的

```js
import React, { PropTypes } from 'react'

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      value:'lime'
  }
  }
  handleSubmit(event) {
   alert('Your favorite flavor is: ' + this.state.value);
   event.preventDefault();
 }
  //value 设置为一个可变的值
  handleChange(e){
    this.setState({value:e.target.value})
  }
  handleRadio(e){
    e.preventDefault();
     alert('Your favorite flavor is: ' +e.target.value);
  }
  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>

            <input onChange={this.handleRadio.bind(this)} type="checkbox"  name="checkbox" value="A"/>A
            <input onChange={this.handleRadio.bind(this)}  type="checkbox"  name="checkbox" value="B"/>B
            <input onChange={this.handleRadio.bind(this)} type="checkbox" name="checkbox" value="C"/>C
          <input type="submit" value="tijiao" />
        </form>
      </div>
    )
  }
}

export default Form;
```

### todo 添加列表

```js
class Todo extends React.Component {
  constructor(props){
    super();
    this.state={
      items:[],
      text:''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let newItem = this.refs.input.value.trim();

    this.refs.input.value=null //清空内容
    if (newItem==''&& !newItem) {
      this.refs.input.focus();
      return alert('不能为空')
    }　//排除空值

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
```
```js
//TodoList

export default class TodoList extends Component {


  render() {

    let list = this.props.items.map( (item,index) =>
      <li key={index}>{item}</li>
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
```


### 优化后的TodoList 实现删除选中操作
```js
import React,{Component, PropTypes} from 'react'

export default class TodoList extends Component {

handleChange(i){

  //传入一个方法
  this.props.handleComponent(i)
}
handleDelete(i){
  this.props.handleDel(i)
}
  render() {
    let list = this.props.items.map( (item,index) =>
      // <li key={index}>{item}</li>
      <div key={index}>
        <input type="radio" checked={item.completed} onChange={this.handleChange.bind(this,index)}/>

        <span style={item.completed ? {textDecoration: "line-through",color:'#ccc'} : null}>{item.title}</span>
        <button onClick={this.handleDelete.bind(this,index)}>删除</button>
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
```
