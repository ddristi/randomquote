const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch').default;


const app = express();
app.use(cors());

app.get('/quotes',async (req, res) => {
    try {
      const response = await fetch('https://zenquotes.io/api/random');
  
      if (!response.ok) {
        throw new Error(`Quotable API returned status ${response.status}`);
      }
  
      const data = await response.json();
      res.json(data[0]);
    } catch (err) {
      console.error("Live fetch failed:", err.message);
      res.status(500).json({ error: "Failed to fetch quote" });
    }
  })

const port = process.env.PORT || 4000

app.listen(port, () =>{
    console.log(`Server is live at http://localhost:${port}`);
    
})