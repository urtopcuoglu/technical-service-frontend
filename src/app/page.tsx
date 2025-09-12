'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (username === 'admin' && password === 'Admin123') {
            // Doğru giriş, ana sayfaya (dashboard) yönlendir
            router.push('/dashboard');
        } else {
            // Hatalı giriş
            setError('Kullanıcı adı veya şifre hatalı.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/logo/logo.png"
                        alt="Firma Logosu"
                        width={150} // Logonun genişliğini ayarlayın
                        height={150} // Logonun yüksekliğini ayarlayın
                    />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Giriş Yap
                </h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
                            Kullanıcı Adı
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                            Şifre
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-3 px-4 rounded-lg shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Giriş Yap
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/register">
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
              Yeni kullanıcı oluşturmak için tıklayınız
            </span>
                    </Link>
                </div>
            </div>
            <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">
          System Design by{' '}
            <a
                href="https://urtopcuoglu.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
            urtdigital
          </a>
        </span>
            </div>
        </div>
    );
}
