import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { useOrders } from '../context/OrderContext';

const FoodCard = ({ item }) => {
  const { addToCart } = useOrders();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass"
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        padding: '15px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', height: '200px', borderRadius: '18px', overflow: 'hidden' }}>
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'rgba(255,255,255,0.9)',
          padding: '4px 8px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.85rem',
          fontWeight: 700
        }}>
          <Star size={14} fill="#f1c40f" color="#f1c40f" />
          {item.rating}
        </div>
      </div>

      <div style={{ marginTop: '15px', padding: '0 5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.category}</p>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
            ${item.price.toFixed(2)}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>20-30 min</p>
          <button 
            onClick={() => addToCart(item)}
            className="btn btn-primary" 
            style={{ 
              padding: '8px 12px', 
              borderRadius: '12px'
            }}
          >
            <Plus size={20} /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
