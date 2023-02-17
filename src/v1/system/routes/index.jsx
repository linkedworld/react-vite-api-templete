import React from 'react'

const Dashboard = React.lazy(() => import('@views/admin/dashboard'))

// 회원
const Cards = React.lazy(() => import('@views/admin/members/cards/Cards'))
// const Accordion = React.lazy(() => import('@views/admin/members/ccordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('@views/admin/members/breadcrumbs/Breadcrumbs'))


const routes = [
  { path: '/', exact: true, name: '홈' },
  { path: '/dashboard', name: '대시보드', element: Dashboard },
  
  { path: '/members', name: '회원', element: Cards, exact: true },
  // { path: '/members/list', name: '회원 목록', element: Accordion },
  // { path: '/members/summary', name: '회원 현황', element: Breadcrumbs },
]

export default routes
