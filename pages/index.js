import Head from 'next/head';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function LinearSvg() {
  return (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="200"
      height="200"
      viewBox="0 0 100 100"
    >
      <path
        fill="#a3a3a3"
        d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"
      />
    </svg>
  );
}

function ProductHuntSvg() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
          fill="#FF6154"
        ></path>
        <path
          d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
          fill="#FFF"
        ></path>
      </g>
    </svg>
  );
}

function Code({ title, imgUrl }) {
  return (
    <div className="bg-gray-900 w-full h-full rounded-xl shadow-2xl flex flex-col overflow-hidden z-10">
      <div className="flex flex-none items-center px-4 h-[32px] bg-gray-800 space-x-2">
        <div className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full cursor-pointer transition-colors"></div>
        <div className="w-4 h-4 bg-yellow-600 hover:bg-yellow-500 rounded-full cursor-pointer transition-colors"></div>
        <div className="w-4 h-4 bg-green-600 hover:bg-green-500 rounded-full cursor-pointer transition-colors"></div>
        <div className="h-full px-2 flex items-end">
          <div className="bottom-0 h-[32px] bg-gray-900 text-gray-300 px-[18px] rounded-t-md flex items-center">
            {title ? capitalizeFirstLetter(title) : 'App'}
          </div>
        </div>
      </div>
      <div className="px-5 py-5 text-gray-50 font-mono bg-transparent focus:outline-none outline-none h-full resize-none relative">
        {imgUrl === 'linear' ? (
          <LinearSvg />
        ) : (
          <img src={imgUrl} className="logo" />
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const windows = [
    {
      title: 'notion',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
    },
    {
      title: 'linear',
      imgUrl: 'linear',
    },
    {
      title: 'gmail',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    },
    {
      title: 'gcal',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
    },
  ];

  return (
    <div className="">
      <Head>
        <title>SwiftShroud</title>
      </Head>

      <div className="min-h-screen bg-gray-900 flex flex-col justify-between">
        <div className="fixed z-50 top-0 left-0 w-full h-24 text-gray-400 font-semibold text-md flex items-center justify-between px-12">
          <div className="rounded-border-highlight">
            <img
              src="https://avatars.githubusercontent.com/u/15032956?v=4"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div>
            <ProductHuntSvg />
          </div>
        </div>
        <div className="relative">
          <div className="with-squares">
            <div className="absolute w-full h-full left-0 top-0">
              {windows.map((w) => (
                <div className={`absolute w-${w.title}`}>
                  <Code title={w.title} imgUrl={w.imgUrl} />
                </div>
              ))}
            </div>
            <div className="py-56 text-center with-squares-content">
              <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300">
                SwiftShroud
              </h1>
              <h2 className="text-white font-bold text-2xl max-w-[620px] px-10 mx-auto leading-tight py-5">
                Easily dismiss &amp; recall common macOS apps with assignable
                global hotkeys
              </h2>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex mx-auto rounded-full p-0.5 border-2 border-violet-500 hover:border-violet-700 transition duration-500"
            >
              <div className="rounded-full inline-block relative overflow-hidden shadow-xl bg-gradient-to-l from-violet-100 to-indigo-200">
                <div className="absolute bg-gradient-to-r from-violet-100 to-indigo-200 top-0 left-0 w-full h-full animate-pulse"></div>
                <div className="flex items-center justify-center text-transparent font-extrabold px-12 py-5 relative text-2xl bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-700">
                  Buy Now for&nbsp;
                  <div className="strikeout text-indigo-500">$18</div>&nbsp;$10
                </div>
              </div>
            </a>
            <div className="text-gray-500 pt-3 text-sm">
              Launch Pricing Special! &nbsp;🎉
            </div>
          </div>
        </div>
        <div className="h-12 bg-black bg-opacity-10 text-center text-gray-600 flex-none flex items-center justify-center text-sm border-t border-gray-800">
          &copy; {new Date().getFullYear()} Mitchell Johnson
        </div>
      </div>
    </div>
  );
}
