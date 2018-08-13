import React from 'react';
import axios from 'axios';

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    //this.getAll()
  }
  handleChange(event){
    this.setState({searchText: event.target.value})
  }
  handleSubmit(event){
    
    axios.post('/todos', {
        params: {
          newToDo: this.state.searchText
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Todo!
            <input type="text" value={this.state.searchText} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Add;