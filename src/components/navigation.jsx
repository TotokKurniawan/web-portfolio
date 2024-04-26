import React from "react"
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi"

export default function Navigation() {
  return (
    <div className="fixed bottom-8 left-0 right-0 text-center z-10 lg:translate-y-[-20%] lg:top-[50%] lg:left-auto lg:right-10">
      <div className="flex justify-between mx-auto bg-white text-secondary p-5 rounded-full border-secondary border-solid border-[1px] max-w-[1000px] lg:flex-col">
        <Link
          to="home"
          className="flex w-full h-full justify-center items-center cursor-pointer"
          activeClassName="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="profile"
          className="flex w-full h-full justify-center items-center cursor-pointer"
          activeClassName="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiUser />
        </Link>
        <Link
          to="portfolio"
          className="flex w-full h-full justify-center items-center cursor-pointer"
          activeClassName="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  )
}
