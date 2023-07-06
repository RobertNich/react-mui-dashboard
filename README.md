# react-mui-dashboard


## Features
### Datagrid
#### - Automatic headings
For a lot of the projects I was working on, the keys and values response object would match the required column heading. For example:

```
{
  username: "JohnS",
  user_id: 1,
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
    <DataText>user_id</DataText>
    <DataText>email</DataText>
    <DataText>access_level</DataText>
  </Datagrid>
)
```

### - Digging into objects
In the above example to get the username we were assuming that the object was only one level deep. But what if we have an object like:
```
{
  user: {
    data: {
      username: "JohnS"  
    }
  }
}
```
Simple, just add a dot: `<DataText>user.data.username</DataText>`


#### - Custom Components
There are also a lot of different ways you want to display and use data in a datagrid so I added some components to automatically format for those cases:

`<DataText/>` - Formats text

`<DataCurrency/>` - Removes any non-numbers, Formats to two decimal places, adds commas to separate large numbers and adds a $ prefix.

`<DataDate/>` - Coverts to a date which defaults to 'DD/MM/YYYY - HH:mm' if no format props are specified. This is compatible with the built-in timezone changer on the dashboard an will update the dates to match the selected timezone in real-time.

`<DataCountdown/>` - Takes in a date string and displays a countdown timer. By default, this is styled inside of a chip and changes colour depending on how close the countdown is to completing. 

`<DataLink/>` - Created a clickable link. You can set a url in the props and add {value} if you need to access the value of the data. Alternatively, if you need the value from a different part of the response object, you can specify with the prop: otherValue. For example:
```
 <Datagrid data={data}>
   <DataLink url="user/{value}" otherValue="user_id">username</DataLink>
 </Datagrid>
```

`<DataFunction/>` - Takes a function in the props which it uses on the base data you give it. For example:
Function
```
getFullName(data) {
  return data.first_name + data.last_name
}

return (
  <Datagrid data={data}>
    <DataFunction fn={getFullName} />
  </Datagrid>
)
```

`<DataEnum/>` - Displays corresponding text by passing in an enum via the enumData prop.

`<ChipEnum/>` - Similar to the DataEnum except in chip form and you can pass enums in to control the chip colour.

`<ChipWrapper/>` - Adds a chip around any of the previous components, you can set the variant and colour via the props.

### - Reusable components
All the components listed above do not need the datagrid to work. They all take an optional prop of `data` which can be used to manually pass data in.
Perhaps in the future, I will add a <DataCard /> component which will act sort of like a datagrid by passing the data to a collection of components but laying out the information in a card style.

## Running Locally
- npm i
- npm run dev
