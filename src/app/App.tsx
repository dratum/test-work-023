import "./App.css";
import { MainPage } from "../pages/mainPage/ui/mainPage.tsx";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "../pages/contactPage/ui/contactsPage.tsx";
import { Header } from "../shared/ui/header.tsx";
import { Footer } from "../shared/ui/footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
