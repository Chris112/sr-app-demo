import { gql, useQuery } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequests from "../../hooks/useRequests";

interface RequestFormState {
  requestor: string;
  title: string;
  body: string;
}

function EditRequest() {
  const [status, setStatus] = useState<"ready" | "loading">("ready");
  const [formState, setFormState] = useState<RequestFormState>({
    requestor: "",
    title: "",
    body: "",
  });
  const { requestid } = useParams();
  const navigate = useNavigate();
  const {
    requests,
    handlers: { createRequest, updateRequest },
  } = useRequests();

  // Search for request in database
  const request = requests.find((request) => request.id === requestid);

  useEffect(() => {
    console.log(">>> request: %o", request);
    if (request) {
      setFormState({
        body: request.body,
        requestor: request.requestor,
        title: request.title,
      });
    }
  }, [request]);

  async function handleSubmitPressed() {
    setStatus("loading");
    if (requestid === "new") {
      // implement create request
      await createRequest(formState.requestor, formState.title, formState.body);
    } else if (requestid) {
      // implement update request
      await updateRequest(
        requestid,
        formState.requestor,
        formState.title,
        formState.body
      );
    }
    setStatus("ready");
    navigate("/");
  }

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">
            {request ? "Edit" : "Create"} Request
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Request title"
            name="title"
            onChange={handleFormChange}
            value={formState.title ?? ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Body"
            name="body"
            onChange={handleFormChange}
            value={formState.body ?? ""}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Your name"
            name="requestor"
            onChange={handleFormChange}
            value={formState.requestor ?? ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            onClick={handleSubmitPressed}
            variant="contained"
            loading={status === "loading"}
          >
            Submit
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditRequest;
