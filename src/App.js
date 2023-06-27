import { HeaderComponent } from "./component/header/header";
import { HomeComponent } from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/about/about";
import { MajorProjectComponent } from "./pages/project/majorProject";
import { MiniProjectComponent } from "./pages/project/miniProject";
import { BlogComponent } from "./pages/blog/blog";
import { ErrorPage } from "./pages/error/error";
function App() {
  return (
    <>
     
     <Router>
     <HeaderComponent  />
      <Routes>
        <Route path="/" element = {<HomeComponent />} />
        <Route path="/about" element = {<About />} />
        <Route path="/major_projects" element = {<MajorProjectComponent />} />
        <Route path="/mini_projects" element = {<MiniProjectComponent />} />
        <Route path="*" element = {<ErrorPage />} />
        <Route path="/blog" element = {<BlogComponent />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
