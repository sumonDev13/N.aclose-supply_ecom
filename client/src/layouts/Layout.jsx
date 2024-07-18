import Header from "../components/header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] w-[100%] bg-[#f1f3f6]">
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
