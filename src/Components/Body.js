import React from "react";
import Search from "./Search"
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
                    gender: empRecords[i].gender,
                    age: empRecords[i].dob.age
                })
            }
            this.setState({
                employeeDB: list,
                employeeList: list
            })
        })
    }

    searchEmp = (name) => {
        console.log(name)
        let employSearch = [] 
        for (let i = 0; i<this.state.employeeList.length - 1; i++){
            console.log(this.state.employeeList[i].firstname.toLowerCase(),this.state.employeeList[i].lastname.toLowerCase())
            if (this.state.employeeList[i].firstname.toLowerCase().search(name.toLowerCase()) > -1|| this.state.employeeList[i].lastname.toLowerCase().search(name.toLowerCase())  > -1){
                employSearch.push(this.state.employeeList[i])
            }
            
        }
        this.setState({
            employeeList : employSearch
        })
    }

    
     

    render(){
        return(<div>
            <Search searchEmp={this.searchEmp} />
            <table className="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Cell</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
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
            <td>{record.age}</td>
          </tr>)
      })}
  </tbody>
</table>

        </div>)
    }
}

export default Body;
