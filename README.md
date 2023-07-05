# react-mui-dashboard


## Features
### Datagrid
#### - Automatic headings
For a lot of the projects I was working on, the keys and values response object would match the required column heading. For example:

```
{
  username: "JohnS",
  email: "johns@email.com",
  access_level: 2,
}
```

which would then be put into a datagrid with the column headings: username, email, access level.
So I decided to incorporate automatic headings, with the option to specify one if needed of course, so you only have to tell the datagrid what information you'd like to show. For example:
```
return (
  <Datagrid data={data}>
    <DataText>username</DataText>
    <DataText>email</DataText>
    <DataText>access_level</DataText>
  </Datagrid>
)
```


## Running Locally
- Install dependencies
- npm run dev
