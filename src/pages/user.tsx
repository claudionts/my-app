import React from 'react';
import { Grid, Button } from '@material-ui/core';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
});

const User = () => {
  return (
    <>
      <h2>MyApp</h2>
      <Formik
        onSubmit={(values, actions) => console.log(values, actions)}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        <Form>
          <Grid container spacing={3}>
            <Grid item xl={6}>
              <Field
                component={TextField}
                variant="outlined"
                label="Email"
                name="email"
                
              />
            </Grid>
            <Grid item xl={6}>
              <Field
                component={TextField}
                variant="outlined"
                label="Password"
                name="password"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xl={2}>
              <Button
                size="large"
                color="primary"
                type="submit"
                variant="contained"
              >
                Logar
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

export default User;