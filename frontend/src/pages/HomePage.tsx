import Header from "@components/Header";
import Hero from "@components/Hero";
import Posts from "@components/Posts";
import CTA from "@components/CTA";

const HomePage = () => {
  return (
    <>
    <div className="w-full min-h-screen ">
      <Header />
      <main>
        <Hero />
        <Posts />
        <CTA />
      </main>
    </div>
    </>
  )
}

export default HomePage
