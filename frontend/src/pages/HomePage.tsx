import Header from "@components/Header";
import Hero from "@components/Hero";
import Posts from "@components/Posts";

const HomePage = () => {
  return (
    <>
    <div className="w-full min-h-screen ">
      <Header />
      <main>
       {/*  <Hero /> */}
        <Posts />
      </main>
    </div>
    </>
  )
}

export default HomePage
