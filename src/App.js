import React, { Component } from 'react';
import CardList from './CardList';
import {robots_array } from './robots';
import Scroll from './Scroll';
import 'tachyons';
import './App.css';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			// Var Name : Init Value
			//robots: robots_array,
			robots: [],
			searchfield: '',
			date1:  new Date()
		}
		console.log('1 Constructor')
	}
		// Like a Start
	  	componentDidMount() {
	  		fetch('http://jsonplaceholder.typicode.com/users')
	  			.then(response => response.json())
	  			.then(users    => {this.setState({robots : users})})	

	  	//	this.setState({robots : robots_array});
		    setInterval(() => this.tick1(),
		      3000
		    )
		    console.log('2 componentDidMount')
	  	}

		tick1() {
		    this.setState({
		      date1: new Date()
		    })
		    //this.setState({ searchfield: "Yanis" })
		}
	
	mySearchFun = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log('3 render')

		if (this.state.robots.length === 0) {
				return <h1>Loading</h1>
		} else {
			return (
			<div className = 'tc'>
				<h1 className = 'f1'>RoboFriends</h1>
				<h2>It is {this.state.date1.toLocaleTimeString()}.</h2>
				<div>
					<input 
						className='pa3 ba b--green bg-lightest-blue'
						type='search' 
						placeholder='search robots' 
						onChange={this.mySearchFun}
					/>
				</div>
				<Scroll>
					// <CardList robots={shuffleArray(filteredRobots)}/>
					<CardList robots={filteredRobots}/>
				</Scroll>
				
			</div>
		);
		}
		
	}
}

export default App;