addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

const headers = {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'ru-RU,ru;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Content-Type': 'application/json',
  'DNT': '1',
  'Host': 'api.aicloud.sbercloud.ru',
  'Origin': 'https://russiannlp.github.io',
  'Pragma': 'no-cache',
  'Referer': 'https://russiannlp.github.io/',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36',
  'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
  'sec-ch-ua-mobile': '?1',
  'sec-ch-ua-platform': '"Android"'
};

async function handleRequest(request) {
  const jsonRequest = await request.json();
  console.log(jsonRequest);
  const jsonPrediction = await getPrediction(jsonRequest);
  let response = new Response(JSON.stringify(jsonPrediction));
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("content-type", "application/json;charset=UTF-8");
  return response;
}

async function getPrediction(jsonQuery) {
  const response = await fetch('https://api.aicloud.sbercloud.ru/public/v1/public_inference/gpt3/predict', {
    method: 'POST',
    body: JSON.stringify(jsonQuery),
    headers: headers,
  });
  return await response.json();
}
