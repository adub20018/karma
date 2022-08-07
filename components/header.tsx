import Head from 'next/head'
import Image from 'next/image'
import logo from "@/public/logo.png"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

function Header() {
  return (
    <div>
      <Head>
          <title>CannaSPY</title>
          <meta property="og:title" content="CannaSPY" key="title" />
          <link rel="icon" href="/logo.png" />
      </Head>
      <header className="relative bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
          <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">CannaSPY</span>
                <Image className="h-10 w-auto" src={logo} width={50} height={50} alt="CannaSPY Logo" />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation?.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium  text-black hover:text-green-600">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-green-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-green-600 hover:bg-green-50"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
  return (
    <div>
      <Head>
        <title>CannaSPY</title>
        <meta property="og:title" content="CannaSPY" key="title" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-green-600">
          <Image className="justify-self-center" src={logo} width={50} height={50} alt="CannaSPY Logo" />
          <span className="ml-3 text-4xl">CannaSPY</span>
        </h1>
      </div>
      {/* <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-green-600">
            CannaSPY
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          Your experiences. Your data. Your insights.
        </p>
      </div> */}
    </div>
  )
}

export default Header