import React from "react";
import Link from "next/link";
import { auth } from "../firebase";
import ConnectWallet from "./ConnectWallet";

export default function NavBar({ user }) {
  return (
    <>
      <nav>
        <div className="nav-wrapper #212121 grey darken-4">
          <Link href="/">
            <a className="brand-logo margin-left">TIONApp</a>
          </Link>
          <ul id="nav-mobile" className="right margin-right">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/home">Contracts</Link>
            </li>

            <li>
              <Link href="/post">
                <a>Post Blog</a>
              </Link>
            </li>
            <li>
              <ConnectWallet />
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          .margin-left {
            margin-left: 30px;
          }
          .margin-right {
            margin-right: 10px;
          }
        `}
      </style>
    </>
  );
}
