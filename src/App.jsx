import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts";
import Homepage from "./pages/home";
import Characters from "./pages/characters";
import Episodes from "./pages/episodes";
import CharacterDetail from "./pages/characterDetail";

function App() {
  return (
    <>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Layout>
                <Homepage />
              </Layout>
            </>
          }
        />

        {/* Characters*/}
        <Route
          path="/characters"
          element={
            <>
              <Layout>
                <Characters />
              </Layout>
            </>
          }
        />

        {/* Character Detail */}
        <Route
          path="/character-detail/:id"
          element={
            <>
              <Layout>
                <CharacterDetail />
              </Layout>
            </>
          }
        />

        {/* Episodes*/}
        <Route
          path="/episodes"
          element={
            <>
              <Layout>
                <Episodes />
              </Layout>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
