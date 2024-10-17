import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

export default function Signup() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100"
      style={{
        backgroundImage: 'url(/Login.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Head>
        <title>Letchonan</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-orange-900 text-white rounded-2xl shadow-2xl border-2 border-black flex w-full max-w-4xl h-[35rem] relative">
          <div className="w-1/2 h-full bg-orange-700 rounded-2xl shadow-md p-10 m-15">
            <h2 className="text-2xl font-bold text-white mb-1">Login</h2>
            <div className="border-2 w-10 border-white inline-block mb-4"></div>

            <form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="username" className="text-white block text-left mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-2 rounded-lg border border-gray-300 text-black focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white block text-left mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="text-white block text-left mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="text-white block text-left mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none mb-1"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-orange-700 font-semibold rounded-full px-4 py-3 mt-4 hover:bg-orange-500 hover:text-white transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-1/2 h- flex flex-col justify-center items-center">
            <Link href="/profile">
              <button className="flex items-center justify-center p-2 bg-transparent hover:bg-gray-800 rounded">
                <Image
                  src="/Vector.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </button>
            </Link>
            <h2 className="text-5xl font-bold mb-5">WELCOME!</h2>
            <div className="border-2 w-10 border-white inline-block mb-20"></div>
            <p className="mb-4">Already Have an Account?</p>
            <Link href="/login">
              <button className="border-2 border-white rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-red-500">
                Login
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
