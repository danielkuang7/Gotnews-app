import React, { Component } from 'react';

class Contents extends Component{
    constructor(props){
        super(props)

    }
    getContents(){
        return this.props.news.map(element=>
        <div>
        </div>)
    }

    render (){
        return(
            <div>
            </div>
        )
    }
}

export default Contents;