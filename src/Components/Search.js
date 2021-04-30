import React from "react";

class Search extends React.Component{
    state = {
        searchItem: '',
        
    };

    getsearchItem = (event) => {
        var usertext = event.target.value
        this.setState({
            searchItem : usertext
        });
    }
    render(){
        return (<div>
            <div className="input-group mb-3">
        <input type="text" value={this.state.searchItem} onChange={this.getsearchItem} placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" onClick ={() => {this.props.searchEmp(this.state.searchItem)}}type="button" id="button-addon2">Search Employee by First and Last Name</button>
        
        <button className="btn btn-outline-secondary" onClick ={() => {this.props.searchEmp(this.state.searchItem)}}type="button" id="button-addon2">Search Employee by Age</button>

      </div></div>
      
      )
    }
}

export default Search;


