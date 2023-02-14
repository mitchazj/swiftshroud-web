import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SwiftShroud</title>
      </Head>

      <div className="min-h-screen bg-gray-900 flex flex-col justify-between">
        <div className="fixed top-0 left-0 w-full h-12 text-gray-400 font-semibold flex items-center">
          <img src="https://avatars.githubusercontent.com/u/15032956?v=4" />
          <div>Hello</div>
        </div>
        <div className="">
          <div className="py-56 text-center with-squares">
            <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300">
              SwiftShroud
            </h1>
            <h2 className="text-white font-bold text-2xl max-w-[620px] px-10 mx-auto leading-tight py-5">
              Easily dismiss &amp; recall common macOS apps with assignable
              global hotkeys
            </h2>
          </div>
        </div>
        <div className="h-12 bg-black bg-opacity-10 text-center text-gray-600 flex-none flex items-center justify-center text-sm border-t border-gray-800">
          &copy; {new Date().getFullYear()} Mitchell Johnson
        </div>
      </div>
    </div>
  );
}
