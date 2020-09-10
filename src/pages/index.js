
import Link from 'next/link'
import { IconTwitterLogo, IconHome, IconExplore, IconNotifications, IconMessages } from '../components/Icons'


function Home() {
  return (
    <div className="bg-body text-white">
      <div className="grid grid-cols-3 mx-64 min-h-screen">
        <nav>
          <div className="mt-4 mb-8">
            <IconTwitterLogo className="text-5xl" />
          </div>
          <ul>
            <li className="mb-8">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center font-bold group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span><IconHome /></span>
                      <span className="ml-4  text-lg">Home</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="/home">
                <a className="flex items-center font-bold">

                  <span><IconExplore /></span>
                  <span className="ml-4 text-lg">Explore</span>

                </a>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="/home">
                <a className="flex items-center font-bold">
                  <span><IconNotifications /></span>
                  <span className="ml-4 text-lg">Notifications</span>
                </a>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="/home">
                <a className="flex items-center font-bold">
                  <span><IconMessages /></span>
                  <span className="ml-4 text-lg">Messages</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>Timeline</main>
        <aside>
          Links
      </aside>
      </div>
    </div>
  )
}

export default Home