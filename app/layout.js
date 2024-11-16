import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/leftmenu.css";
import "../styles/nstyle.css";
import "../styles/skstyle.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hexa Erate Dashboard",
  description: "Welcome to Hexa Erate Dashboard",
  icons: {
    icon: [{ url: "/logo.svg" }],
  },
};

export default function RootLayout({ children }) {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          
            {children}
          
          <ToastContainer position="top-right" autoClose={3000} />
        </body>
      </html>
    </>
  );
}
