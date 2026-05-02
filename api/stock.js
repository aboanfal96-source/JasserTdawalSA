// Yahoo Finance proxy for Saudi stocks (Tadawul .SR) — robust version
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  let { symbol = '2222', range = '3mo', interval = '1d' } = req.query;
  symbol = String(symbol).toUpperCase().replace('.SR', '');
  const ySym = symbol + '.SR';
  
  const ua = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
  ];
  const headers = {
    'User-Agent': ua[Math.floor(Math.random() * ua.length)],
    'Accept': 'application/json,text/plain,*/*',
    'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': `https://finance.yahoo.com/quote/${ySym}/`,
    'Origin': 'https://finance.yahoo.com',
    'Cache-Control': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
  };

  // Try v8 chart API on both hosts
  for (const host of ['https://query1.finance.yahoo.com', 'https://query2.finance.yahoo.com']) {
    try {
      const url = `${host}/v8/finance/chart/${ySym}?range=${range}&interval=${interval}`;
      const r = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
      if (!r.ok) continue;
      const d = await r.json();
      if (d?.chart?.result?.[0]) {
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
        return res.status(200).json(d);
      }
    } catch (e) { continue; }
  }

  // Fallback: try without .SR (some symbols work both ways)
  for (const host of ['https://query1.finance.yahoo.com']) {
    try {
      const url = `${host}/v8/finance/chart/${ySym}?range=${range}&interval=${interval}&includePrePost=false`;
      const r = await fetch(url, { headers: { ...headers, 'User-Agent': ua[1] } });
      if (!r.ok) continue;
      const d = await r.json();
      if (d?.chart?.result?.[0]) {
        res.setHeader('Cache-Control', 's-maxage=60');
        return res.status(200).json(d);
      }
    } catch (e) {}
  }

  return res.status(503).json({ error: 'data unavailable', symbol: ySym, hint: 'Yahoo may be blocking datacenter IPs. Try again later.' });
}
