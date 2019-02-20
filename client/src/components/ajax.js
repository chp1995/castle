import React, { Component ,} from 'react';
import '../App.css'
import ReactDom from 'react-dom';
import axios from 'axios';

import SelectWay from './select.js';

class Nav extends React.Component{
  constructor(props){ //构造函数
    super(props);
    this.state = {
      data : '',
      mytext : '',
      url : `http://127.0.0.1:8081/`
    }
  }
  
  getData(){ //请求数据函数
    var url =`http://127.0.0.1:8081/`
    if (this.props.data!=null) {
      url=url+`listhotels`
      this.state.url=this.state.url+this.props.data
    }
    fetch(url,{
      method: 'GET'
    }).then(res => res.text()).then(
      data => {
        this.setState({mytext:data})
      })
    }
    
  componentWillMount(){
    this.getData();
  }
  
  render(){
    return(
    <div>
      <button type="button" onClick={() => this.setState({data: 'X'})}>评估报表</button>
      <p>{this.props.data}</p>  {/* 从Parent传来的值 */}
      {this.state.url}
      <div>{this.state.mytext}</div>
    </div>
    );
  }

}
export default Nav;
