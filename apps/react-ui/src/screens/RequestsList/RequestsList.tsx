import { Delete } from "@mui/icons-material";
import {
  Link,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useRequests from "../../hooks/useRequests";
import { formatDateTimeDistance } from "../../utils";

function RequestsList() {
  const navigate = useNavigate();

  const {
    requests,
    handlers: { deleteRequest },
  } = useRequests();

  async function handleDeletePressed(requestID: string) {
    await deleteRequest(requestID);
  }

  return (
    <Container maxWidth="sm">
      <Button variant="contained" onClick={() => navigate(`/edit/new`)}>
        Create Request
      </Button>
      <Stack spacing={2}>
        {requests.map((request) => {
          const [createdDate, distance] = formatDateTimeDistance(
            request.dateCreated,
            "dd/MM/yyyy"
          );
          return (
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="overline">{distance}</Typography>
                  <Typography variant="overline">{createdDate}</Typography>
                </Box>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {request.title}
                </Typography>
                <Typography variant="body2">{request.body.slice(0, 20) + "..."}</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleDeletePressed(request.id)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
            // <Box key={request.id}>
            //   <Box display="flex" justifyContent="space-between">
            //     <Typography variant="overline">{distance}</Typography>
            //     <Typography variant="overline">{createdDate}</Typography>
            //   </Box>
            //   <Link onClick={() => navigate(`/edit/${request.id}`)}>
            //     {request.title}
            //   </Link>
            //   <Typography variant="body2">{request.body}</Typography>
            //   <IconButton onClick={() => handleDeletePressed(request.id)}>
            //     <Delete />
            //   </IconButton>
            // </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export default RequestsList;
