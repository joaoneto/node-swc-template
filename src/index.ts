import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('> Running: http://localhost:3000');
});
