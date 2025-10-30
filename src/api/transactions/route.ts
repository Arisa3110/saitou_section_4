import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 1, date: '2025-10-01', type: 'income', amount: 50000, category: '給料', description: '10月分の給料' },
    { id: 2, date: '2025-10-05', type: 'expense', amount: 12000, category: '食費', description: 'スーパーで買い物' }
  ]);
}
