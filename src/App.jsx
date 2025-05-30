import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostListPage from "./pages/PostListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/post" element={<PostListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
