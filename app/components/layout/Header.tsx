import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HeaderPage() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <Link href="/">
              <Image
                src="/logo/Vinh-Photoroom.png"
                alt="logo"
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Trang Chủ
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Sản Phẩm
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Giới Thiệu
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Liên Hệ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/cart"
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Giỏ Hàng
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
