
export enum LeadStatus {
  NEW = '신규 유입',
  DEV_ON = '디벨롭 ON',
  PROPOSAL = '견적 제안',
  CONTRACT_REVIEW = '계약 검토',
  DEV_OUT = '디벨롭 OUT',
  CONTRACT = '계약 완료',
  HOLD = '보류',
  REJECTED = '거절',
}

export enum ContactStatus {
  ACTIVE = '재직중',
  INACTIVE = '퇴사',
}

export interface HistoryItem {
  id: string;
  date: string; // YYYY-MM-DD
  status: LeadStatus;
  note: string;
  author: string;
  department?: string;
  serviceName?: string;
  contractStartDate?: string; // YYYY-MM-DD
  contractEndDate?: string; // YYYY-MM-DD
  activityType?: 'meeting' | 'proposal' | 'contract' | 'other';
  contractAmount?: number;
  devOutReason?: '가격' | '기능 미스매치' | '타이밍 부적합' | '내부 검토 지연' | '기타';
  rejectionReason?: '가격' | '경쟁사 도입' | '프로젝트 드랍' | '기능 부족' | '기타';
}

export interface ContactPerson {
  id: string;
  name: string;
  department: string;
  email: string;
  phone: string;
  notes?: string;
  lastContactDate: string; // YYYY-MM-DD
  status: ContactStatus;
}

export interface Lead {
  id: string;
  company: string;
  manager: string;
  status: LeadStatus;
  lastUpdate: string; // YYYY-MM-DD
  userId: string;
  history: HistoryItem[];
  industry?: string;
  contacts?: ContactPerson[];
  channel?: string;
  sourceType?: 'inbound' | 'outbound';
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  userId: string;
}

export interface Email {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  received: string;
  body: string;
}

export interface Memo {
  id: string;
  content: string;
  savedAt: string;
}

export interface NextAction {
  id: string;
  content: string;
  date: string;
  isAdded?: boolean;
}

export interface AISummary {
  company: string;
  status: LeadStatus;
  summary: string;
  nextActions: NextAction[];
  extractedContact?: ExtractedContactInfo;
  industry: string;
}

export interface ExtractedContactInfo {
  companyName: string;
  contactName: string;
  department?: string;
  email?: string;
  phone?: string;
}

export interface ChartDataKey {
  key: string;
  name: string;
}

export interface DashboardWidget {
  id:string;
  widgetType: 'bar' | 'kpi' | 'text';
  title: string;
  description?: string;
  data?: any[];
  dataKeys?: ChartDataKey[];
  xAxisDataKey?: string;
  value?: string;
  unit?: string;
  content?: string;
  pinnedTo?: 'my' | 'team' | null;
}

export interface AITodoSuggestion {
  task: string;
  reason: string;
  leadId: string;
  companyName: string;
}

export interface OutboundAnalysisResult {
  companyName: string;
  score: number;
  reasoning: string;
  contactName?: string;
  contactEmail?: string;
}

export interface CategorizedOutboundAnalysis {
  recommended: OutboundAnalysisResult[];
  interesting: OutboundAnalysisResult[];
}

export interface HistoryItemView extends HistoryItem {
    leadId: string;
}

export interface CompanyData {
    companyName: string;
    industry?: string;
    summary: string;
    aiSummary?: string | null; // undefined: not fetched, null: loading, string: loaded
    history: HistoryItemView[];
    contacts: ContactPerson[];
}

export interface WeeklyReportMetric {
  newLeads: number;
  contractsWon: number;
  contractValue: number;
  dealsLost: number;
}

export interface WeeklyReportData {
  summary: string;
  keyAchievements: string[];
  keyIssues: string[];
  nextWeekPlan: string[];
  keyMetrics: WeeklyReportMetric;
  reportDateRange: string;
}