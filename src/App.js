import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
	searchfield:''
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(users=>{this.setState({robots:users})});
	
}	

	onSearchChange=(event)=>{
this.setState({searchfield:event.target.value});


	}
	render(){
		const filteredRobots=this.state.robots.filter(robot=>{
	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
})
		if(this.state.robots.length===0){
			return <h1>Still Loading...</h1>
		}
		else{
			return(
		<div className='tc'>
		<h1 className='f1'>ROBOT FRIENDS</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots} />
		</Scroll>
		</div>
		);
		}
		
	}
	
}
export default App;