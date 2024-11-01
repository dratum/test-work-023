import "./App.css";

import { MainPage } from "../pages/ui/mainPage.tsx";

import { Layout } from "../shared/ui/layout.tsx";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "../pages/ui/contactsPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
