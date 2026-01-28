import { HashRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home.tsx"
import Projects from "./pages/Projects.tsx"
import CV from "./pages/CV.tsx"
import Contact from "./pages/Contact.tsx"
import Extra from "./pages/Extra.tsx"
import PersonalProjects from "./pages/Personal.tsx"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/school" element={<Projects />} />
          <Route path="/projects/personal" element={<PersonalProjects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extra" element={<Extra />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App