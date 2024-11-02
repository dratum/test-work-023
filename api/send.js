export default function handler(req, res) {
  const data = req.body;
  res.status(200).json({ name: data.name });
}
