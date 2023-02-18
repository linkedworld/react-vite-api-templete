import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCog,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilUser,
  cilStar,
  cilSettings,
  cilShieldAlt,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle, CHeaderDivider } from '@coreui/react'

const _menu = [

  {
    component: CNavTitle,
    name: 'MEMBERSHIP',
    badge: {
      color: 'nav-title',
      text: '―――――――――',
    },
  },
  {
    component: CNavGroup,
    name: '회원',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '회원 현황',
        to: '/members/summary',
      },
      {
        component: CNavItem,
        name: '회원 목록',
        to: '/members/list',
      },
      {
        component: CNavItem,
        name: '인기 차트',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        badge: {
          color: 'success',
          text: <CIcon icon={cilSpeedometer}/>,
        },
      },
    
    ],
  },

  {
    component: CNavTitle,
    name: 'LEARNING COURSE',
    badge: {
      color: 'nav-title',
      text: '―――――――',
    },
  },
  {
    component: CNavGroup,
    name: '마추 영어회화',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '목록',
        to: '/character/list',
      },
    ],
  },
  

  {
    component: CNavTitle,
    name: 'ITES',
    badge: {
      color: 'nav-title',
      text: '―――――――――――――――',
    },
  },
  {
    component: CNavGroup,
    name: '캐릭터 관리',
    open: false,
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '목록',
        to: '/character/list',
      },
      {
        component: CNavItem,
        name: '얼굴형',
        to: '/character/face',
      },
      {
        component: CNavItem,
        name: '눈섭',
        to: '/character/eyebrow',
      },
      {
        component: CNavItem,
        name: '인기차트',
        to: '/charts',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: '의상 관리',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '목록',
        to: '/character/list',
      },
      {
        component: CNavItem,
        name: '상의',
        to: '/character/face',
      },
      {
        component: CNavItem,
        name: '하의',
        to: '/character/eyebrow',
      },
    ],
  },


  {
    component: CNavTitle,
    name: 'SPACE',
    badge: {
      color: 'nav-title',
      text: '―――――――――――――――',
    },
  },
  {
    component: CNavGroup,
    name: '공간 모델',
    open: false,
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '목록',
        to: '/character/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: '씬 관리',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '목록',
        to: '/character/list',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'SETTINGS',
    badge: {
      color: 'nav-title',
      text: '―――――――――――――',
    },
  },
  
  {
    component: CNavGroup,
    name: '계정',
    to: '/buttons',
    icon: <CIcon icon={cilShieldAlt} customClassName="nav-icon" />,
    open: true,
    items: [
      {
        component: CNavItem,
        name: '계정 검색',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: '기관 계정',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: '권한 관리',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: '위젯',
        to: '/widgets',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: '설정',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },

// ---------------------------------------------------------


]

export default _menu
