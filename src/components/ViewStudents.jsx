import React, { useState } from 'react'
import StudentNavBar from './StudentNavBar'

const ViewStudents = () => {
    const [data,setData] = new useState(
        [
            {"name":"Sam","rollno":11,"admno":102,"college":"FISAT"},
            {"name":"Ram","rollno":12,"admno":103,"college":"FISAT"},
            {"name":"Ann","rollno":13,"admno":104,"college":"FISAT"},
            {"name":"Anna","rollno":14,"admno":105,"college":"FISAT"},
            {"name":"Peter","rollno":15,"admno":106,"college":"FISAT"}

        ]
    )
  return (

    <div>
        <StudentNavBar/>
        <div className="container">
            <h2>Enrolled students</h2>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Rollno</th>
      <th scope="col">Admno</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
        {
            data.map(

                (value,index)=>{
                    return <tr>
                    <td>{value.name}</td>
                    <td>{value.rollno}</td>
                    <td>{value.admno}</td>
                    <td>{value.college}</td>

                  </tr>
                }

            )
        }
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStudents