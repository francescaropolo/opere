import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./lib/theme";
import Header from "./components/common/Header";

const Home = React.lazy(() => import('./pages/Home'));
const Catalogo = React.lazy(() => import('./pages/Catalogo'));
const About = React.lazy(() => import('./pages/About'));
const Opera = React.lazy(() => import('./pages/Opera'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />  
        <React.Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/catalogo" element={<Catalogo />} />
            <Route path="/catalogo/:operaId" element={<Opera />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
