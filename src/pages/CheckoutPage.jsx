import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { motion } from 'framer-motion';
import { CreditCard, Truck, User, MapPin, Phone } from 'lucide-react';

const CheckoutPage = () => {
  const { cart, placeOrder } = useOrders();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = placeOrder(formData);
    navigate('/success', { state: { orderId: order.id } });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
      <div className="glass" style={{ padding: '40px', borderRadius: '30px' }}>
        <h2 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Truck color="var(--primary)" /> Delivery Details
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
              <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
            <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Delivery Address</label>
            <textarea name="address" required rows="3" placeholder="Street address, apartment, suite, etc." value={formData.address} onChange={handleChange} style={{ resize: 'none' }}></textarea>
          </div>

          <div style={{ marginTop: '10px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Zip Code</label>
            <input type="text" name="zip" required placeholder="10001" value={formData.zip} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px', marginTop: '20px', justifyContent: 'center' }}>
            Complete Order • ${total.toFixed(2)}
          </button>
        </form>
      </div>

      <div>
        <div className="glass" style={{ padding: '30px', borderRadius: '30px', position: 'sticky', top: '120px' }}>
          <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div>
                  <span style={{ fontWeight: 600 }}>{item.quantity}x</span> {item.name}
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Delivery Fee</span>
              <span style={{ color: '#2ecc71', fontWeight: 600 }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
