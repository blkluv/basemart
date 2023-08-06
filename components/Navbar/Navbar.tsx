import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className="container px-4 mx-auto my-5 relative ">
      <nav className="flex justify-between items-center h-[60px]">
        <div className="flex-row gap-2">
          <Link href="/" className="text-2xl font-extrabold">
            BASED
          </Link>
          {/* <Link href="/buy">Buy</Link>
          <Link href="/sell">Sell</Link> */}
        </div>
        <div>
          <SearchBar />
        </div>

        <div className="flex flex-row gap-2 items-center">
          {address && (
            <Link
              className="flex align-center gap-1 text-lg"
              href="/create"
              passHref
            >
              Create Marketplace
            </Link>
          )}
          <div>
            <ConnectWallet theme="light" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link href={`/profile/${address}`} passHref>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
