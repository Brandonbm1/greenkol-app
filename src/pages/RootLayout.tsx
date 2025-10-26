import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
