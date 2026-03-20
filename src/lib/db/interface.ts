export interface Enterprise {
  id: number;
  name: string;
  type: string;
  jurisdiction: string;
  description: string | null;
  website: string | null;
  created_at: string;
}

export interface Submission {
  id: number;
  name: string;
  type: string;
  jurisdiction: string;
  description: string | null;
  website: string | null;
  contact_email: string;
  status: string;
  submitted_at: string;
}

export interface Database {
  getAllEnterprises(): Enterprise[];
  getPendingSubmissions(): Submission[];
  createSubmission(data: {
    name: string;
    type: string;
    jurisdiction: string;
    description: string;
    website: string;
    contact_email: string;
  }): void;
  approveSubmission(id: number): void;
  rejectSubmission(id: number): void;
}
