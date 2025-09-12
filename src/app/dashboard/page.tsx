'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaTools, FaBoxes, FaSignOutAlt, FaCog } from 'react-icons/fa'; // Kullanacağımız ikonlar

// Menü öğelerinin tip tanımı
interface MenuItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const menuItems: MenuItem[] = [
    { name: 'Cariler', href: '/customers', icon: FaUsers },
    { name: 'Teknik Servis', href: '/service-tickets', icon: FaTools },
    { name: 'Stok Yönetimi', href: '/stock-management', icon: FaBoxes },
    { name: 'Kullanıcı Yönetimi', href: '/user-management', icon: FaUsers },
    { name: 'Ayarlar', href: '/settings', icon: FaCog }, // Yeni menü öğesi
];

export default function DashboardPage() {
    const [activeMenu, setActiveMenu] = useState('Teknik Servis');

    const handleLogout = () => {
        // Çıkış işlemleri burada yapılacak
        // useRouter kullanarak login sayfasına yönlendirme yapabilirsiniz
        alert('Çıkış yapıldı!');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sol Menü */}

            {/* Ana İçerik Alanı */}
            <main className="flex-1 flex flex-col p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </header>

                {/* Dashboard Ana Alanları - Buraya bileşenler gelecek */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Hoş Geldiniz, Admin</h2>
                    <p className="text-gray-600">
                        Soldaki menüyü kullanarak cari, teknik servis ve stok yönetimi işlemlerinizi gerçekleştirebilirsiniz.
                    </p>
                </div>

                {/* Sayfa Altı İmza */}
                <footer className="mt-auto text-right text-sm text-gray-500 pt-4">
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
            </main>
        </div>
    );
}
