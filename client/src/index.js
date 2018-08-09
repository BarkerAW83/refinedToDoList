import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>reactBoiler</h1>
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

//Other suggested installs
//axios, mongo, mongoose