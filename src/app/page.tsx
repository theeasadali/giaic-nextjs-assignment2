import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* With TailwindCSS */}
      <section className="my-0 mx-auto py-20 flex justify-between items-center w-10/12">
      <h4 className="font-bold text-lg text-orange-500 gap-8 flex-row">With TailwindCSS</h4>
        <div className="flex flex-col w-1/2 transition-all duration-300 hover:-translate-y-4 bg-red-700 rounded-2xl text-orange-50 p-20 text-2xl hover:shadow-xl">
            <p>Salam! I'm,<br /> <h1 className="text-8xl font-bold text-white py-1">Asad Ali!</h1></p>
            <span className="tracking-widest">A NextJs Developer</span>
            <a href="http://linktr.ee/theeasadali" className="bg-orange-400 max-w-max py-2 px-5 my-5 rounded-lg transition-all duration-300 hover:bg-orange-500 " target="_blank" rel="noopener noreferrer">Let's connect!</a>
        </div>
        <div>
          <Image src={`/images/Asad Ali NextJs Developer.png`} className="rounded-2xl border-[3px] border-red-700 transition-all duration-300 hover:-translate-y-4" width={400} height={400} alt="Asad Ali's NextJs Devloper Image"/>
        </div>
      </section>

      {/* With CSS3 */}
      <section className="container">
      <h4 className="section-heading">With CSS3</h4>
        <div className="content">
          <p>Salam! I'm,<br /> <h1 className="name">Asad Ali!</h1></p>
          <span className="role">A NextJs Developer</span>
          <a href="http://linktr.ee/theeasadali" className="link-btn" target="_blank" rel="noopener noreferrer">Let's connect!</a>
        </div>

        <div>
        <Image src={`/images/Asad Ali NextJs Developer.png`} className="profile-img" width={400} height={400} alt="Asad Ali's NextJs Devloper Image"/>
        </div>
      </section>
    </>
  );
}
