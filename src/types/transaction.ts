export interface Transaction {
  id: string;
  type: 'Payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  date: string; 
  pending?: boolean;
  authorizedUser?: string;
  icon: string; 
  iconBgColor: string;
  status?: 'Approved' | 'Pending' | 'Declined';
  cardUsed?: string;
}

export interface CardBalance {
  limit: number;
  balance: number;
  available: number;
}