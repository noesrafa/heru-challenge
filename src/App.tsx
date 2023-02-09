import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GifsPage from "./pages/GifsPage";
import GifDetailPage from "./pages/GifDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gifs" >
        <Route path=":id" element={<GifDetailPage />} />
        <Route path="" element={<GifsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
