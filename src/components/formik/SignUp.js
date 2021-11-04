import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Input from '../common/Input'

import './SignUp.scss'
import Radioo from '../common/Radioo'

// const saveData = {
//     name: 'Hossein',
//     phone: '09136265727',
//     email: 'hosseinghiasi5727@gmail.com',
//     password: '12349111',
//     passwordConfir: '12349111',
//     gender: '0',
// }

const initialValues = {
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConfir: '',
    gender: ''
}

const radioOptions = [
    { id: '0', name: 'gender', value: '0', labelName: 'meale' },
    { id: '1', name: 'gender', value: '1', labelName: 'femeale' },
]

const textOPtions = [
    { id: 1, labelName: 'Name', name: 'name' },
    { id: 2, labelName: 'Phone', name: 'phone' },
    { id: 3, labelName: 'Email', name: 'email' },
    { id: 4, labelName: 'Password', name: 'password', type: 'password' },
    { id: 5, labelName: 'Password Confirmation', name: 'passwordConfir', type: 'password' },
]

function SignUp() {

    const [formData, setFormData] = useState(null)
    const [isVisible, setIsVisible] = useState(true)
    const passRef = useRef()

    const onSubmit = (values) => {
        console.log(values);
    }


    const phoneRegExp = /^[0-9]{11}$/
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is requierd'),
        phone: Yup.string().required('Phone Number is required').matches(phoneRegExp, 'Phone number is not valid'),
        email: Yup.string().email('Invalid email format').required('Email is requierd'),
        password: Yup.string().required('Password is required').min(6, 'Characters must be bigger of 6'),
        passwordConfir: Yup.string().required('Password Confirmation is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        gender: Yup.string().required('Gender is required')
    })

    const formik = useFormik({
        initialValues: formData || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true
    })

    useEffect(() => {
        axios.get("http://localhost:3004/contacts/1")
            .then(res => setFormData(res.data))
    }, [])


    return (
        <div className="signUp">
            <form onSubmit={formik.handleSubmit}>

                {textOPtions.map(({ id, labelName, name, type }) => (
                    <div key={id}>
                        <Input
                            formik={formik}
                            labelName={labelName}
                            name={name}
                            type={type}
                        />
                    </div>
                ))}

                {radioOptions.map((item) => (
                    <div key={item.id}>
                        <Radioo
                            formik={formik}
                            item={item}
                        />
                    </div>
                ))}

                <div className="btnBox">
                    <button type="submit" className={!formik.isValid && 'disabaled'} disabled={formik.isValid ? false : true}>Submit</button>
                    <br />
                    {/* <button onClick={() => setFormData(datauser)}>Load Data</button> */}
                </div>
            </form>

        </div>
    )
}

export default SignUp
