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
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
  }
  componentDidMount(){
    this.getAll()
  }
  getAll(){
    axios.get('/todos')
      .then((response) => {
        this.setState({todos: response.data}, ()=>{console.log(this.state.todos)})
      })
      .catch(function (error) {
        console.log(error);
      });           
  }
  toggleComplete(toggleID, completed){ 
    
    axios.put('/todos', {
        params: {
          toggleID: toggleID,
          boolean: !completed
        }
      })
      .then((response) => {
        console.log(response);
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      }); 

  }
  deleteCompleted(){

    axios.delete('/todos')
      .then((response) => {
        console.log(response);
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }
  render() {

    // var mappedTodos = this.state.todos.map((todo) =>
    // <li key={todo._id} style={{textDecorationLine: 'line-through'}} onClick={()=>{this.toggleComplete(todo._id, todo.completed)}}>{todo.task}</li>)

    var mappedTodos = this.state.todos.map((todo) => {
      if (!todo.completed){
        return (
          <li key={todo._id} onClick={()=>this.toggleComplete(todo._id, todo.completed)} 
          style={{fontSize: '30px'}}>{todo.task}</li>
        )
      }
      else{
        return( 
          <li key={todo._id} onClick={()=>this.toggleComplete(todo._id, todo.completed)} 
          style={{textDecorationLine: 'line-through', fontSize: '30px'}}>{todo.task}</li>
        )
      }
    })

    return (
      <div>
        <h1>Refined To-Do List</h1>
        <Add tasks={this.state.todos}/>
        <ul>{mappedTodos}</ul>
        <div><button onClick={()=>this.deleteCompleted()}>Clear Completed</button></div>
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
