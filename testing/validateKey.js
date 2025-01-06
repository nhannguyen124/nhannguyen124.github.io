export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { apiKey } = req.body;
        // Kiểm tra xem API key có tồn tại trong database không
        // const isValid = await database.exists(apiKey);

        if (isValid) {
            res.status(200).json({ valid: true });
        } else {
            res.status(401).json({ valid: false });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
