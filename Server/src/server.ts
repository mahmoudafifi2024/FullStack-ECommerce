import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// مسار تجريبي
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
