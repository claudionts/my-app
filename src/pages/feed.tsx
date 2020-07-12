import React from "react";
import { Container, Card, Typography, CardContent } from "@material-ui/core";

const Feed = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h5">MyApp</Typography>
        <Card>
          <CardContent>
            <Typography variant="h5">Título</Typography>
            <Typography color="textSecondary">Categoria</Typography>
            <Typography variant="body2" component="p">
              Publicação.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Feed;
