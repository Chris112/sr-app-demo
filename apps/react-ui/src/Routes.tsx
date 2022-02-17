import { BrowserRouter, Routes as AppRoutes, Route } from "react-router-dom";
import EditRequest from "./screens/EditRequest/EditRequest";
import RequestsList from "./screens/RequestsList/RequestsList";

function Routes() {
  return (
    <AppRoutes>
      <Route path="/edit/:requestid" element={<EditRequest />} />
      <Route path="/" element={<RequestsList />} />
      <Route path="*" element={<div>Page not found</div>} />
    </AppRoutes>
  );
}

export default Routes;
