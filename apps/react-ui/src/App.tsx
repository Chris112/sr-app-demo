import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
