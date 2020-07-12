import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const categorySelect = () => {
  return (
    <React.Fragment>
      <TextField select variant="outlined">
        <MenuItem value="">Selecione uma opção</MenuItem>
        <MenuItem value="artigo">artigo</MenuItem>
        <MenuItem value="texto">texto</MenuItem>
      </TextField>
    </React.Fragment>
  );
};

export default categorySelect;
