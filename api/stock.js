// Yahoo Finance proxy for Saudi stocks (Tadawul .SR)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  let { symbol = '2222', range = '3mo', interval = '1d' } = req.query;
  // Auto-add .SR suffix if not present
  symbol = String(symbol).toUpperCase();
  if (!symbol.endsWith('.SR')) symbol += '.SR';
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
    'Accept': 'application/json,*/*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://finance.yahoo.com/',
  };
  for (const host of ['https://query1.finance.yahoo.com', 'https://query2.finance.yahoo.com']) {
    try {
      const url = `${host}/v8/finance/chart/${symbol}?range=${range}&interval=${interval}&includePrePost=true`;
      const r = await fetch(url, { headers });
      if (!r.ok) continue;
      const d = await r.json();
      if (d?.chart?.result?.[0]) {
        res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
        return res.status(200).json(d);
      }
    } catch (e) { continue; }
  }
  return res.status(503).json({ error: 'data unavailable', symbol });
}
