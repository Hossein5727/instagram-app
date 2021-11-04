import React from 'react'

function Input({
    labelName,
    name,
    formik,
    className,
    type = "text"
}) {
    return (
        <div>
            <div className="formControl">
                <label>{labelName}</label>
                <br />
                <input
                    type={type}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    // {...formik.getFieldProps(name)}
                    className={formik.errors[name] ? 'errorBorder' : 'greenBorder'}
                />
                {formik.errors[name] && formik.touched[name] && (<p className="error">{formik.errors[name]}</p>)}
            </div>
        </div>
    )
}

export default Input
