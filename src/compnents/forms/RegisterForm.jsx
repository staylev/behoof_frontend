import React, {useState} from 'react';
import * as yup from "yup";
import {Formik} from "formik";
import {Form, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {postLoginData, postRegisterData} from "../../http/userAPI";
import InputMask from 'react-input-mask';
import {PROFILE_PAGE} from "../../utils/consts";



const RegisterForm = () => {
    const [preload,setPreload] = useState(false);
    async function RegisterUser(data, actions) {
        setPreload(true)
        if(data.password!== data.password_conf){
            actions.setFieldError("password_conf", "Пароли не совпадают")
            return null;
        }
        const response = await postRegisterData(data);
        console.log(response);
        setPreload(false)
        if (response.status!==201){
          if (response.status === 400) {
              if ('email' in response.data) {
                  actions.setFieldError("email", "Такой пользователь уже существует")
              }
              if ('phone_number' in response.data) {
                  actions.setFieldError("phone_number", "Этот номер телефона уже зарегистрирован")
              }
          }
        }

    }


    const schema = yup.object().shape({
        first_name: yup.string()
            .required("Обязательное поле"),
        last_name: yup.string()
            .required("Обязательное поле"),
        email: yup.string().email("Некорректный email").max(150)
            .required("Обязательное поле"),
        password: yup.string().max(128)
            .required("Обязательное поле"),
        password_conf: yup.string().max(128)
            .required("Обязательное поле"),
    });
    return (
        <div>
            <Formik
                validationSchema={schema}
                initialValues={{
                    first_name: '', last_name: '', email: '', phone_number: '', password: ''
                }}
                onSubmit={RegisterUser}
            >
                {({
                      handleSubmit, handleChange, values, touched, errors,
                  }) => (
                    <Form className="m-4" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3"  >
                            <Form.Label className="form_text">Фамилия</Form.Label>
                            <Form.Control className="form_input"
                                          type="text"
                                          placeholder="Введите свою фамилию"
                                          id="last_name"
                                          value={values.last_name}
                                          onChange={handleChange}
                                          isValid={touched.last_name && !errors.last_name}
                                          isInvalid={!!errors.last_name}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.last_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                            <Form.Label className="form_text">Имя</Form.Label>
                            <Form.Control className="form_input"
                                          type="text"
                                          placeholder="Введите своё имя"
                                          id="first_name"
                                          value={values.first_name}
                                          onChange={handleChange}
                                          isValid={touched.first_name &&!errors.first_name}
                                          isInvalid={!!errors.first_name}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.first_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form_text">Email</Form.Label>
                            <Form.Control className="form_input"
                                          type="email"
                                          placeholder="Введите свою почту"
                                          id="email"
                                          value={values.email}
                                          onChange={handleChange}
                                          isValid={touched.email &&!errors.email}
                                          isInvalid={!!errors.email}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column">
                            <Form.Label className="form_text">Телефон</Form.Label>
                            <InputMask  className="form_input ph"
                                          type="tel"
                                          mask="+7 (999) 999-99-99"
                                          placeholder="Введите свой номер телефона"
                                          id="phone_number"
                                          value={values.phone_number}
                                          onChange={handleChange}
                                          isValid={touched.phone_number &&!errors.phone_number}
                                          isInvalid={!!errors.phone_number}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.phone_number}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form_text">Пароль</Form.Label>
                            <Form.Control className="form_input"
                                          type="password"
                                          placeholder="Придумайте пароль"
                                          id="password"
                                          value={values.password}
                                          onChange={handleChange}
                                          isValid={touched.password &&!errors.password}
                                          isInvalid={!!errors.password}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form_text">Повтор пароля</Form.Label>
                            <Form.Control className="form_input"
                                          type="password"
                                          placeholder="Повторите пароль"
                                          id="password_conf"
                                          value={values.password_conf}
                                          onChange={handleChange}
                                          isValid={touched.password_conf &&!errors.password_conf}
                                          isInvalid={!!errors.password_conf}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password_conf}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {
                            preload?
                                <div className="w-100 d-flex">
                                    <Spinner animation="border" className='m-auto preload'  />
                                </div>
                                :
                                <Button variant="primary" type="submit" className="form_but">
                                    Зарегистрироваться
                                </Button>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;