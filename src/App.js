import { HeaderComponent } from "./component/header/header";
import { HomeComponent } from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/about/about";
import { ProjectComponent } from "./pages/project/project";
import { BlogComponent } from "./pages/blog/blog";
function App() {
  return (
    <>
     
     <Router>
     <HeaderComponent  />
      <Routes>
        <Route path="/" element = {<HomeComponent />} />
        <Route path="/about" element = {<About />} />
        <Route path="/project" element = {<ProjectComponent />} />
        <Route path="/blog" element = {<BlogComponent />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
