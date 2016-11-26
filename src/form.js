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
