import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactJson from 'react-json-view'
import JSONTree from 'react-json-tree'
import 'whatwg-fetch'

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Test from'./components/test.js'
import Nav from './components/ajax.js';
import HelloMessage from './components/ajax.js';
import SelectWay from './components/select.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas : [],
      value: 'name',
      mytext : '',
      url : `http://127.0.0.1:8081/name`
    };

    this.getData=this.getData.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //改变select值以及url
  handleChange(event) {
    this.setState({
      value: event.target.value,
      url : `http://127.0.0.1:8081/`+event.target.value
    });
    // this.getData();
  }
  handleSubmit(event) {
    this.getData();
    // alert( this.state.value);
    event.preventDefault();
  }

  //获取数据
  getData(){ //请求数据函数
    fetch(this.state.url,{
      method: 'GET'
    }).then(res => res.json())
      .then(data => {this.setState({datas:data})
    })

    // fetch(this.state.url,{
    //   method: 'GET'
    // }).then(res => res.json.text())
    //   .then(data => {this.setState({mytext:data})
    // })
  }
  componentWillMount(){
    this.getData();
  }
  

  render() {
    var datas = this.state.datas
    var str = []
    for (var i = 0; i < datas.length; i++) {
      str.push(
      <div>
      <div>{datas[i].name}</div>
      <div>The price is {datas[i].price} Euro</div>
      <div>The michelinStars is {datas[i].michelinStars} 🌟</div>
      <img src={datas[i].image} className="App-img" />
      <p/></div>)
    }

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Query Restaurant Information
          </p>
          </header>

        <body className="App-body">

          {/* <SelectWay onSubmit={this.handleSubmit}/> */}
          <form onSubmit={this.handleSubmit}>
          <label>
            <p/>
            Please select the sorting way&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="name">filtering by name</option>
              <option value="stars">sorting by stars</option>
              <option value="price">sorting by price</option>
              <option value="distance">sorting by distance</option>
            </select>
            </label>&nbsp; &nbsp;  
            <input type="submit" value="query" />
          </form>
          <p/>

          {/* <div>
            <p/>Source From {this.state.url}<p/>
          </div> */}
          

          {/* <JSONTree data={obj[0].name} /> */}
          {/* <JSONTree data={obj[0]} />
          <JSONTree data={datas[0]} /> */}
          {str}
          {/* <Test/> */}
          {/* <Nav data={this.state.value}/> */}
          {/* <UserGist source="https://api.github.com/users/octocat/gists" /> */}
          {/* <img src={obj[0].image}  /> */}
          {/* <img src="https://media.relaischateaux.com/public/hash/3c696c1e5d75a3f15b800a849385a205e30e4011"  /> */}
          
        </body>
        
      </div>
    );
  }
}

export default App;
