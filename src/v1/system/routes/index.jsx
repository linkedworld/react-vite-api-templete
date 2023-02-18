import React from 'react'

// 대시보드
const Dashboard = React.lazy(() => import('@views/admin/dashboard'))

// 회원
import {list as MemberList, summary as MemberSummary} from '@views/admin/membership/members'

//라우터
const routes = [
  { path: '/', exact: true, name: '홈' },
  { path: '/dashboard', name: '대시보드', element: Dashboard },
  
  { path: '/members', name: '회원', element: MemberSummary, exact: true },
  { path: '/members/summary/*', name: '회원 현황', element: MemberSummary },
  // { path: '/members/list/*', name: '회원 목록', element: MemberList },

  { path: '/posts/*', name: '회원 목록', element: MemberList },
]

export default routes
