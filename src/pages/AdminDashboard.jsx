import React from 'react';
import { useOrders } from '../context/OrderContext';
import { Package, Clock, CheckCircle, User, MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const { orders, clearOrders } = useOrders();

  return (
    <div className="fade-in">
      <header style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          <div>
            <h1 style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Package size={36} color="var(--primary)" /> 
              Admin Dashboard
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>Monitor and manage incoming food orders in real-time.</p>
          </div>
          {orders.length > 0 && (
            <button 
              onClick={clearOrders}
              className="btn"
              style={{ background: '#2f3542', color: 'white', padding: '10px 20px' }}
            >
              Clear All Orders
            </button>
          )}
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
        {orders.length === 0 ? (
          <div className="glass" style={{ padding: '60px', textAlign: 'center', gridColumn: '1 / -1', borderRadius: '30px' }}>
            <h3>No orders received yet.</h3>
            <p style={{ color: 'var(--text-muted)' }}>Incoming orders will appear here automatically.</p>
          </div>
        ) : (
          orders.map((order) => (
            <motion.div 
              key={order.id} 
              className="glass" 
              style={{ padding: '25px', borderRadius: '25px', display: 'flex', flexDirection: 'column', gap: '20px' }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', background: 'rgba(255, 71, 87, 0.1)', padding: '4px 10px', borderRadius: '10px' }}>
                    #{order.id}
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                    {new Date(order.timestamp).toLocaleString()}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#2ecc71', fontWeight: 700 }}>
                  <Clock size={16} /> {order.status}
                </div>
              </div>

              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', fontWeight: 600 }}>
                  <User size={16} /> {order.customer.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <MapPin size={16} /> {order.customer.address}
                </div>
              </div>

              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '0.9rem', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Items Ordered</h4>
                {order.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '5px' }}>
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '2px solid #eee', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700 }}>Total Earned</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>${order.total.toFixed(2)}</span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
