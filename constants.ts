import { LeadStatus } from './types';

// Explicitly define constants to ensure values are correct regardless of order
export const DASHBOARD = '대시보드';
export const SALES_STATUS = '세일즈 현황';
export const DATA_INPUT = '활동 기록';
export const CALENDAR_VIEW = '캘린더';
export const CUSTOMER_DB = '고객사 DB';
export const AI_ASSISTANT = 'AI 어시스턴트';

// Define the navigation order using the constants
export const NAV_TABS = [DASHBOARD, CUSTOMER_DB, AI_ASSISTANT];

export const LEAD_STATUS_OPTIONS = Object.values(LeadStatus);

export const INDUSTRY_OPTIONS = [
  'IT 솔루션',
  '이커머스',
  '금융',
  '게임',
  '컨설팅',
  '핀테크',
  '헬스케어',
  '통신',
  '에너지',
  '엔터테인먼트',
  '데이터 분석',
  '시장 조사',
  '제조업',
  '교육',
  '기타'
];

export const DFINERY_MANAGERS = ['나대표', '이서연', '박도현'];
export const MOBILEINDEX_MANAGERS = ['최지우', '정서윤'];