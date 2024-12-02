import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <header className="md:w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-283px)]"></main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
