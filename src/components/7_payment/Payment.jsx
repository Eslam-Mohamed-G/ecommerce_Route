import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function Payment() {
    let validator = Yup.object().shape({});
    const formik = useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:''
        },
        validationSchema: validator,
    });

    return (
        <div>
            
        </div>
    )
}

export default Payment;
