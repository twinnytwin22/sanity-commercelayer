import React from 'react'
import Link from 'next/link'

function SubMenu() {
  return (
    <nav className="mt-5 mb-16 mx-auto max-w-screen-lg px-4 sm:px-6 md:mt-10">
    <p className="text-4xl font-bold">Metaverse Marketplace</p>
    <div className="flex mt-4">
      <Link href="/">
        <a className="mr-4 text-pink-500">
          Home
        </a>
      </Link>
      <Link href="/create-nft">
        <a className="mr-6 text-pink-500">
          Sell NFT
        </a>
      </Link>
      <Link href="/my-nfts">
        <a className="mr-6 text-pink-500">
          My NFTs
        </a>
      </Link>
      <Link href="/dashboard">
        <a className="mr-6 text-pink-500">
          Dashboard
        </a>
      </Link>
    </div>
  </nav>)
}

export default SubMenu