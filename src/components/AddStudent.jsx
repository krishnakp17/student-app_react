import React, { useState } from 'react'
import StudentNavBar from './StudentNavBar'

const AddStudent = () => {
    const [input,setInput]=new useState({"name":"","rollno":"","admno":"","clg":""})
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        if (!input.name ||!input.rollno||!input.admno||!input.clg) {
            alert("Fill all the fields")
            
        } else {
            alert("Success")
        }
        setInput(
            {"name":"","rollno":"","admno":"","clg":""}
        )
    }
  return (
    <div>
        <StudentNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Roll no</label>
                        <input type="text" className="form-control" name='rollno' value={input.rollno} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Admno</label>
                        <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name='clg' value={input.clg} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </div>
                </div>


                </div>
            </div>
        </div>



    </div>
  )
}

export default AddStudent