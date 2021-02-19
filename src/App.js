import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list-component'; 
import {SearchBox} from './components/searchbar/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){

    const {monsters, searchField} = this.state;
    //this is creating a new array in filteredMonster variable.
    //filter method iterates over all the monster from monsters variable and perform search according to the searchfiled and creates a new array and pass it to variable.
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      //Here e is the object for event called on onchange function whihc has a field called target that holds 
      //the html element that called that event.
      //So here that elemnt is input tag and its value can be accessed by e.target.value
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder ="Search Monster" handleChangeEvent ={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={filteredMonster} />
      </div>
    );
    //So finally, what is happening is that everytime a change is made inside state object. i.e inside searchField , render function called again.
    //As render function is called, new values are passed to CardList as FilteredMonsters is called again and it shows monsters accordingly.
  }
  
}
/*
<input type="search" placeholder="Search Monster" 
onChange={e => {
  this.setState({searchField:e.target.value}, () => {console.log(this.state)});
}} />
*/

export default App;
