import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorLogin() {
  const [doctorData, setDoctorData] = useState({});
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [notify, setNotify] = useState(false);
  // const [errors,setErrors] = useState([]);
  function handleNotification() {
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
      navigate("/appointment");
    }, 2000);
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("jwt", `${data.jwt}`);
        localStorage.setItem("doctor_id", `${data.doctor.id}`);
        handleNotification();
      });
  }
  return (
    <div className="w-full h-full flex flex-col  items-center">
      
      <br></br>
      <br></br>
      <br></br>
      <div className="p-5 mt-0 sm:mt-4 bg-white border border-separate rounded-2xl m-4 sm:grid sm:grid-cols-2 shadow-2xl sm:w-3/4 h-3/4">
        <form
          onSubmit={handleLogin}
          className="h-full flex border border-1 border-blue-600 rounded-md items-center justify-center flex-col">
          <h1 className="text-center font-semibold">Welcome Doctor</h1>
          {notify ? (
            <h1 className="text-center w-full m-2 rounded-md bg-blue-500 text-white">
              login successfull
            </h1>
          ) : null}
          <div className="flex flex-col items-center m-1 justify-center ">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) =>
                setDoctorData({
                  ...doctorData,
                  [e.target.name]: e.target.value,
                })
              }
              className="h-10 m-2 text-center rounded-md border border-1 border-blue-600"
              id="email"
              type="email"
              name="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div className="flex flex-col items-center m-1 mb-3 justify-center">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) =>
                setDoctorData({
                  ...doctorData,
                  [e.target.name]: e.target.value,
                })
              }
              className="h-10 text-center rounded-md border border-1 border-blue-600"
              id="password"
              name="password"
              placeholder="********"
              type={show ? "password" : "text"}
            />
          </div>
          <div className="flex flex-row items-center m-1 mb-3">
            <input
              onChange={() => setShow((show) => !show)}
              className="h-10 m-2 rounded-md border border-1 border-blue-600"
              id="first_name"
              type="checkbox"
            />
            <label htmlFor="first_name">Show Password</label>
          </div>

          <div>
            <button
              type="submit"
              className="flex p-2 mb-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white m-auto justify-center items-center outline outline-1">
              <span>LogIn</span>
            </button>
          </div>
        </form>

        <div className="sm:flex flex-col sm:justify-center sm:items-center w-full h-full">
          <img
            className="hidden sm:block rounded-md mb-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXm5eADVr5mE5_x6F2kwPgtFyGmvZ0-lRAHA&usqp=CAU" alt="image1"
          />
          <button
            onClick={() => navigate("/")}
            className="flex p-2 m-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white justify-center items-center outline outline-1">
            <span>Back</span>
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default DoctorLogin;
