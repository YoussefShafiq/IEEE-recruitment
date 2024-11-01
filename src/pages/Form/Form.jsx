import React, { useState } from 'react'
import logo from '../../assets/images/primary logo.svg'
import axios from 'axios'
import { useFormik } from 'formik'
import { useCountdown } from '../../contexts/CountdownContext'
import closedimg from '../../assets/images/closed.png'
import { AlignCenter, AlignCenterHorizontal, LoaderCircle } from 'lucide-react'
import { ThreeDots } from 'react-loader-spinner'
import { object, string } from 'yup'


export default function Form() {

    const [APIerror, setAPIerror] = useState(null)
    const [successMSG, setsuccessMSG] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [loading, setloading] = useState(false)
    const { active, end } = useCountdown();

    async function register(values) {
        setSubmit(true)
        try {
            setloading(true)
            setAPIerror('');
            setsuccessMSG('')
            let { data } = await axios.post('https://ieee-form.vercel.app/part/register', values)
            setloading(false)
            setSubmit(false)
            setAPIerror('');
            setsuccessMSG(data.message)
            console.log(data);


        } catch (error) {

            setloading(false)
            setSubmit(false)
            setsuccessMSG('')
            setAPIerror(error.response.data.message);
            console.log(error.response.data.message);
        }

    }

    let validationSchema = object({
        name: string()
            .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces")
            .trim()
            .min(3, "Full name must be at least 3 characters long")
            .test(
                "is-full-name",
                "Full name must include at least three words",
                (value) => value && value.trim().split(/\s+/).length >= 3
            )
            .required("Full name is required"),
        email: string().email('invalid mail').required('email is required'),
        phoneNumber: string().matches(/^(\+2|002)?01[0125][0-9]{8}$/, 'need Egyptian phone number').required('phone is required'),
        university: string().min(3, 'min length is 3').max(20, 'max length is 20').required('university is required'),
        major: string().min(2, 'min length is 2').max(30, 'max length is 30').required('major is required'),
        academicYear: string().required('academic year is required'),
        preference: string().required('preference is required'),
    })

    let formik = useFormik({
        initialValues: {
            "name": "",
            "email": "",
            "phoneNumber": "",
            "university": "",
            "major": "",
            "academicYear": "",
            "preference": ""
        }, onSubmit: register
        , validationSchema
    })

    return <>

        <div className="container m-auto p-1 flex flex-col lg:flex-row justify-center items-center min-h-[80vh] ">
            <div className='flex flex-col items-center justify-center m-2 ' >
                <img src={logo} className='w-14' alt="IEEE - Helwan logo" />
                <h1 className="font-uni-sans-heavy text-primary text-3xl text-center">
                    IEEE - Helwan Recruitment
                </h1>
            </div>

            {active ? <form onSubmit={formik.handleSubmit} className='bg-white p-5 rounded-xl shadow-xl w-11/12 my-5 lg:w-3/4 overflow-y-scroll overscroll-auto' style={{ scrollbarWidth: 'none' }}  >
                {end ?
                    <>
                        <div className="h-full flex items-center justify-center">
                            <img src={closedimg} className='w-full' alt="form closed" />
                        </div>

                    </> : <>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Full name</label>
                                <input type="text" id="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Full name" />
                                {formik.errors.name && formik.touched.name &&
                                    <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                        {formik.errors.name}
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                                <input type="tel" id="phoneNumber" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneNumber} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="011********" />
                                {formik.errors.phoneNumber && formik.touched.phoneNumber &&
                                    <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                        {formik.errors.phoneNumber}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <input type="email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@company.com" />
                            {formik.errors.email && formik.touched.email &&
                                <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                    {formik.errors.email}
                                </div>
                            }
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-3">
                            <div>
                                <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900 ">University</label>
                                <input type="text" id="university" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.university} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="University" />
                                {formik.errors.university && formik.touched.university &&
                                    <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                        {formik.errors.university}
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="major" className="block mb-2 text-sm font-medium text-gray-900 ">Major</label>
                                <input type="text" id="major" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.major} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Major" />
                                {formik.errors.major && formik.touched.major &&
                                    <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                        {formik.errors.major}
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="academicYear" className="block mb-2 text-sm font-medium text-gray-900 ">Academic year</label>
                                <select id="academicYear" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.academicYear} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {formik.errors.academicYear && formik.touched.academicYear &&
                                    <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                        {formik.errors.academicYear}
                                    </div>
                                }
                            </div>

                        </div>
                        <div>
                            <label htmlFor="preference" className="block mb-2 text-sm font-medium text-gray-900 ">Preference</label>
                            <select id="preference" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.preference} className="focus:outline-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                                <option value="">Select an option</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile Application">Mobile Application</option>
                                <option value="Analog Integrated Circuits">Analog Integrated Circuits</option>
                                <option value="Digital Integrated Circuits">Digital Integrated Circuits</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Embedded Systems">Embedded Systems</option>
                                <option value="Machine learning">Machine learning</option>
                                <option value="Distribution">Distribution</option>
                                <option value="Industrial Automation">Industrial Automation</option>
                                <option value="Industrial Advanced">Industrial Advanced</option>
                                <option value="Renewable Energy">Renewable Energy</option>
                                <option value="Control">Control</option>
                                <option value="Mechanical">Mechanical</option>
                            </select>
                            {formik.errors.preference && formik.touched.preference &&
                                <div className="mt-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                    {formik.errors.preference}
                                </div>
                            }
                        </div>

                        {APIerror &&
                            <div className="px-4 py-3 my-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                {APIerror}
                            </div>
                        }
                        {successMSG &&
                            <div className="px-4 py-3 my-2 mb-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
                                {successMSG}
                            </div>
                        }

                        <div className="mt-5 flex justify-start items-center space-x-3">
                            <button
                                type="button"
                                onClick={() => {
                                    formik.resetForm()
                                    setAPIerror('')
                                    setsuccessMSG('')
                                }}
                                className='text-primary ring-primary ring-2 ring-inset px-5 py-2.5 transition-all text-sm rounded-lg'
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={submit} className={` text-white onBlur={formik.handleBlur} onChange={formik.handleChange} bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 transition-all`}> {loading ? (
                                <ThreeDots
                                    visible={true}
                                    height="20"
                                    width="43"
                                    color="white"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="w-fit m-auto"
                                />
                            ) : "submit"} </button>

                        </div>

                    </>}

            </form> : <></>}

        </div>
    </>
}
