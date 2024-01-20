import React from 'react';
import "./Contact.css";
import { Formik } from 'formik';
import Info from './Info';


const Contact = () => {
  return (
    <section className='contact section-p-top bg-black' id = "contact">
        <div className='container'>
            <div className='contact-content grid text-center'>
                <div className='contact-left'>
                    <div className='section-t'>
                        <br />
                        <h3>İSTEK/ŞİKAYET</h3> 
                        <p className='text'>İstek veya şikayetleriniz için bizimle iletişime geçebilirsiniz. Aşağıdaki kutucukları kullanarak bize iletebilirsiniz.</p>
                    </div>

                    <Formik
                        initialValues={{ name: "", email: '', address: '' }}
                        validate={values => {
                            const errors = {};

                            if(!values.name){
                                errors.name = "İsim giriniz";
                            } else if(!/^[A-Za-z\s]*$/.test(values.name)){
                                errors.name = "Geçersiz isim";
                            }

                            if (!values.email) {
                                errors.email = 'E-mail giriniz';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Geçersiz e-mail';
                            }

                            if(!values.address){
                                errors.address = "Adres giriniz";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='form-elem'>
                                    <input type = "text" name = "name" onChange = {handleChange} onBlur = {handleBlur} value = {values.name} className = "form-control" />
                                    <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
                                </div>

                                <div className='form-elem'>
                                    <input type = "email" name = "email" onChange = {handleChange} onBlur = {handleBlur} value = {values.email} className = "form-control" />
                                    <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
                                </div>

                                <div className='form-elem'>
                                    <input type = "text" name = "address" onChange = {handleChange} onBlur = {handleBlur} value = {values.address} className = "form-control" />
                                    <span className='form-control-text'>{errors.address && touched.address && errors.address}</span>
                                </div>

                                <div className='flex flex-start'>
                                    <button type = "submit" disabled = {isSubmitting} className = "submit-btn">Gönder</button>
                                </div>
                                <br />
                            </form>
                        )}
                        </Formik>
                </div>

                
            </div>
        </div>

        
        <Info />
    </section>
  )
}

export default Contact