import React from 'react'
import { useNavigate } from "react-router-dom";




function ServiceHome () {
    const navigate = useNavigate();
    return (
       <>
      <div className="h-full w-full">
       
        
        <div>
          <div className="z-0 grid sm:grid-cols-2 h-screen w-full bg-gradient-to-tl from-white to-blue-100 items-center">
            <div className="m-auto p-3 p-auto flex flex-col items-center">
              <h1 className="font-black text-5xl text-blue-600">
                We care about your health
              </h1>

              <p className="text-gray-500 m-3">
                Check your health with our professional doctors, <br></br>login
                and book an appointment
              </p>
              <button
                onClick={() => navigate("/patient_signup")}
                className="bg-blue-600 text-white rounded-md p-2 px-4">
                Get Started
              </button>
            </div>
            <div className="m-auto">
              <img
                className="rounded-xl"
                src="https://online.visual-paradigm.com/repository/images/6748adf2-f238-4d5a-8fe4-6939312c4408/healthcare-illustration-design/hospital-illustration.png"
              />
            </div>
          </div>
          <div className="z-0  w-full bg-white">
            <h1 className="text-blue-600 text-center p-5">OUR SERVICES</h1>
            <p className="font-extrabold sm:text-xl text-center">
              Below are some of services we offer
            </p>
            <div className="w-full grid sm:p-3 sm:grid-cols-1 gap-4">
              <div className="m-2 sm:h-72 bg-blue-50 drop-shadow-md">
                <div className="sm:flex sm:flex-col w-full h-full">
                  <h1 className="text-center mt-2">MEDICAL SERVICES</h1>
                  <div className="sm:flex sm:flex-row">
                    <div className="m-2 sm:w-2/5 items-center justify-center sm:flex">
                      <img
                        className="sm:h-52 sm:w-48 rounded-md"
                        src="https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-55853.jpg?w=740&t=st=1676574109~exp=1676574709~hmac=3d44e7bb640a1ff2d8d0cdb2c8e579b498b18d9cf387133dae44b17897ac3c2e"
                      />
                    </div>
                    <div className="flex flex-col m-2 sm:w-3/5">
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Consultation | Examination | Treatment</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Medical Laboratory services</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Anc clinic</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Family Planning</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>minor surgery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-2 sm:h-72 bg-blue-50 drop-shadow-md">
                <div className="sm:flex sm:flex-col w-full h-full">
                  <h1 className="text-center mt-2">EYE CARE SERVICES</h1>
                  <div className="sm:flex sm:flex-row">
                    <div className="m-2 sm:w-2/5 items-center justify-center sm:flex">
                      <img
                        className="sm:h-52 sm:w-48 rounded-md"
                        src="https://img.freepik.com/free-vector/oculist-concept-idea-eye-exam-treatment-eyesight-diagnosis-laser-correction-oculist-uniform-check-vision-vector-illustration-cartoon-style_613284-2423.jpg?w=740&t=st=1676575963~exp=1676576563~hmac=56c1ca98837633b7f9824d6aa6f65138e6d562c0a267b335eb4cf17957b1d11d"
                      />
                    </div>
                    <div className="flex flex-col m-2 sm:w-3/5">
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Comprehensive eye examination</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Diabetic Assessment</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Specialty Contract Lenses</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Branded Frames Lenses</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Low Vision Service devices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-2 sm:h-72 bg-blue-50 drop-shadow-md">
                <div className="sm:flex sm:flex-col w-full h-full">
                  <h1 className="text-center mt-2">ENT SERVICES</h1>
                  <div className="sm:flex sm:flex-row">
                    <div className="m-2 sm:w-2/5 items-center justify-center sm:flex">
                      <img
                        className="sm:h-52 sm:w-48 rounded-md"
                        src="https://img.freepik.com/free-vector/tiny-doctors-treating-examining-patients-ear-using-otology-tool-carrying-bottles-blisters-with-pills-vector-illustration-otolaryngology-health-care-hearing-loss-concept_74855-13256.jpg?w=740&t=st=1676576203~exp=1676576803~hmac=12c2a9d13b81f6a54a588330e0eb836cd2fa834c0c31209010b9e84c5bcfbdd6"
                      />
                    </div>
                    <div className="flex flex-col m-2 sm:w-3/5">
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Ear Syranging | Wax Removal</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Fb Removal</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Earring Assessment | Screening</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>Throat Conditions Management</span>
                      </div>
                      <div className="flex  items-center py-auto">
                        <svg
                          class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>
                          Snoring | SLeep APneas Management | Pedriastic ENT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
    
          </div>
        </div>
    


      </div>
       
       </>

    )
}

export default ServiceHome;