export default (req, res) => req.method == "GET" ? 
   res.status(200).json({ nome: "Joao"}) : 
   res.status(200).json({ nome: "Lucas"})