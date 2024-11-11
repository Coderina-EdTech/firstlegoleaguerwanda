"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MenuIcon,
  BellIcon,
  UserCircleIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

const Layout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router.events]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="h-screen overflow-y-scroll">
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          {/* Add your loader component here */}
          <div className="loader">Loading...</div>
        </div>
      )}
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          {/* Hamburger menu icon (visible on mobile) */}
          <MenuIcon
            className="h-6 w-6 mr-4 cursor-pointer block md:hidden"
            onClick={toggleSidebar}
          />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center">
          <BellIcon
            className="h-6 w-6 mr-4 cursor-pointer"
            onClick={() => setShowNotification(!showNotification)}
          />
          <div className="relative">
            <UserCircleIcon
              className="h-8 w-8 cursor-pointer"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <LogoutIcon className="h-5 w-5 mr-2" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Sidebar (fixed on desktop, revealed as sidebar on mobile) */}
      <div className="flex h-screen relative">
        <aside
          className={`bg-gray-200 h-screen w-full h-full text-gray-700 py-4 px-2 flex flex-col items-center ${
            showSidebar
              ? "absolute md:static inset-y-0 left-0 w-56"
              : "hidden md:block md:w-56"
          }`}
        >
          <nav className="space-y-2">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/posts">Posts</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <NavLink href="/subscribers">Subscribers</NavLink>
            <NavLink href="/activity">Activity</NavLink>
            <NavLink href="/settings">Settings</NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 h-full">
          {/* Notification Panel */}
          {showNotification && (
            <div className="bg-white shadow-lg absolute top-1 right-6 w-64 rounded-lg py-2 px-4">
              <h2 className="text-lg font-semibold mb-2">Notifications</h2>
              <ul>
                <li className="py-1">Notification 1</li>
                <li className="py-1">Notification 2</li>
                <li className="py-1">Notification 3</li>
              </ul>
            </div>
          )}

          {/* Main Content */}
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const fullHref = ``;
  // const fullHref = `/writer/${router.query.writer}${href}`;
  const linkClass =
    router.asPath === fullHref
      ? "bg-gray-300 rounded-lg"
      : "hover:bg-gray-300 rounded-lg";
  const textClass = router.asPath === fullHref ? "font-semibold" : "";
  return (
    <a href={fullHref} className={`block px-4 py-2 ${linkClass} ${textClass}`}>
      {children}
    </a>
  );
};

export default Layout;
