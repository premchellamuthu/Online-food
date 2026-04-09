import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { Search } from 'lucide-react';

const MENU_ITEMS = [
  { id: 1, name: 'Truffle Burger', price: 15.99, category: 'Burgers', rating: 4.8, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Margherita Plus', price: 12.50, category: 'Pizza', rating: 4.5, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Avocado Toast', price: 9.99, category: 'Breakfast', rating: 4.7, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Spicy Ramen', price: 14.50, category: 'Noodles', rating: 4.9, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Crispy Salmon', price: 18.00, category: 'Seafood', rating: 4.6, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Matcha Bowl', price: 11.00, category: 'Dessert', rating: 4.3, image: 'https://images.unsplash.com/photo-1515276427842-78536db298ed?auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Caesar Delight', price: 10.50, category: 'Salads', rating: 4.4, image: 'https://images.unsplash.com/photo-1550317138-100006876381?auto=format&fit=crop&w=800&q=80' },
  { id: 8, name: 'Pepperoni Feast', price: 14.00, category: 'Pizza', rating: 4.7, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' },
  { id: 9, name: 'Chicken Miso Ramen', price: 15.50, category: 'Noodles', rating: 4.8, image: 'https://images.unsplash.com/photo-1557872245-741f4c93021f?auto=format&fit=crop&w=800&q=80' },
  { id: 10, name: 'Blueberry Pancakes', price: 11.50, category: 'Breakfast', rating: 4.6, image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80' },
  { id: 11, name: 'Lava Cake Melt', price: 8.50, category: 'Dessert', rating: 4.9, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80' },
  { id: 12, name: 'Grilled Sirloin Steak', price: 24.99, category: 'Main Course', rating: 4.9, image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=800&q=80' },
  { id: 13, name: 'Greek Salad', price: 12.00, category: 'Salads', rating: 4.5, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80' },
  { id: 14, name: 'Premium Sushi Set', price: 22.50, category: 'Seafood', rating: 4.7, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80' },
];

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Burgers', 'Pizza', 'Breakfast', 'Noodles', 'Seafood', 'Dessert', 'Salads', 'Main Course'];

  const filteredItems = MENU_ITEMS.filter(item =>
    (activeCategory === 'All' || item.category === activeCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fade-in">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Delicious Food,<br /><span style={{ color: 'var(--primary)' }}>Delivered Fast</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Choose from our diverse menu of premium dishes.</p>
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        marginBottom: '40px'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          marginBottom: '20px'
        }}>
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              paddingLeft: '45px',
              borderRadius: '15px',
              border: 'none',
              boxShadow: 'var(--shadow)'
            }}
          />
          <Search
            size={20}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '15px', top: '12px' }}
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '40px',
        overflowX: 'auto',
        padding: '10px 0'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="glass"
            style={{
              padding: '8px 20px',
              borderRadius: '30px',
              border: activeCategory === cat ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
              background: activeCategory === cat ? 'white' : 'var(--glass-bg)',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {filteredItems.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3>No items found for "{searchTerm}"</h3>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
