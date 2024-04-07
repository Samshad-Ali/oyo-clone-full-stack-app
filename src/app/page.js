import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Poster from "@/components/Poster";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
        </title>
      </Head>
      <div className=" w-full">
        <Header1 />
        <Header2 />
        <Header3 />
        <Poster />
        <Header4 />
        <Footer />
      </div>
    </main>
  );
}
