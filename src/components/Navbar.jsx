import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, LayoutDashboard, UtensilsCrossed, X, Menu as MenuIcon } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { motion, AnimatePresence } from 'framer-motion';
import Cart from './Cart';

const Navbar = () => {
  const { cart } = useOrders();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      padding: '15px 30px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
        <UtensilsCrossed size={32} />
        <span>FunFoodie</span>
      </Link>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ fontWeight: 600 }}>Menu</Link>
          <Link to="/admin" style={{ fontWeight: 600 }}>Admin</Link>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            padding: '5px'
          }}
        >
          <ShoppingCart size={24} color="var(--secondary)" />
          {cartItemsCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}
            >
              {cartItemsCount}
            </motion.span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isCartOpen && <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
