import React, { useState } from 'react';
import CustomerApp from './pages/CustomerApp';
import KitchenDashboard from './pages/KitchenDashboard';
import AdminDashboard from './pages/AdminMenu';
import { LayoutDashboard, QrCode, ClipboardList, ChefHat } from 'lucide-react';

const App: React.FC = () => {
  // Simple state-based routing
  const [currentView, setCurrentView] = useState<'landing' | 'customer' | 'owner' | 'admin'>('landing');

  if (currentView === 'customer') {
    return (
      <>
        <CustomerApp />
        {/* Helper to get back to demo landing */}
        <div className="fixed top-8 left-0 z-50 p-1 opacity-10 hover:opacity-100 transition-opacity">
            <button onClick={() => setCurrentView('landing')} className="bg-black text-white text-xs p-1 rounded">Exit Demo</button>
        </div>
      </>
    );
  }

  if (currentView === 'owner') {
     return (
      <>
        <KitchenDashboard />
        <div className="fixed bottom-4 left-4 z-50 flex gap-2">
            <button onClick={() => setCurrentView('landing')} className="bg-black text-white px-3 py-1 text-sm rounded shadow-lg hover:bg-gray-800">Home</button>
            <button onClick={() => setCurrentView('admin')} className="bg-primary text-white px-3 py-1 text-sm rounded shadow-lg hover:bg-red-700">Admin Dashboard</button>
        </div>
      </>
    );
  }

  if (currentView === 'admin') {
    return (
     <>
       <AdminDashboard />
       <div className="fixed bottom-4 left-4 z-50 flex gap-2">
           <button onClick={() => setCurrentView('landing')} className="bg-black text-white px-3 py-1 text-sm rounded shadow-lg hover:bg-gray-800">Home</button>
           <button onClick={() => setCurrentView('owner')} className="bg-secondary text-white px-3 py-1 text-sm rounded shadow-lg hover:bg-gray-700">Kitchen View</button>
       </div>
     </>
   );
 }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-end md:justify-center p-6 text-white relative overflow-hidden">
      
      {/* Website Owner Attribution */}
      <div className="absolute top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white/80 py-2 text-center z-50 font-medium text-xs uppercase tracking-widest">
        Website Owner: Asad Ali
      </div>

      {/* Background Decor */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
        style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1603064755736-ec2093555ae2?q=80&w=2500&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-lg w-full text-center space-y-8 pb-12 md:pb-0 animate-in fade-in zoom-in duration-700">
        <div>
            <div className="w-28 h-28 bg-accent mx-auto rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl border-4 border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[2rem]"></div>
                <span className="text-primary text-7xl font-black relative z-10">M</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter drop-shadow-lg">
                McDonald's <span className="text-accent">Mini</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-sm mx-auto leading-relaxed">
                Experience the future of fast food. Order, track, and enjoy your favorites in seconds.
            </p>
        </div>

        <div className="grid gap-4 mt-8 w-full">
            <button 
                onClick={() => setCurrentView('customer')}
                className="group relative bg-white text-gray-900 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-left flex items-center gap-5 shadow-[0_0_40px_rgba(255,255,255,0.3)] border-4 border-transparent hover:border-accent"
            >
                <div className="bg-primary p-4 rounded-xl text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <QrCode size={28} />
                </div>
                <div className="flex-1">
                    <h3 className="font-black text-xl leading-none mb-1">Start Order</h3>
                    <p className="text-sm text-gray-500 font-medium">Customer Kiosk View</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-accent group-hover:text-primary transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </button>

            <div className="grid grid-cols-2 gap-4">
                <button 
                    onClick={() => setCurrentView('owner')}
                    className="group relative bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left flex flex-col justify-between h-32"
                >
                    <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors mb-2">
                        <ChefHat size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-base text-white">Kitchen</h3>
                        <p className="text-xs text-white/50">Staff View</p>
                    </div>
                </button>

                <button 
                    onClick={() => setCurrentView('admin')}
                    className="group relative bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left flex flex-col justify-between h-32"
                >
                    <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors mb-2">
                        <ClipboardList size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-base text-white">Admin</h3>
                        <p className="text-xs text-white/50">Management</p>
                    </div>
                </button>
            </div>
        </div>
        
        <p className="text-[10px] text-white/30 font-medium uppercase tracking-widest mt-8">
            Butranwali Gujranwala • Powered by Gemini 2.5
        </p>
      </div>
    </div>
  );
};

export default App;