import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layouts/Layout";
import Home from "./Pages/Home/Home";

import NoPage from "./Pages/NoPage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="messages" element={<Messages />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="results" element={<Results />} />
          <Route path="results/:id" element={<Result />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings"  element={<General />}/>
          <Route path="request-form"  element={<RequestForm />}/>
          <Route path="request-form/new"  element={<RequestFormNew />}/> */}
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
