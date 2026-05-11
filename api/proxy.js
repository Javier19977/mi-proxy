export default async function handler(req, res) {
  const GOOGLE_URL = "https://script.google.com/macros/s/AKfycbyFMN-lSmsFBOFkmhL76lHG6KcF7JtSnmErAuVfjWNnfIKQxkdr5UNCX1VyBgIeWKeAiw/exec";

  try {
    const response = await fetch(GOOGLE_URL, {
      method: req.method,
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
    });

    const text = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
