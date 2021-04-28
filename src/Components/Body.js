import React from "react";

import Axios from "axios";

class Body extends React.Component{
    state = {
        employeeDB: [],
        employeeList: []
    }
    componentDidMount =() =>{
        Axios.get("https://randomuser.me/api/?results=50&nat=us")
        .then(employees => {
            console.log(employees)
            let empRecords = employees.data.results;
            let list = []
            for(let i=0;i<empRecords.length;i++){
                list.push({
                    firstname: empRecords[i].name.first,
                    lastname: empRecords[i].name.last,
                    email: empRecords[i].email,
                    cell: empRecords[i].cell, 
                    gender: empRecords[i].gender
                })
            }
            this.setState({
                employeeDB: list,
                employeeList: list
            })
        })
    }
    render(){
        return(<div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">firstname</th>
      <th scope="col">lastname</th>
      <th scope="col">email</th>
      <th scope="col">cell</th>
      <th scope="col">gender</th>
    </tr>
  </thead>
  <tbody>
      {this.state.employeeList.map((record, key)=>{
          return (<tr key={key}>
            <th scope="row">{record.firstname}</th>
            <td>{record.lastname}</td>
            <td>{record.email}</td>
            <td>{record.cell}</td>
            <td>{record.gender}</td>
          </tr>)
      })}
  </tbody>
</table>

        </div>)
    }
}

export default Body;
