import React from "react";

class Search extends React.Component{
    state = {
        searchItem: ""
    }
    getsearchItem = (event) =>{

        var usertext = event.target.value
        this.setState({
            searchItem : usertext
        })
    }
    render(){
        return (<div>
            <div className="input-group mb-3">
        <input type="text" className="form-control" value={this.state.searchItem} onClick={this.getsearchItem} placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" onClick ={() => {this.props.searchEmp(this.state.searchItem)}}type="button" id="button-addon2">Search Employee by name</button>
      </div></div>)
    }
}

export default Search;
