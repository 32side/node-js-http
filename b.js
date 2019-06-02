let body = [];
req.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  const decoded = decodeURIComponent(body);
  console.info('[' + now + '] 投稿: ' + decoded);
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>' +
    decoded + 'が投稿されました</h1></body></html>');
  res.end();
});