
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HotelCard from './components/HotelCard';
import AIAssistant from './components/AIAssistant';
import { MOCK_HOTELS } from './constants';
import { Hotel } from './types';

const App: React.FC = () => {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(MOCK_HOTELS);

  const handleSearch = (city: string) => {
    if (city === 'all') {
      setFilteredHotels(MOCK_HOTELS);
    } else {
      setFilteredHotels(MOCK_HOTELS.filter(h => h.city === city));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero onSearch={handleSearch} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Why Choose Us Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-600/5 p-8 rounded-2xl border border-emerald-100 text-center">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">أمان ومصداقية</h3>
            <p className="text-emerald-700/80">حجوزات مؤكدة وتعاملات آمنة لضمان راحتك خلال رحلتك.</p>
          </div>
          <div className="bg-emerald-600/5 p-8 rounded-2xl border border-emerald-100 text-center">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">أفضل الأسعار</h3>
            <p className="text-emerald-700/80">نضمن لك الحصول على أفضل عروض الفنادق بأقل تكلفة ممكنة.</p>
          </div>
          <div className="bg-emerald-600/5 p-8 rounded-2xl border border-emerald-100 text-center">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">قرب من الحرم</h3>
            <p className="text-emerald-700/80">فنادق مختارة بعناية لتكون على بعد خطوات من الحرمين الشريفين.</p>
          </div>
        </section>

        {/* Hotels Grid */}
        <div id="hotels" className="scroll-mt-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">الفنادق المتوفرة</h2>
              <p className="text-gray-500 mt-1">اكتشف أفضل خيارات السكن لرحلة عمرة لا تُنسى</p>
            </div>
            <div className="text-sm font-medium text-emerald-600">
              تم العثور على {filteredHotels.length} فندق
            </div>
          </div>

          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border">
              <p className="text-xl text-gray-400">نعتذر، لا توجد فنادق تطابق بحثك حالياً.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">م</span>
                </div>
                <span className="text-2xl font-bold">مصطفى للتسكين</span>
              </div>
              <p className="text-emerald-100/60 leading-relaxed">
                شريكك الموثوق في رحلتك الإيمانية. نقدم خدمات تسكين العمرة منذ أكثر من 10 سنوات بخبرة واحترافية عالية.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 border-b border-emerald-800 pb-2">روابط سريعة</h4>
              <ul className="space-y-4 text-emerald-100/80">
                <li><a href="#" className="hover:text-white transition">فنادق مكة</a></li>
                <li><a href="#" className="hover:text-white transition">فنادق المدينة</a></li>
                <li><a href="#" className="hover:text-white transition">عروض الموسم</a></li>
                <li><a href="#" className="hover:text-white transition">سياسة الإلغاء</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 border-b border-emerald-800 pb-2">تواصل معنا</h4>
              <ul className="space-y-4 text-emerald-100/80">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>966-500-000-000+</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@mustafa-umrah.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 border-b border-emerald-800 pb-2">النشرة الإخبارية</h4>
              <p className="text-sm text-emerald-100/60 mb-4">اشترك للحصول على آخر عروض الفنادق والخصومات.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="بريدك الإلكتروني" className="bg-emerald-800/50 border-none rounded-lg px-4 py-2 flex-1 outline-none focus:ring-1 focus:ring-emerald-400" />
                <button className="bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-500 transition">سجل</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-emerald-800 text-center text-sm text-emerald-100/40">
            &copy; {new Date().getFullYear()} مصطفى لتسكين العمرة. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* Floating Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
