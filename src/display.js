import React, { useState } from "react";

const Display = () => {

    const [list] = useState({
        id: 1,
        jobTitleName: "Developer",
        firstName: "Ahmed",
        lastName: "Ali",
        preferredFullName: "Ahmed Ali",
        employeeCode: "E1",
        region: "CA",
        phoneNumber: "408-1234567",
        emailAddress: "ahmed.ali@gmail.com"
    })


    return (
        <React.Fragment>
            <h2>ID : {list.id}</h2>
            <h2>Job Title Name : {list.jobTitleName}</h2>
            <h2>First Name : {list.firstName}</h2>
            <h2>Last Name : {list.lastName}</h2>
            <h2>Preferred Fullname : {list.preferredFullName}</h2>
            <h2>Employee Code : {list.employeeCode}</h2>
            <h2>Region : {list.region}</h2>
            <h2>Phone Number : {list.phoneNumber}</h2>
            <h2>E-mail : {list.emailAddress}</h2>
        </React.Fragment>
    )

}
// class Display extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             id: 1,
//             jobTitleName: "Developer",
//             firstName: "Ahmed",
//             lastName: "Ali",
//             preferredFullName: "Ahmed Ali",
//             employeeCode: "E1",
//             region: "CA",
//             phoneNumber: "408-1234567",
//             emailAddress: "ahmed.ali@gmail.com"
//         }
//     }


//     render() {
//         return (
//             <React.Fragment>
//                 <h1> id : {this.state.id}</h1>
//                 <h1> Job Title Name : {this.state.jobTitleName}</h1>
//                 <h1> First Name : {this.state.firstName}</h1>
//                 <h1> Last Name : {this.state.lastName}</h1>
//                 <h1> Preferred Fullname : {this.state.preferredFullName}</h1>
//                 <h1> Employee Code : {this.state.employeeCode}</h1>
//                 <h1> Region : {this.state.region}</h1>
//                 <h1> Phonenumber : {this.state.phoneNumber}</h1>
//                 <h1> E-mail : {this.state.emailAddress}</h1>
//             </React.Fragment>
//         )
//     }
// }

export default Display