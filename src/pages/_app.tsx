import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MainLayout>
  );
}
