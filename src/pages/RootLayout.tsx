import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppFab } from "../components/WhatsAppFab";
import { Toaster } from "react-hot-toast";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster />
    </>
  );
};
