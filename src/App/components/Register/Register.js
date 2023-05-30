import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(true);
  const [notify, setNotify] = useState(false);
  const [notification, setNotification] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  function inputData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function loginInputData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleNotify() {
    setNotification(true);
    setTimeout(() => {
      setNotify(false);
      setNotification(false);
      navigate("/appointment");
    }, 1000);
  }

  function handleAlert() {
    setAlert(true);
    setTimeout(() => {
      navigate("/appointment");
    }, 2000);
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("patients", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", `${data.jwt}`);
        localStorage.setItem("patient_id", `${data.patient.id}`);
        handleAlert();
      });
  }

  function handleSignup(e) {
    console.log(formData);
    setNotify(true);
    e.preventDefault();
    fetch("patients", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        handleNotify();
        console.log(data);
      });
  }

  return (
    <div className="p-1 h-full w-full">
      
      <div className="items-center mt-14 p-5">
        <h1 className="text-center mt-2 text-blue-600 text-2xl m-2">
          Welcome Patient, we are here to care for your health{" "}
        </h1>
        {notify ? (
          <div className=" sm:p-5 flex justify-center rounded-2xl  sm:gap-4 shadow-2xl h-full w-full flex bg-blue-600 text-white">
            <p className="border border-2 rounded-full h-10 w-10 animate-spin border-white"></p>
            {notification ? (
              <p>sign up sucessfull</p>
            ) : (
              <span>Processing..........</span>
            )}
          </div>
        ) : null}
        {modal ? (
          <form
            onSubmit={handleSignup}
            className=" bg-white sm:p-5 rounded-2xl sm:ml-32 sm:grid sm:grid-cols-2 sm:gap-4 shadow-2xl sm:w-3/4 h-full w-full sm:h-3/4">
            <div className="flex flex-col sm:flex-row items-center sm:m-2 justify-between ">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="first_name">
                First Name:
              </label>
              <input
                autoComplete="off"
                className="sm:h-12 text-center m-2 w-3/5 rounded-md border border-2 border-blue-600"
                id="first_name"
                placeholder="John"
                onChange={(e) => inputData(e)}
                name="first_name"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center m-2 justify-between">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="last_name">
                Last Name
              </label>
              <input
                className="sm:h-12 m-2 text-center w-3/5 rounded-md border border-2 border-blue-600"
                id="last_name"
                type="text"
                placeholder="Doe"
                onChange={(e) => inputData(e)}
                name="last_name"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row  items-center m-2 justify-between ">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="email">
                Email:
              </label>
              <input
                className="sm:h-12 text-center m-2 w-3/5 rounded-md border border-2 border-blue-600"
                id="email"
                placeholder="example.@gmail.com"
                onChange={(e) => inputData(e)}
                name="email"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row  items-center m-2 justify-between">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                placeholder="select Gender"
                onChange={(e) => inputData(e)}
                className="sm:h-12 text-center m-2 w-3/5 rounded-md border border-2 border-blue-600">
                <option></option>
                <option>male</option>
                <option>female</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row  items-center m-2 justify-between">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="date_of_birth">
                Date of birth
              </label>
              <input
                className="sm:h-12 text-center m-2 w-3/5 rounded-md border border-2 border-blue-600"
                id="date_of_birth"
                onChange={(e) => inputData(e)}
                name="date_of_birth"
                placeholder="Select date of birth"
                type="date"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row  items-center m-4 justify-between">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="address">
                Address
              </label>
              <input
                className="sm:h-12 m-2 text-center w-3/5 rounded-md border border-2 border-blue-600"
                id="address"
                placeholder="Nairobi Kenya"
                onChange={(e) => inputData(e)}
                name="address"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row  items-center m-4 justify-between">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="contact_number">
                Contact Number
              </label>
              <input
                className="sm:h-12 text-center m-2 w-3/5 rounded-md border border-2 border-blue-600"
                id="contact_number"
                onChange={(e) => inputData(e)}
                name="contact_number"
                placeholder="0726..... 10 characters"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row  items-center m-4 justify-between">
              <label
                className="sm:text-2xl text-blue-700 font-extrabold"
                htmlFor="password">
                Password
              </label>
              <input
                className="sm:h-12 text-center m-2 w-3/5 rounded-md border border-2 border-blue-600"
                id="password"
                placeholder="***"
                onChange={(e) => inputData(e)}
                name="password"
                type="password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex p-2 rounded-md text-blue-600 w-full hover:bg-blue-600 hover:text-white m-auto justify-center items-center outline outline-1">
                <span>SignUp</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate(-1 + 1)}
                className="flex p-2 w-full rounded-md text-blue-600 hover:bg-blue-600 hover:text-white m-auto mt-2 justify-center items-center outline outline-1">
                <span>Back</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        ) : null}
        {modal2 ? (
          <div className="p-5 bg-white border border-separate rounded-2xl sm:ml-32 sm:grid sm:grid-cols-2 shadow-2xl sm:w-3/4 h-3/4">
            <form
              onSubmit={handleLogin}
              className="h-full flex border border-1 border-blue-600 rounded-md items-center justify-center flex-col">
              <h1 className="text-center font-semibold">Login Here</h1>
              {alert ? (
                <h1 className="text-center w-full m-auto bg-blue-500 text-white">
                  login successfull
                </h1>
              ) : null}
              <div className="flex flex-col items-center m-1 justify-center ">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => loginInputData(e)}
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
                  className="h-10 text-center rounded-md border border-1 border-blue-600"
                  onChange={(e) => loginInputData(e)}
                  id="password"
                  name="password"
                  placeholder="********"
                  type={show ? "password" : "text"}
                />
              </div>
              <div className="flex flex-row items-center m-1 mb-3">
                <input
                  className="h-10 m-2 rounded-md border border-1 border-blue-600"
                  id="first_name"
                  type="checkbox"
                  onChange={() => setShow((show) => !show)}
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXm5eADVr5mE5_x6F2kwPgtFyGmvZ0-lRAHA&usqp=CAU"
              />
              <button
                onClick={() => navigate(-1 + 1)}
                className="flex p-2 m-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white justify-center items-center outline outline-1">
                <span>Back</span>
              </button>
            </div>
          </div>
        ) : null}
        <div className="text-center m-4">
          To Join Us,, start by creating an account ..
        </div>
        <button
          onClick={() => {
            setModal(true);
            setModal2(false);
          }}
          className="flex p-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white m-auto justify-center items-center outline outline-1">
          <span>Create Account</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </span>
        </button>
        <br></br>
        <p className="text-center text-gray-800 m-2">
          Already have an account{" "}
        </p>
        <button
          onClick={() => {
            setModal2(true);
            setModal(false);
          }}
          className="flex p-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white m-auto justify-center items-center outline outline-1">
          <span>LogIn</span>
        </button>
        <br></br>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="flex p-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white m-auto justify-center items-center outline outline-1">
          <span>Home</span>
          <span className=""></span>
        </button>
      </div>
      
    </div>
  );
}

export default Register;

