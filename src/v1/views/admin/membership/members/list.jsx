import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin'
import { Title, ResourceContextProvider, useGetList } from 'react-admin';
import {
  Card,
  TextField as MuiTextField,
  Button,
  Toolbar,
} from '@mui/material'

const Body = (props) => { 
  console.log(`list: `, props)
  return (
    <List resource="posts" component="div" className="w-full p-0 m-0">
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
)}

export default Body
