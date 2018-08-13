import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Add from './add.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.getAll = this.getAll.bind(this);
  }
  componentDidMount(){
    this.getAll()
  }
  getAll(){
    axios.get('/todos')
      .then((response) => {
        this.setState({todos: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });           
  }
  render() {

    var mappedTodos = this.state.todos.map((todo) => <li key={todo._id}>{todo.task}</li>)
    return (
      <div>
        <h1>refined To-Do List</h1>
        <ul>{mappedTodos}</ul>
        <Add/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

//npm start = starts server/index.js with nodemon
//npm run dev = starts webpack watching the files in development mode (per package.json)

//Other suggested scripts
//mongod = runs mongodb
//mongo --host 127.0.0.1:27017 = connects mongo to the localhost