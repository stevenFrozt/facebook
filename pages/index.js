import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Home() {
  const emailInputRef = useRef(null)

  useEffect(() => {
    emailInputRef.current.focus()
  }, [])

  return (
    <div className="bg-[#f0f2f5] h-screen">
      <Head>
        <title>Facebook - log in or sign up</title>
        <meta
          name="description"
          content="Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="pt-2 text-lg lg:flex lg:items-center lg:justify-center lg:pt-40 lg:gap-20">
        <div className="lg:mb-32 mb-5">
          <div className="mx-auto">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt=""
              className="object-cover h-[100px] lg:h-[120px] mx-auto lg:mx-0"
            />
          </div>
          <h1 className="text-center text-black px-10 text-xl lg:mb-8 lg:text-[1.6rem] lg:font-medium lg:max-w-[500px] lg:text-left lg:pl-8">
            Connect with friends and the world around you on Facebook.
          </h1>
        </div>

        <div className="">
          <div className="bg-white flex flex-col gap-3 py-4 px-4 x rounded-md shadow-lg lg:w-[396px] w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Email or phone number"
              className="border p-2 rounded-md  outline-0 focus:border-sky-500 focus:shadow-sky-200 focus:shadow-sm caret-sky-500"
              autoFocus
              ref={emailInputRef}
            />
            <input
              type="text"
              placeholder="Password"
              className="border p-2 rounded-md  outline-0 focus:border-sky-500 focus:shadow-sky-200 focus:shadow-sm caret-sky-500"
            />

            <button className="bg-[#1877f2] rounded-[6px] py-[10px] hover:bg-blue-600 transition-all duration-120 text-white font-bold">
              Log In
            </button>

            <p className="text-[#1877f2] text-center text-sm py-2 hover:underline cursor-pointer">
              Forgot password?
            </p>
            <hr />
            <button className="bg-[#42b72a] rounded-[6px] py-[8px] hover:bg-green-500 transition-all duration-120 text-white w-[70%] lg:w-[50%] mx-auto font-bold my-2">
              Create new account
            </button>
          </div>
          <p className="text-center text-[.8rem] my-4 lg:text-[.9rem] ">
            <span className="font-bold">Create a Page</span> for a celebrity,
            brand or business.
          </p>
        </div>
      </main>
      <footer className="bg-white mt-16 lg:px-60 lg:mt-60">
        <div className="py-4 px-8 text-gray-400">
          <div className="flex text-[.6rem] gap-2 ">
            <p>English (US)</p>
            <p>Filipino</p>
            <p>Bisaya</p>
            <p>Espa??ol</p>
            <p>?????????</p>
            <p>?????????</p>
            <p>??????(??????)</p>
          </div>

          <div className="flex text-[.6rem] gap-2">
            <p>??????????????</p>
            <p>Portugu??s (Brasil)</p>
            <p>Fran??ais (France)</p>
            <p>Deutsch</p>
            <div className="border px-2">+</div>
          </div>

          <hr className="my-2" />

          <div className="text-gray-400 text-[.6rem]">
            Sign Up Log In Messenger Facebook Lite Watch Places Games
            Marketplace Facebook Pay Oculus Portal Instagram Bullet in Local
            Fundraisers Services Voting Information Center Groups About Create
            Ad Create Page Developers Careers Privacy Cookies Ad choices Terms
            Help Contact Uploading & Non-Users
          </div>
          <p className="text-[.6rem] py-4">Meta ?? 2022</p>
        </div>
      </footer>
    </div>
  )
}
