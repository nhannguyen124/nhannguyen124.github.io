const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const newApiKey = uuidv4();
        // Lưu API key vào database (ví dụ MongoDB)
        // await database.save({ key: newApiKey });

        res.status(201).json({ apiKey: newApiKey });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
