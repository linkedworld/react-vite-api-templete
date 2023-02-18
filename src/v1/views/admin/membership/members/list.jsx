import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin'

import {style} from '@views/admin/theme/react-admin'

const Body = (props) => {
  return (
    <div className="w-full bg-white">
      <List resource="posts" component="div" className="w-full p-0 m-0">
          <Datagrid sx={style.Grid}>
              <TextField source="id" />
              <TextField source="title" />
              <DateField source="published_at" />
              <TextField source="category" />
              <BooleanField source="commentable" />
          </Datagrid>
      </List>
    </div>
)}

export default Body
