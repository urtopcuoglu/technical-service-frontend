// src/app/service-tickets/page.tsx
import React from 'react';
import Link from 'next/link';

// API'ye yapılacak çağrılar için temel URL'yi ortam değişkeninden alıyoruz.
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ServiceTicket {
    id: number;
    brand: string;
    model: string;
    description: string;
    status: string;
    receivedDate: string;
}

// Sunucu tarafında veri çeken fonksiyon (Next.js Server Component özelliği)
async function getServiceTickets(): Promise<ServiceTicket[]> {
    const res = await fetch(`${API_URL}/servicetickets`, {
        cache: 'no-store' // Verilerin her istekte güncellenmesini sağlar.
    });

    if (!res.ok) {
        // Hata durumunda hata mesajı fırlatır
        throw new Error('Servis fişleri çekilemedi.');
    }

    return res.json();
}

export default async function ServiceTicketsPage() {
    const serviceTickets = await getServiceTickets();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Servis Fişleri</h1>
            <Link href="/">
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mb-4">Ana Sayfa</button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceTickets.length > 0 ? (
                    serviceTickets.map((ticket) => (
                        <div key={ticket.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{ticket.brand} {ticket.model}</h2>
                            <p className="text-gray-600">Durum: <span className="font-medium text-blue-500">{ticket.status}</span></p>
                            <p className="text-sm text-gray-400 mt-2">Alınış Tarihi: {new Date(ticket.receivedDate).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Henüz servis fişi bulunmuyor. Lütfen backend veri ekleyin.</p>
                )}
            </div>
        </div>
    );
}
