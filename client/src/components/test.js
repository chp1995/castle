import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
// export default class FetchJSONP extends Component {
export default class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            list2:[]
        }
    }
    getDataF=()=>{
        fetchJsonp('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20')
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            this.setState({
                list2:json.result
            })
        })
        .catch((ex)=>{
            console.log('parsing failed',ex)
        })
    }
    render() {
        return (
        <div>
            <button onClick={this.getDataF}>fetchJSONP获取数据</button>
            <ul>
                {
                    this.state.list2.map((value,key)=>{
                        return (<li key={key}>{value.aid}</li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
// export default Test;