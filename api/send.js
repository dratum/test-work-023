export default function handler(req, res) {
  console.log(req.method);

  const data = req.body;
  console.log(data);

  res.status(200).json({ name: data.name });
}
