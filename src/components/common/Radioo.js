import React from 'react'

import './Radioo.scss'

function Radioo({
    item,
    formik,
}) {
    return (
        <div className="radioo">
            <div className="container">
                <form>
                    <label htmlFor={item.id}>
                        <input
                            type="radio"
                            name={item.name}
                            id={item.id}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values.gender == item.value}
                        />
                        <span>{item.labelName}</span>
                        {/* {formik.errors.gender && formik.touched.gender && (<p className="error">{formik.errors.gender}</p>)} */}
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Radioo
