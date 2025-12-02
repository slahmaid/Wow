import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { CheckoutModal } from './components/ui/CheckoutModal';
import { CartDrawer } from './components/layout/CartDrawer';
import { CartProvider } from './context/CartContext';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Technology } from './pages/Technology';
import { Support } from './pages/Support';

const App: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-neutral-950 selection:bg-solar-500 selection:text-black overflow-x-hidden">
          <Navbar onOpenCheckout={handleOpenCheckout} />
          
          <CartDrawer onCheckout={handleOpenCheckout} />

          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home onOpenCheckout={handleOpenCheckout} />} />
              <Route path="/shop" element={<Shop onOpenCheckout={handleOpenCheckout} />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          
          <Footer />
          <StickyMobileCTA onOpenCheckout={handleOpenCheckout} />
          
          <CheckoutModal 
            isOpen={isCheckoutOpen} 
            onClose={handleCloseCheckout} 
          />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;