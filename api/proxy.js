
export default async function handler(req, res) {
  const GOOGLE_URL = "https://script.google.com/macros/s/AKfycbyFMN-lSmsFBOFkmhL76lHG6KcF7JtSnmErAuVfjWNnfIKQxkdr5UNCX1VyBgIeWKeAiw/exec";
  
  const response = await fetch(GOOGLE_URL, {
    method: req.method,
    body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
  });
  
  const data = await response.json();
  res.status(200).json(data);
}
