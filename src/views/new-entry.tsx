import { Button, FormGroup, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export const NewEntry = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await api.createEntry({ name, content });
    navigate(`/entry/${res.id}`);
    setName("");
    setContent("");
  };

  return (
    <Grid
      container
      flexDirection="row"
      justifyContent="center"
      style={{ minWidth: "20rem" }}
    >
      <Grid container flexDirection="column" alignItems="center">
        <h1>New Entry</h1>
        <FormGroup onSubmit={handleSubmit}>
          <Grid container flexDirection="column">
            <TextField
              style={{ margin: "1rem" }}
              value={name}
              id="name"
              label="Name"
              variant="outlined"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              style={{ margin: "1rem", minWidth: "40rem" }}
              value={content}
              id="content"
              label="Content"
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </Grid>
        </FormGroup>
      </Grid>
    </Grid>
  );
};
