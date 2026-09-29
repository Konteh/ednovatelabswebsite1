import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { DownloadPage } from "./pages/Download"
import { EmployersPage } from "./pages/Employers"
import { HomePage } from "./pages/Home"
import { ImpactPage } from "./pages/Impact"
import { JoinPage } from "./pages/Join"
import { LearnersPage } from "./pages/Learners"
import { NotFoundPage } from "./pages/NotFound"
import { PathwayPage } from "./pages/Pathway"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pathway" element={<PathwayPage />} />
          <Route path="/learners" element={<LearnersPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
