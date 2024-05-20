import Brand from "@components/Brand"
import NavigationMenu from "@components/Menu"


const Header = () => {
  return (
    <header className="w-full h-[100px] relative">
      <div className="mx-auto container lg:px-6 max-w-screen-xl h-full flex items-center justify-between">
        <Brand />
        <NavigationMenu />
      </div>
    </header>

  )
}

export default Header
