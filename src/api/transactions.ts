import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// バリデーションスキーマ
const transactionSchema = z.object({
  date: z.string(),
  amount: z.number(),
  category: z.string(),
  memo: z.string().optional()
});

// GET一覧
router.get('/', (req, res) => {
  res.json([
    { id: 1, date: '2025-10-29', amount: -1200, category: 'food', memo: 'ランチ' }
  ]);
});

// POST新規登録
router.post('/', (req, res) => {
  const parseResult = transactionSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: 'Invalid data format', details: parseResult.error.errors });
  }
  res.status(201).json({ id: 2, status: 'created' });
});

export default router;