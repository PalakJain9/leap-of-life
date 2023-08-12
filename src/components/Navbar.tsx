import Link from "next/link";
import React from "react";
import styles from '@/styles/Navbar.module.css';

export default function Navbar () {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div
      className="fixed z-10 flex flex-col justify-start items-start w-full grow"
    >  
      <div
        className="bg-black flex flex-row justify-between items-center w-full universalPadding h-[6rem]"
      >
        <Link
          href='/'
          className="text-xl lg:text-2xl font-medium text-white"
        >
          Leap x Palak
        </Link>

        <div
          className={styles.navbarContainer}
        >
          {/* to be displayed on large screens */}
        <div
          className='hidden lg:flex flex-row justify-end items-center gap-4 font-semibold text-grey'
        >
          <Link
            href='#experience'
            className={styles.textWithHover}
          >
            Experience
          </Link>

          <Link
            href='#community'
            className={styles.textWithHover}
          >
            Community
          </Link>

          <Link
            href='https://palakjain.hashnode.dev/'
            className={styles.textWithHover}
          >
            Blog
          </Link>
        </div>

        <div
          className={styles.navbarContainer}
        >
          <Link
            href='#contact'
            className={`${styles.textWithHover} hidden md:flex`}
          >
            Contact
          </Link>

          <Link
            href='mailto:palakb188@gmail.com'
            className='text-black px-[1rem] py-[0.3rem] bg-white hover:bg-white/90 rounded-md text-sm lg:text-base border border-white/80'
          >
            Hire Palak
          </Link>

          <div
            onClick={() => setIsClicked(!isClicked)}
            className={`flex lg:hidden flex-col gap-3 cursor-pointer text-grey`}
          >
            <span 
              className={styles.hamburger}
              style={{
                transform: isClicked ? 'rotate(45deg) translate(10px)' : 'rotate(0deg) translate(0px)'
              }}
            >
            </span>

            <span 
              className={styles.hamburger}
              style={{
                transform: isClicked ? 'rotate(-45deg) translate(10px)' : 'rotate(0deg) translate(0px)'
              }}  
            >
            </span>
          </div>

        </div>
        </div>
      </div>

      {/* dropdown content */}
      <div
        className={`w-full pt-[1rem] pb-[2rem] bg-black text-white flex flex-col justify-center items-center
        ${isClicked ? "flex" : "hidden"}
        `}
      >
        <Link
          href='/'
          className={styles.textWithHover}
        >
          Experience
        </Link>

        <Link
          href='/'
          className={styles.textWithHover}
        >
          Community
        </Link>

        <Link
          href='/'
          className={styles.textWithHover}
        >
          Blog
        </Link>

      </div>
    </div>
  )
}