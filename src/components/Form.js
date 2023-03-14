import React, { Component } from 'react'
import './Form.css'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Username:'',
        comments:'',
        topic:'react'
    
      }
    }
    handleUsernamechange=(event)=>{
        this.setState({
            Username: event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit =(event)=>{
        alert(`${this.state.Username} ${this.state.comments} ${this.state.topic}`)
    
    }
      render() {
        const {Username, comments, topic} = this.state

    return (
        <form  className= "Form" onSubmit={this.handleSubmit}>
             <div className='user'>
        <label>Username</label>
        <input type="text" 
         value={Username} 
         onChange={this.handleUsernamechange}/>
      </div>
      <div className='comment'>
        <label>Comments</label>
        <textarea 
         value={comments} 
         onChange={this.handleCommentsChange}>
        </textarea>
      </div>
      <div className='topic'>
        <label>Topic</label>
        <select value={topic} onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='python'>Python</option>
        </select>
      </div>
      <button  className="submit" type='submit'>Submit</button>
        </form>
        
    
      
      
    )
  }
}

export default Form