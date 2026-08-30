export interface ResourceItem {
  id: string;
  category: 'Technical Datasheet' | 'Case Study' | 'Corporate Brochure' | 'QHSE Policy';
  date: string;
  title: string;
  description: string;
  fileSize?: string;
  downloadUrl?: string;
}
