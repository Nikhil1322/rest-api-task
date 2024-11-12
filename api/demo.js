const cors = require('cors');

// Define your demo data with image URLs
const demoData = [
  {
    id: 1,
    name: "Item 1",
    imageUrl: "https://discoverpilgrim.com/cdn/shop/files/10_VitaminCFaceSerum_30ml_1080x1080_White-Background-with-claim.jpg"
  },
  {
    id: 2,
    name: "Item 2",
    imageUrl: "https://discoverpilgrim.com/cdn/shop/files/10_VitaminCFaceSerum_30ml_1080x1080_White-Background-with-claim.jpg"
  },
  {
    id: 3,
    name: "Item 3",
    imageUrl: "https://discoverpilgrim.com/cdn/shop/files/10_VitaminCFaceSerum_30ml_1080x1080_White-Background-with-claim.jpg"
  }
];

// Export your function and use CORS middleware
module.exports = (req, res) => {
    // Set CORS options
    const corsOptions = {
        origin: '*',  // Allows all origins, or specify a domain like 'https://example.com'
        methods: ['GET', 'POST', 'OPTIONS'],  // Allowed HTTP methods
        allowedHeaders: ['X-Requested-With', 'Content-Type']  // Allowed headers
    };

    // Apply CORS and handle the request
    cors(corsOptions)(req, res, () => {
        res.status(200).json(demoData);
    });
};
