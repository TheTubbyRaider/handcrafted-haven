// pages/api/products.js
export default function handler(req, res) {
    if (req.method === 'GET') {
      const products = [
        { id: 1, name: 'Handmade Mug', price: 15 },
        { id: 2, name: 'Handmade Necklace', price: 25 },
      ];
      return res.status(200).json(products);
    }
  
    if (req.method === 'POST') {
      return res.status(201).json({ message: 'Product added successfully' });
    }
  
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  