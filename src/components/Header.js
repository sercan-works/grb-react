import { useContext, useEffect, useState } from "react"



import logo from '../assets/img/grb.png'





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [detailPage, setDetailPage] = useState(false)

 const url = window.location.href
console.log(url);
  useEffect(() => {


    // if (router.pathname === '/property_detail' ||
    //   router.pathname === '/properties' ||
    //   router.pathname === '/updateProperty' ||
    //   router.pathname === '/addProperty' ||
    //   router.pathname === '/addAgent' ||
    //   router.pathname === '/manageProperties' ||
    //   router.pathname === '/profile' ||
    //   router.pathname === '/urunler'
    // ) {
    //   setDetailPage(true)
    // } else {
    //   setDetailPage(false)
    // }



    const handleScroll = () => {

      if (window.scrollY > 0) {
        setIsScrolled(false)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])


  return (

      <header className={`flex justify-around  flex-col md:flex-row ${detailPage == true ? 'relative bg-gray-400 transition-all bg-opacity-100' : isScrolled && 'bg-gray-200 transition-all ease-in-out delay-150 bg-opacity-95'}`}>

        <div className="flex px-5 space-x-2 md:space-x-10 ">
          <a href='/'>
            <img src={logo} width={230} height={100} />
          </a>
        </div>

        <div className="flex mt-5 md:flex md:mt-0 items-center space-x-2 text-xs font-bold text-blue-gray-800 ">


          <a href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">ANASAYFA</p>

          </a>

          <a href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">ESERLERİMİZ</p>

          </a>


          <a href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">HAKKIMIZDA</p>

          </a>


          <a href='/'>
            <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-500  ">İLETİŞİM</p>

          </a>

</div>

      </header>




  )
}

export default Header