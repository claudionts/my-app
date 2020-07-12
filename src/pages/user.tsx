import React from "react";
import { Grid, Button, Typography, Container } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { openApi } from "../services/api";

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

const login = async ({ email, password }: IForm) => {
  try {
    const res = await openApi.post('/auth/login', {
      email: email,
      password: password
    },{
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log(res)
    if (res.data.access_token) {
      localStorage.setItem('@token', res.data.access_token);
      alert('logado!');
    } else {
      alert('Erro!');
    }
  } catch (error) {
    alert('Deu erro na Execução');
  }
}

const User = () => {
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
