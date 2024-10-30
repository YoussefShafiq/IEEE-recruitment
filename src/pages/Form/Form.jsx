import React, { useState } from 'react'
import logo from '../../assets/images/primary logo.svg'
import axios from 'axios'
import { useFormik } from 'formik'


export default function Form() {

    const [APIerror, setAPIerror] = useState(null)
    const [successMSG, setsuccessMSG] = useState(null)
    const [submit, setSubmit] = useState(false)

    async function register(values) {
        setSubmit(true)
        try {
            let { data } = await axios.post('https://ieee-form.vercel.app/part/register', values)
            setSubmit(false)
            setAPIerror('');
            setsuccessMSG(data.message)
            console.log(data);


        } catch (error) {
            setSubmit(false)
            setsuccessMSG('')
            setAPIerror(error.response.data.message);
            console.log(error.response.data.message);
        }

    }

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
    })

    return <>
        <div className="bg-pattern min-h-screen ">
            <div className="container h-screen m-auto p-1 flex flex-col lg:flex-row justify-center items-center ">
                <div className='flex flex-col items-center justify-center mb-3 ' >
                    <img src={logo} className='w-14' alt="IEEE - Helwan logo" />
                    <h1 className="font-uni-sans-heavy text-primary text-3xl text-center">
                        IEEE - Helwan Recruitment
                    </h1>
                </div>

                <form onSubmit={formik.handleSubmit} className='bg-white p-5 rounded-xl shadow-xl w-4/5 my-5 lg:w-3/4' >
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                            <input type="text" id="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="shafek" required />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                            <input type="tel" id="phoneNumber" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneNumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="01234567890" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                        <input type="email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="shafek@gmail.com" required />
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                        <div>
                            <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900 ">University</label>
                            <input type="text" id="university" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.university} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="helwan" required />
                        </div>
                        <div>
                            <label htmlFor="major" className="block mb-2 text-sm font-medium text-gray-900 ">Major</label>
                            <input type="text" id="major" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.major} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="IS" required />
                        </div>
                        <div>
                            <label htmlFor="academicYear" className="block mb-2 text-sm font-medium text-gray-900 ">Academic year</label>
                            <select id="academicYear" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.academicYear} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="preference" className="block mb-2 text-sm font-medium text-gray-900 ">Preference</label>
                        <select id="preference" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.preference} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
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

                    <button type="submit" disabled={submit} className={` mt-5 text-white onBlur={formik.handleBlur} onChange={formik.handleChange} bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all`}>Submit</button>
                </form>

            </div>
        </div>
    </>
}
