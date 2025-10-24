import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { User, Star, MessageSquare } from "lucide-react";

const TelegramMiniApp = () => {
  const [tab, setTab] = useState('stats');
  const user = { name: "Ahmet", posts: 42, likes: 312, followers: 128 };

  const data = [
    { name: "Pzt", value: 5 },
    { name: "Sal", value: 8 },
    { name: "Çar", value: 3 },
    { name: "Per", value: 9 },
    { name: "Cum", value: 7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Telegram İstatistik</h1>

      <div className="flex justify-center space-x-3 mb-4">
        <button onClick={() => setTab('stats')} className={tab === 'stats' ? 'bg-indigo-600 px-3 py-1 rounded' : 'bg-slate-700 px-3 py-1 rounded'}>İstatistik</button>
        <button onClick={() => setTab('achievements')} className={tab === 'achievements' ? 'bg-indigo-600 px-3 py-1 rounded' : 'bg-slate-700 px-3 py-1 rounded'}>Rozetler</button>
        <button onClick={() => setTab('ai')} className={tab === 'ai' ? 'bg-indigo-600 px-3 py-1 rounded' : 'bg-slate-700 px-3 py-1 rounded'}>AI Yardım</button>
      </div>

      {tab === 'stats' && (
        <div className="bg-slate-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2 flex items-center"><User className="mr-2" /> {user.name}</h2>
          <p>Post: {user.posts} | Beğeni: {user.likes} | Takipçi: {user.followers}</p>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {tab === 'achievements' && (
        <div className="bg-slate-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-3 flex items-center"><Star className="mr-2" /> Rozetler</h2>
          <ul className="space-y-2">
            <li>🏅 10 Gönderi</li>
            <li>🔥 100 Beğeni</li>
            <li>👑 50 Takipçi</li>
          </ul>
        </div>
      )}

      {tab === 'ai' && (
        <div className="bg-slate-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-3 flex items-center"><MessageSquare className="mr-2" /> AI Sohbet</h2>
          <p>Yakında: Kendi Telegram analizlerinizi AI ile tartışın.</p>
        </div>
      )}
    </div>
  );
};

export default TelegramMiniApp;