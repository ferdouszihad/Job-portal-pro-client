import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <header className="md:w-11/12 mx-auto font-poppins">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-283px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
