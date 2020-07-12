import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import categorySelect from "../components/categorySelect";
import editorComponent from "../components/editorComponent";

const Post = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().required(),
    category: yup.string().required(),
  });

  return (
    <>
      <Formik
        onSubmit={(values, actions) => console.log(values, actions)}
        initialValues={{ title: "", category: "artigo" }}
        validationSchema={validationSchema}
      >
        <Form>
          <Grid container direction="column" justify="center" spacing={3}>
            <Typography variant="h5" align="center">
              Adicionar artigo
            </Typography>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                label="Título"
                name="title"
                style={{ width: "100%" }}
              />
              <Field
                component={categorySelect}
                name="category"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Field component={editorComponent} name="editor" />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                color="primary"
                type="submit"
                variant="contained"
                style={{ width: "100%" }}
              >
                Postar
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

export default Post;
