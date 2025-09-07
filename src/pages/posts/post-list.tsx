import {
  Datagrid,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  EditButton,
  TextInput,
  ReferenceInput,
} from "react-admin";

export const PostList = () => {
  const postFilters = [
    <>
      <TextInput key="search" source="q" label="Search" alwaysOn />
      <ReferenceInput
        key="user"
        source="userId"
        label="User"
        reference="users"
      />
    </>,
  ];

  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" label="Post Title" />
        <FunctionField
          label="Excerpt"
          render={(record) => `${record.body.substring(0, 50)}...`}
        />
        <ReferenceField source="userId" reference="users" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
