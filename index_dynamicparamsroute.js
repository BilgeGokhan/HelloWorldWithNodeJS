const express = require('express');
const app = express();

app.get('/galeri/:categoryUrl/:titleUrl', (req, res) => {
    const category = req.params.categoryUrl;
    const titleUrl = req.params.titleUrl;
    
    res.send(`${category} kategorisindeki ${titleUrl} içeriğine bakıyorsunuz.`);
   });
   
app.listen(3000, ()=> {
    console.log('Uygulama çalıştırıldı');
});