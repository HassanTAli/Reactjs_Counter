import React from "react";

class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            id: 1,
            jobTitleName: "Developer",
            firstName: "Ahmed",
            lastName: "Ali",
            preferredFullName: "Ahmed Ali",
            employeeCode: "E1",
            region: "CA",
            phoneNumber: "408-1234567",
            emailAddress: "ahmed.ali@gmail.com"
        }
    }


    render() {
        return (
            <React.Fragment>
                <h1> id : {this.state.id}</h1>
                <h1> Job Title Name : {this.state.jobTitleName}</h1>
                <h1> First Name : {this.state.firstName}</h1>
                <h1> Last Name : {this.state.lastName}</h1>
                <h1> Preferred Fullname : {this.state.preferredFullName}</h1>
                <h1> Employee Code : {this.state.employeeCode}</h1>
                <h1> Region : {this.state.region}</h1>
                <h1> Phonenumber : {this.state.phoneNumber}</h1>
                <h1> E-mail : {this.state.emailAddress}</h1>
            </React.Fragment>
        )
    }
}

export default Display