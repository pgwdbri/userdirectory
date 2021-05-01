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
        return (<div className = "ml-5">
            <div className="ml-3 input-group mb-3">
        <input type="text" className="ml-3 input-group mb-3" value={this.state.searchItem} onChange={this.getsearchItem} placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary ml-3 input-group mb-3" onClick ={() => {this.props.searchEmp(this.state.searchItem)}}type="button" id="button-addon2">Search Employee by First and Last Name</button>
        

      </div></div>
      
      )
    }
}

export default Search;


