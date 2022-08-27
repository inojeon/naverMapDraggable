import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import citiviewer_logo_white from "@images/citiviewer_logo_white.png";
import Image from "next/image";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  ExclamationIcon,
  KeyIcon,
  LocationMarkerIcon,
  MapIcon,
  MenuAlt1Icon,
  MenuIcon,
  OfficeBuildingIcon,
  UserCircleIcon,
  UsersIcon,
  VideoCameraIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import { isMap } from "util/types";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

const navigation = [
  { name: "통합정보", href: "/map", current: true },
  { name: "건물정보", href: "/building", current: false },
  { name: "장애물정보", href: "/obstacle", current: false },
  { name: "실시간관제", href: "#", current: false },
  { name: "영상분석", href: "#", current: false },
  { name: "도로정보", href: "/road", current: false },
  { name: "통계", href: "/statistics", current: false },
  { name: "설정", href: "/setting", current: false },
];
const userNavigation = [
  { name: "프로필", href: "/setting/profile" },
  { name: "로그아웃", href: "#" },
];
const subNavigation = [
  {
    name: "프로필",
    href: "/setting/profile",
    icon: UserCircleIcon,
    current: true,
  },
  {
    name: "계정 관리",
    href: "/setting/account",
    icon: UsersIcon,
    current: false,
  },
  { name: "도로 관리", href: "/setting/road", icon: MapIcon, current: false },
  {
    name: "건물 관리",
    href: "/setting/building",
    icon: OfficeBuildingIcon,
    current: false,
  },
  {
    name: "장애물 관리",
    href: "/setting/obstacle",
    icon: ExclamationIcon,
    current: false,
  },
  {
    name: "영상분석 관리",
    href: "/setting/video",
    icon: VideoCameraIcon,
    current: false,
  },
  {
    name: "권한 관리",
    href: "/setting/privilege",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "메뉴 관리",
    href: "/setting/menu",
    icon: MenuAlt1Icon,
    current: false,
  },
  {
    name: "통합정보 설정",
    href: "/setting/environment",
    icon: ViewGridAddIcon,
    current: false,
  },
  {
    name: "롤 오버 팝업 설정",
    href: "/setting/popup",
    icon: CreditCardIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  showSideMenu: boolean;
  isMapLayout?: boolean;
};

export default function TailwindTheme1Layout({
  children,
  title = "",
  showSideMenu = true,
  isMapLayout = false,
}: Props) {
  const { route } = useRouter();
  return (
    <div>
      <Disclosure
        as="div"
        className={
          (isMapLayout ? "pb-3 " : "pb-32 ") +
          "relative bg-sky-700 overflow-hidden"
        }
      >
        {({ open }) => (
          <>
            <nav
              className={classNames(
                open ? "bg-sky-900" : "bg-transparent",
                "relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none"
              )}
            >
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
                  <div className="px-2 flex items-center lg:px-0">
                    <div className="flex-shrink-0">
                      {/* <img
                        className="block h-8 w-auto"
                        // src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=400"
                        src="http://www.bluesignal.ai/thema/bluesignal/img/logo.png"
                        alt="Workflow"
                      /> */}
                      <Image
                        src={citiviewer_logo_white}
                        width={parseInt("568") / 3.5}
                        height={parseInt("112") / 3.5}
                      />
                    </div>
                    <div className="hidden lg:block lg:ml-5 lg:space-x-4">
                      <div className="flex">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              route.startsWith(item.href)
                                ? "bg-black bg-opacity-25"
                                : "hover:bg-sky-800",
                              "rounded-md py-2 px-3 text-sm font-medium text-white"
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="p-2 rounded-md inline-flex items-center justify-center text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon
                          className="block flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className="block flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                      {/* <button
                        type="button"
                        className="flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-20 focus:ring-offset-20 focus:ring-offset-sky-900 focus:ring-white"
                      >
                        <span className="sr-only">
                          View notificationsㅁㅁㅁ
                        </span>
                        홍길동 님
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}

                      <Menu as="div" className="relative flex-shrink-0 ml-4">
                        <div>
                          <Menu.Button className="rounded-full flex text-sm text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            홍길동 님
                          </Menu.Button>
                        </div>
                      </Menu>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0 ml-4">
                        <div>
                          <Menu.Button className="rounded-full flex text-sm text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            로그아웃
                            {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="bg-sky-900 lg:hidden">
                <div className="pt-2 pb-3 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black bg-opacity-25"
                          : "hover:bg-sky-800",
                        "block rounded-md py-2 px-3 text-base font-medium text-white"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-sky-800">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full h-10 w-10"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-sky-200">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:text-white hover:bg-sky-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </nav>
            <div
              aria-hidden="true"
              className={classNames(
                open ? "bottom-0" : "inset-y-0",
                "absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
              )}
            >
              <div className="absolute inset-0 flex">
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#0a527b" }}
                />
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#065d8c" }}
                />
              </div>
              <div className="relative flex justify-center">
                <svg
                  className="flex-shrink-0"
                  width={1750}
                  height={308}
                  viewBox="0 0 1750 308"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                    fill="#0369a1"
                  />
                  <path
                    d="M1465.84 308L16.816 0H1750v308h-284.16z"
                    fill="#065d8c"
                  />
                  <path
                    d="M1733.19 0L284.161 308H0V0h1733.19z"
                    fill="#0a527b"
                  />
                  <path
                    d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                    fill="#0a4f76"
                  />
                </svg>
              </div>
            </div>
            <header className="relative py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl tracking-tight font-bold text-white">
                  {title}
                </h1>
              </div>
            </header>
          </>
        )}
      </Disclosure>
      <main className="relative -mt-32">
        <div
          className={
            isMapLayout
              ? "max-w-screen-xl mx-auto pb-1  lg:pb-1 "
              : "max-w-screen-xl mx-auto pb-6  lg:pb-16 "
          }
        >
          <div className="bg-white rounded-none xl:rounded-lg shadow overflow-hidden">
            <div
              className={
                isMapLayout
                  ? "divide-y divide-gray-200"
                  : "divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
              }
            >
              {showSideMenu ? (
                <aside className="py-6 lg:col-span-2">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          route == item.href
                            ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                            : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            route == item.href
                              ? "text-teal-500 group-hover:text-teal-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </aside>
              ) : (
                <></>
              )}
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
