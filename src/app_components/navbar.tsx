'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaTools, FaBoxes, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import {FaHouse} from "react-icons/fa6";

interface MenuItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const menuItems: MenuItem[] = [
    { name: 'Anasayfa', href: '/dashboard', icon: FaHouse },
    { name: 'Cariler', href: '/customers', icon: FaUsers },
    { name: 'Teknik Servis', href: '/service-tickets', icon: FaTools },
    { name: 'Stok Yönetimi', href: '/stock-management', icon: FaBoxes },
    { name: 'Kullanıcı Yönetimi', href: '/user-management', icon: FaUsers },
    { name: 'Ayarlar', href: '/settings', icon: FaCog },
];

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const handleLogout = () => {
        // Çıkış işlemleri burada yapılacak
        // useRouter kullanarak login sayfasına yönlendirme yapabilirsiniz
        alert('Çıkış yapıldı!');
    };

    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col p-6 shadow-xl min-h-screen">
            <div className="flex justify-center mb-8">
                <Image src="/logo/logo-beyaz.png" alt="Firma Logosu" width={200} height={200} />
            </div>
            <nav className="flex-grow">
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href}>
                                <div
                                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                                        pathname === item.href ? 'bg-blue-600' : 'hover:bg-gray-700'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-semibold text-lg">{item.name}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto">
                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-3 p-3 w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-lg font-semibold shadow-md"
                >
                    <FaSignOutAlt className="w-5 h-5" />
                    <span>Çıkış Yap</span>
                </button>
            </div>
            <footer className="mt-auto text-center text-xs text-gray-500 pt-4">
                System Design by{' '}
                <a
                    href="https://urtopcuoglu.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    urtdigital
                </a>
            </footer>
        </aside>
    );
};

export default Navbar;
