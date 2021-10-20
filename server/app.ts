import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config');
import config from 'config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { authRouter, linkRouter, redirectRouter } from '@routes';

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/links', linkRouter);
app.use('/t', redirectRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join('client', 'build')));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'));
    app.listen(PORT, () => console.log(`App has been started on the port ${PORT}`));
  } catch (e) {
    console.log('Server Error', e);
    process.exit(1);
  }
}

start();
