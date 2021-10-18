import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import { authRouter, linkRouter, redirectRouter } from '@routes';

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/links', linkRouter);
app.use('/t', redirectRouter);

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'));
    app.listen(PORT, () => console.log(`App has been started on the port ${PORT}`));
  } catch (e) {
    console.log('Server Error', e);
    process.exit(1);
  }
}

start();
