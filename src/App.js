import React, {Component} from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'
class App extends Component {
constructor(){
    super();
    this.state = {
      monster:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(user=>this.setState({monster:user}))
  }

  handlechange =(e)=>{
    this.setState({searchField:e.target.value})
  }
  render(){
const {monster,searchField}=this.state;
const searcheMonsterdList=monster.filter(monster=>{
return(monster.name.toLowerCase().includes(searchField.toLowerCase()))
})

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster'
       handlechange={this.handlechange}/>
      <CardList monsters={searcheMonsterdList}/>  
      </div>
    );
  }
  
}

export default App;
