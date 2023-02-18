import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { Admin, CustomRoutes, Resource, ListGuesser  } from 'react-admin'
import jsonServerProvider from "ra-data-json-server";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

import theme from './v1/views/admin/theme'

import api from '@api/item'
import books from '@/api/books'
import '@scss/style.scss'

import { useSelector, useDispatch } from 'react-redux'
import { setToken, setIsLogedIn } from '@system/store/slice/loginSlice'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('@layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('@views/templetes/pages/login/Login'))
const Register = React.lazy(() => import('@views/templetes/pages/register/Register'))
const Page404 = React.lazy(() => import('@views/templetes/pages/page404/Page404'))
const Page500 = React.lazy(() => import('@views/templetes/pages/page500/Page500'))

import {list as MemberList, summary as MemberSummary} from '@views/admin/membership/members'

const App = (props) => {
  const isLogedIn = useSelector(state => state.login.isLogedIn)
  const accessToken = useSelector(state => state.login.accessToken)
  const dispatch = useDispatch()

  useEffect(() => {

      dispatch(setIsLogedIn(false))
      books.login("beanalog@naver.com", "Olivia@0530").then( response => {
        if(response?.data?.data !== undefined && response?.data?.data !== null) {
          const result = response?.data
          if (result !== undefined && result !== null) {

              const code = result?.code

              if (code !== undefined && code !== null) {

                if (code === 200) {
                  const token = response?.data?.data[0]?.token
                  dispatch(setToken(token))
                  dispatch(setIsLogedIn(true))
                }
              }
          }
        }
      })

      books.home().then( response => {
        console.log(response.data.data)
      })

      api.characters().then( response => {
        console.log(response.data.data)      
      })
  }, [])

  return (
    <Suspense fallback={loading}>
      <Admin dataProvider={dataProvider} theme={theme}>
          <Resource name="posts" list={MemberList} />
          
          <CustomRoutes noLayout>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" element={<DefaultLayout />} />
          </CustomRoutes>
      </Admin>
    </Suspense>
  )
}

export default App
