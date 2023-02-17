import React from 'react'

// 대시보드
const Dashboard = React.lazy(() => import('@views/admin/dashboard'))

// 회원
const MemberSummary = React.lazy(() => import('@/v1/views/admin/members/summary'))
const MemberList = React.lazy(() => import('@/v1/views/admin/members/summary'))

//라우터
const routes = [
  { path: '/', exact: true, name: '홈' },
  { path: '/dashboard', name: '대시보드', element: Dashboard },
  
  { path: '/members', name: '회원', element: MemberSummary, exact: true },
  { path: '/members/list', name: '회원 목록', element: MemberList },
  { path: '/members/summary', name: '회원 현황', element: MemberSummary },
]

export default routes
