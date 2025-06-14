import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import db from "@/libs/db";
import { cookies } from "next/headers";
import Logout from "@/components/Logout";
import {BarChart2} from "react-feather";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OSIS SMAN 18 GARUT",
  description: "Situs resmi OSIS SMAN 18 Garut",
};






export default async function RootLayout({ children }) {

  const dataCookies = await cookies();
  const password = dataCookies.get("password")

  
  const admin = await db.admin.findFirst({
    where: {
      password: password?.value
    }
  })
  
  console.log(admin)

  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar fixed top-0 left-0 h-15 border-b-1 w-full p-4 z-20 flex bg-white flex justify-between">

        <Link href={"/"} className="flex">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
          <Image src={"/images/logo_osdabel.png"} alt="logo" width={40} height={40} />
          </div>
          <h1 className="font-bold">osdabel.my.id</h1>
        </div>
        </Link>

        <Link href={"/login"} className="flex justify-between">
        <div className="flex-1 flex justify-end items-center">
          {
            password ? 
            <Logout username={admin.username} />
            :
            <h1 className="text-foretext">Panitia</h1>
          }
        </div>  
        </Link>
        </div>
        {children}


        <div className="menu fixed bottom-0 left-0 bg-wall h-14 w-full rounded-tl-2xl rounded-tr-2xl">
          <div className="flex justify-around items-center h-full">
        <Link href={"/"}>
        <Image src={"/images/home-simbol.png"} alt="home-simbol" width={50} height={50} />
        </Link>
        <Link href={"/soon"}>
        <BarChart2 size={40} color="white"/>
        </Link>
        <Link href={"/sportif"} className="flex flex-col items-center">
        <Image src={"/images/game-simbol.png"} alt="home-simbol" width={50} height={50} />
        </Link>
          </div>
        </div>


      </body>
    </html>
  );
}
