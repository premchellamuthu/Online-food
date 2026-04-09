import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';

const SuccessPage = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || 'UNKNOWN';

  return (
    <div className="fade-in" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingTop: '60px',
      textAlign: 'center' 
    }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
        style={{ marginBottom: '30px' }}
      >
        <CheckCircle size={100} color="#2ecc71" />
      </motion.div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Order Confirmed!</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', marginBottom: '30px' }}>
        Thank you for your order. Your food is being prepared and will be with you shortly.
      </p>

      <div className="glass" style={{ padding: '20px 40px', borderRadius: '20px', marginBottom: '40px' }}>
        <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Order ID</p>
        <h3 style={{ color: 'var(--primary)', letterSpacing: '2px' }}>#{orderId}</h3>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" className="btn btn-primary">
          <ShoppingBag size={20} /> Order More
        </Link>
        <Link to="/admin" className="btn" style={{ background: '#2f3542', color: 'white' }}>
          View in Admin <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
