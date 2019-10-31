import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                <input
                onChange = {this.handleSearch}
                type = 'text'
                placeholder = 'Search'
                />
                <input
                type = 'submit'
                value = 'Submit'
                />
                </form>
            </div>
        )
    }
}

export default Search;