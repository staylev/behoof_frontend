import React from 'react';
import * as yup from "yup";
import {Formik} from "formik";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";
import {postLoginData} from "../../http/userAPI";

const AutchFоrm = () => {
    async function loginUser(data, actions) {
        console.log(data);

        const {
            data: {access}, status,
        } = await postLoginData(data);
        if (status!==200){
            actions.setFieldError("password", "Такого пользователя нет");
            return null;
        }
        localStorage.setItem('access', access);
    }

    const schema = yup.object().shape({
        username: yup.string()
            .required("Обязательное поле"),
        password: yup.string()
            .required("Обязательное поле"),
    });
    return (<div>
        <Formik
            validationSchema={schema}
            initialValues={{
                username: '', password: '',
            }}
            onSubmit={loginUser}
        >
            {({
                  handleSubmit, handleChange, values, touched, errors,
              }) => (
                <Form className="m-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className="form_text">Логин</Form.Label>
                        <Form.Control className="form_input"
                                      type="text"
                                      placeholder="Введите телефон или почту"
                                      id="username"
                                      value={values.username}
                                      onChange={handleChange}
                                      isValid={touched.username && !errors.username}
                                      isInvalid={!!errors.username}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label className="form_text">Пароль</Form.Label>
                        <Form.Control className="form_input"
                                      type="password"
                                      placeholder="Введите свой пароль"
                                      id="password"
                                      value={values.password}
                                      onChange={handleChange}
                                      isValid={
                                          touched.password && !errors.password
                                      }
                                      isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="form_but">
                        Войти
                    </Button>
                </Form>)}
        </Formik>
    </div>);
};

export default AutchFоrm;