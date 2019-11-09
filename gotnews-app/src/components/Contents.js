import React, { Component } from 'react';

class Contents extends Component{
    constructor(props){
        super(props)

    }
    getContents(){
        return this.props.news.map(element=>
        <div>
            <div className = 'news-title'>
            <p><a href={element.url}>{element.title}</a></p>
            </div>
            <div className='image'><img src={element.urlToImage}/> </div>
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