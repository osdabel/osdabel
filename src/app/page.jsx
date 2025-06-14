import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="px-5 pt-25 pb-7 rounded-b-3xl bg-white relative z-10 rounded-l-xl rounded-r-xl border-1"> 
        <p className="text-sm font-extralight text-foretext">OSDABEL</p>
        <h1 className="text-2xl font-bold text-foretext">OSIS SMAN 18 GARUT</h1>
        <p className="text-justify text-sm pt-2 font-extralight tracking-wide">Website ini dikelola langsung oleh OSIS SMAN 18 Garut Periode 2024/2025. Dan masih dalam tahap pengembangan. Untuk Pendaftaran Sportif 18 silahkan untuk mengunjungi laman dibawah.</p>
      </main>
      <Image src={"/images/tanda-panah.png"} alt="home-simbol" width={400} height={400} 
      className="fixed z-0 -top-25" />
    </div>
  );
}
