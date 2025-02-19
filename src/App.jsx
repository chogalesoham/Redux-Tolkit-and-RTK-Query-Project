import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPost from "./pages/all-post";
import CreatePost from "./pages/create-post";
import Header from "./componats/header";
import SinglePost from "./pages/single-post";
import UpdatePost from "./pages/update-post";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllPost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
