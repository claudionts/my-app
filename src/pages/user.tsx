import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const User = () => {
  return (
    <>
      <Formik
        onSubmit={(values, actions) => console.log(values, actions)}
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
              Adicionar artigo
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
    </>
  );
};

export default User;
