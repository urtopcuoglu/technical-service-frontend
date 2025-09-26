'use client';

import React from 'react';
import Link from 'next/link';
import { FaPlus, FaSearch } from 'react-icons/fa';

export default function CustomersPage() {
    return (
        <div className="flex-1 flex flex-col p-8 bg-gray-50">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Müşteriler</h1>
            </header>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-4">
                    <Link href="/customers" passHref>
                        <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded-lg shadow-md flex items-center">
                            Cari Kayıtları
                        </button>
                    </Link>
                    <Link href="/customers/add-customer" passHref>
                        <button className="bg-green-600 hover:bg-green-700 transition-all text-white font-bold py-2 px-4 rounded-lg shadow-md flex items-center gap-2">
                            <FaPlus /> Cari Kaydı Oluştur
                        </button>
                    </Link>
                </div>
                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Müşteri ara..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Müşteri Listesi Alanı */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 text-center text-gray-500">
                <p>Müşteri listesi buraya gelecek.</p>
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
        </div>
    );
}
