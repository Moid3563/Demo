import React, { Component } from 'react'

 class Classclick extends Component {

    ClickHandler(){
        console.log('Clicked the button')
    }
  render() {
    return (
        <>
        <button onClick={this.ClickHandler}>Click Me</button>
        </>
    
    )
  }
}

export default Classclick