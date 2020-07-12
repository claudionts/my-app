import React, { useEffect } from "react";
import { Grid, Button, Typography, Container } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { openApi, isToken, getToken } from "../services/api";
import { useHistory } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { useDispatch, useSelector } from "react-redux";
import { IUser, addUser, removeUser } from "../store/user";

interface IForm {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Email inválido')
    .required('Obrigatório'),
  password: yup.string().required('Obrigatório'),
});


const User = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector<{ user: IUser }, IUser>(state => state?.user);

  useEffect(() => {
    if (user.isAuth) history.push('/feed');
  }, [user, history])
  
  const login = async ({ email, password }: IForm) => {
    try {
      const res = await openApi.post('/auth/login', {
        email: email,
        password: password
      });
      if (res.data.access_token) {
        localStorage.setItem('@token', res.data.access_token);
        dispatch(addUser({ email, isAuth: true }));
        toastr.success('Sucesso!', 'Usuário logado!');
      } else {
        toastr.error('Erro!', 'Usuário não existe!');
        dispatch(removeUser());
      }
    } catch (error) {
      toastr.error('Erro!', 'Erro na requisição!');
      dispatch(removeUser());
    }
  }

  return (
    <Container>
      <Container style={{ marginTop: "15%" }} maxWidth="sm">
        <Formik
          onSubmit={login}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
        >
          <Form>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Typography variant="h5" align="center">
                MyApp
              </Typography>
              <Grid item xl={12}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Email"
                  name="email"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xl={12}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xl={12}>
                <Button
                  size="large"
                  color="primary"
                  type="submit"
                  variant="contained"
                  style={{ width: "100%" }}
                >
                  Logar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
    </Container>
  );
};

export default User;
