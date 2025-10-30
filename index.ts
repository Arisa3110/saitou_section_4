import express from 'express';
import transactionsRouter from './api/transactions';
import summaryRouter from './api/summary';
import categoriesRouter from './api/categories';

const app = express();
app.use(express.json());

// ルーター登録
app.use('/api/transactions', transactionsRouter);
app.use('/api/summary', summaryRouter);
app.use('/api/categories', categoriesRouter);

// ポート設定（Next.jsとは別ポート）
const PORT = 4000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));