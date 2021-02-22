import nanoexpress from 'nanoexpress';

const app = nanoexpress();

// Try removing the "any" and you will get ts error.
app.get('/', (_req, res): any => {
  return res.send({ status: 'ok' });
});

app.listen(3000);