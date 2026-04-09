import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart } = useOrders();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1001,
        }}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '400px',
          maxWidth: '90%',
          background: 'white',
          zIndex: 1002,
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '30px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag color="var(--primary)" /> Your Cart
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '100px', color: 'var(--text-muted)' }}>
              <p>Your cart is empty.</p>
              <button 
                onClick={onClose}
                className="btn btn-primary" 
                style={{ marginTop: '20px', marginInline: 'auto' }}
              >
                Go to Menu
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  marginBottom: '20px', 
                  paddingBottom: '20px', 
                  borderBottom: '1px solid #f0f0f0',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }} 
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem' }}>{item.name}</h4>
                  <p style={{ color: 'var(--primary)', fontWeight: 700 }}>${item.price.toFixed(2)}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      background: '#f8f9fa', 
                      padding: '4px 10px', 
                      borderRadius: '8px' 
                    }}>
                      <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}><Minus size={14} /></button>
                      <span style={{ fontWeight: 600 }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}><Plus size={14} /></button>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff4757', padding: '5px' }}
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ marginTop: '30px', borderTop: '2px solid #f0f0f0', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Total</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>${total.toFixed(2)}</span>
            </div>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '15px' }}
              onClick={() => {
                onClose();
                navigate('/checkout');
              }}
            >
              Checkout Now
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
