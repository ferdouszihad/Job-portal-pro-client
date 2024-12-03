import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && user?.email && (
        <p className="bg-neutral-content text-center py-1">
          Welcome Mr.{user?.displayName}
        </p>
      )}
      <header className="md:w-11/12 mx-auto font-poppins">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-283px)] font-poppins">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
