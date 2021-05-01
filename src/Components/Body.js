import React from "react";
import Search from "./Search";
import Axios from "axios";

class Body extends React.Component {
  state = {
    employeeDB: [],
    employeeList: [],
    sortOrder: "asc"
  };

  componentDidMount = () => {
    Axios.get("https://randomuser.me/api/?results=50&nat=us").then(
      (employees) => {
        console.log(employees);
        let empRecords = employees.data.results;
        let list = [];
        for (let i = 0; i < empRecords.length; i++) {
          list.push({
            firstname: empRecords[i].name.first,
            lastname: empRecords[i].name.last,
            email: empRecords[i].email,
            cell: empRecords[i].cell,
            gender: empRecords[i].gender,
            age: empRecords[i].dob.age,
          });
        }
        this.setState({
          employeeDB: list,
          employeeList: list,
        });
      }
    );
  };

  searchEmp = (name) => {
    console.log(name);
    let employSearch = [];
    for (let i = 0; i < this.state.employeeList.length - 1; i++) {
      console.log(
        this.state.employeeList[i].firstname.toLowerCase(),
        this.state.employeeList[i].lastname.toLowerCase()
      );
      if (
        this.state.employeeList[i].firstname
          .toLowerCase()
          .search(name.toLowerCase()) > -1 ||
        this.state.employeeList[i].lastname
          .toLowerCase()
          .search(name.toLowerCase()) > -1
      ) {
        employSearch.push(this.state.employeeList[i]);
      }
    }
    this.setState({
      employeeList: employSearch,
    });
  };

  sortAge = () => {
    let employeeAge = this.state.employeeList;
    let sortOrder = ""
    if(this.state.sortOrder === "asc"){
    for (let i = 0; i < employeeAge.length - 2; i++) {
      for (let j = 0; j < employeeAge.length - 1; j++) {
        if (employeeAge[i].age > employeeAge[j].age) {
          let temp = employeeAge[i];
          employeeAge[i] = employeeAge[j];
          employeeAge[j] = temp;
        }
      }
    }
    sortOrder = "desc"
}else{ 
    for (let i = 0; i < employeeAge.length - 2; i++) {
        for (let j = 0; j < employeeAge.length - 1; j++) {
          if (employeeAge[i].age < employeeAge[j].age) {
            let temp = employeeAge[i];
            employeeAge[i] = employeeAge[j];
            employeeAge[j] = temp;
          }
        }
      }
      sortOrder = "asc"

}
    console.log(employeeAge);
    this.setState({
        employeeList:employeeAge,
        sortOrder:sortOrder
    })
  };

  render() {
    return (
      <div>
        <Search searchEmp={this.searchEmp} />
        <button
          className="btn btn-outline-secondary m-2 p-2"
          onClick={this.sortAge}
          type="button"
          id="button-addon2"
        >
          Sort Employee by Age
        </button>
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
            {this.state.employeeList.map((record, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{record.firstname}</th>
                  <td>{record.lastname}</td>
                  <td>{record.email}</td>
                  <td>{record.cell}</td>
                  <td>{record.gender}</td>
                  <td>{record.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Body;
