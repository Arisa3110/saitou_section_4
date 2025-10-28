//{
  //"id": 2,
  //"date": "2025-10-05",
  //"type": "expense",
  //"amount": 12000,
  //"category": "食費",
  //"description": "スーパーで買い物"
//}

export type Transaction = {
  id: number;
  date: string; // ISO形式
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
};