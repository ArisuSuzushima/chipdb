import Image from "next/image";
import {Inter, Rubik} from "next/font/google";
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between p-0 ${rubik.className}`}
    >
      <Navbar>
        <NavbarBrand className={`gap-1`}>
          <svg className={`h-10 w-10`} viewBox="0 0 277.000000 277.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,277.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
              <path d="M10 2008 c0 -801 2 -830 50 -1004 131 -467 516 -841 989 -959 478 -119 963 16 1312 364 267 267 402 595 402 971 0 170 -18 288 -69 440 -71 213 -184 390 -354 553 -158 153 -317 251 -511 314 -209 69 -164 66 -1031 70 l-788 4 0 -753z" />
            </g>
          </svg>
          <span className={`text-black font-bold uppercase`}>
              Suiteki
              <br />
              Industries
            </span>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="https://github.com/ArisuSuzushima/chipdb">
                <svg alt="GitHub" className="h-6 w-6" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.1.82-.3.82-.6 0-.3-.01-1.1-.015-2.15-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.808 1.304 3.495.995.108-.776.42-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.3-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.876.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .3.21.71.825.59C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                </Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary">
                Get Started
                </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
        <div className={`flex flex-col items-center justify-center gap-4 p-4`}>
            <h1 className={`text-4xl font-bold text-center`}>
            欢迎使用 ChipDB
            </h1>
            <p className={`text-center`}>
            ChipDB 是一个自由、开源的芯片数据库，旨在为芯片设计者提供一个方便的查询工具。
            </p>
            <p className={`text-center`}>
            本项目基于 GNU Affero General Public License v3.0 开源，您可以在 GitHub 上查看源代码。
            </p>
            <p className={`text-center`}>
                我们目前支持：
                <ol className={`list-decimal`}>
                    <li>通过芯片丝印/部件号查询芯片</li>
                    <li>通过芯片型号查询芯片</li>
                    <li>通过芯片厂商查询芯片</li>
                    <li>通过芯片类型查询芯片</li>
                    <li>通过芯片封装查询芯片</li>
                    <li>通过以上的方法获取芯片的详细信息</li>
                </ol>
            </p>
            <p className={`text-center`}>
                未来我们将支持更多功能，敬请期待。
            </p>
            <div id="footer" className={`flex flex-col items-center justify-center gap-4 w-full pt-36`}>
                <p className={`text-center`}>
                    本项目由
                    <a href="https://github.com/ArisuSuzushima" className={`text-blue-500`}>
                        AkiChan
                    </a>
                    独立业余开发，如有任何问题请联系我。
                </p>
                <div className={`flex gap-1 justify-center items-center`}>
                    <svg className={`h-10 w-10`} viewBox="0 0 277.000000 277.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,277.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M10 2008 c0 -801 2 -830 50 -1004 131 -467 516 -841 989 -959 478 -119 963 16 1312 364 267 267 402 595 402 971 0 170 -18 288 -69 440 -71 213 -184 390 -354 553 -158 153 -317 251 -511 314 -209 69 -164 66 -1031 70 l-788 4 0 -753z" />
                        </g>
                    </svg>
                    <span className={`text-black font-bold uppercase`}>
              Suiteki
              <br />
              Industries
            </span>
                </div>
                <p className={`text-center`}>
                    <Link href="mailto:arisu@ieee.org" className={`text-blue-500`}>
                        arisu@ieee.org
                    </Link>
                </p>
            </div>
        </div>
    </main>
  );
}
