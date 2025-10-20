export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  statusId: string;
  clientId: string;
  dueDate: string;      // ISO YYYY-MM-DD
  createdAt: string;
  updatedAt?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  createdAt: string;
  notes?: string;
}

export interface Status {
  id: string;      // 'todo' | 'in-progress' | 'done'
  label: string;
  color: string;   // HEX
  order: number;
}

export interface UserSession {
  userId: string;
  username: string;
  token: string;
  expiresAt: string;
}