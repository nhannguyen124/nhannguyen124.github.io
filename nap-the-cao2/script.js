const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/path/to/your/api', (req, res) => {
    const cardCode = req.body.card_code;
    const cardSeri = req.body.card_seri;
    
    // Kiểm tra mã thẻ và seri (thay thế bằng logic thực tế)
    if (cardCode === '1234567890' && cardSeri === '09876543') {
        res.json({ status: true, msg: 'Nạp thẻ thành công!' });
    } else {
        res.json({ status: false, msg: 'Nạp thẻ thất bại. Mã thẻ hoặc seri không chính xác.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
