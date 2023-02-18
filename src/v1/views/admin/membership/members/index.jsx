import React from 'react'

const summary = React.lazy(() => import('./summary'))
const list = React.lazy(() => import('./list'))


export {
    summary, list
}