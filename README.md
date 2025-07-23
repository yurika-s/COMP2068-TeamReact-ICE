# In Class Exercise - Team React

This repo is for the In-class exercise project with [Create React App](https://github.com/facebook/create-react-app) in team react in COMP 2068 JS Frameworks.

## What we create

https://github.com/user-attachments/assets/70fb5ec3-8b88-4502-90c9-09487b1b49d


## Branch
- main: starter code for the exercise
- dev/completed: completed code after the exercise

## Requirements

Node 14 or higher version on your local machine

## Versions

- React 19.1.0
- Material UI 7.2.0

## Extensions

**ES7 React/Redux/GraphQL/React-Native snippets:**  
http://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

## Create React App

Create React App is an officially supported way to create single-page React applications.

### Get Started

```
npx create-react-app [application name]
cd [application name]
npm start
```

Open http://localhost:3000/

### File Structure

```
[application name]
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

\*\*\* You can also install React application thorough Vite which is a fast and modern build tool for creating web applications.

Vite  
https://vite.dev/guide/

## Material UI

### Installation (Default)

```
npm install @mui/material @emotion/react @emotion/styled
```

### Add Roboto Font via Google Font CDN

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

### Install Icons (Optional)

```
npm install @mui/icons-material
```

## Instructions

↓↓↓↓↓↓ The in-class exercise starts from here ↓↓↓↓↓↓

## Get Started

Clone main branch in this project and run the commands below:

```
npm install
npm start
```

## Create Dialog Component

1. Create a new js file named DetailDialog.js under src/components folder
2. Go to the [material UI documentation](https://mui.com/material-ui/react-dialog/#customization)
3. Copy the snippet code of customization dialog and paste it into the new file
4. Add the component to App.js and check if it works
   ```
   import DetailDialog from './components/DetailDialog.js';
   ...
   <Fragment>
   ...
   ...
     <DetailDialog />
   </Fragment>
   ```

## Edit Dialog Component

1. Add info property to get data from its parent
   ```
   export default function CustomizedDialogs({info}) {
   ...
   }
   ```
2. Change dialog title

   ```
   {info.name}
   ```

3. Change dialog content

   ```
    {info.image ? (
      <img src={info.image} alt={info.name} style={{ width: 400 }} />
    ) : (
      <img
        src='https://dummyimage.com/400x600/ddd/fff.png&text=No+Image'
        alt='None'
      />
    )}

    <ul>
      <li>Date of birth: {info.dateOfBirth}</li>
      <li>Gender: {info.gender}</li>
      <li>House: {info.house}</li>
      <li>Actor: {info.actor}</li>
    </ul>
   ```

## Pass the Data from App.js

1. Add an object valuable for setting detailed info

   ```
   const initialDetailInfo = {
     name: '',
     dateOfBirth: '',
     gender: '',
     house: '',
     actor: '',
   };
   ```

2. Add a valuable to handle state values

   ```
    const [open, setOpen] = useState(false);
    const [detailedInfo, setDetailedInfo] = useState(initialDetailInfo);

   ```

3. Add prop to the dialog component

   ```
   <DetailDialog info={detailedInfo} />
   ```

## Add Click Event to App.js and Pass it to ImageList Component

1. Add functionalities to App.js to handle the dialog display

   ```
   const handleClickDetail = (id) => {
     // search the character by id
     const characterInfo = characters.find((character) => character.id === id);
     // set character details and show the dialog
     setDetailedInfo(characterInfo);
     setOpen(true);
   };
   // close dialog
   const handleClose = () => {
     setOpen(false);
   };
   ```

2. Add prop to the child components so that they can call them

   ```
   <TitlebarImageList itemData={characters} handleClickDetail={handleClickDetail} />
   ...
   {open && <DetailDialog info={detailedInfo} handleClose={handleClose} />}
   ```

## Set Event Functionalities in Child Components

1. Dialog component

   ```
   export default function CustomizedDialogs({ info, handleClose }) {
   ...
   <BootstrapDialog
     onClose={handleClose}
     aria-labelledby='customized-dialog-title'
     open='true'
   >
   ...
   <IconButton
     aria-label='close'
     onClick={handleClose}
     sx={(theme) => ({
       position: 'absolute',
       right: 8,
       top: 8,
       color: theme.palette.grey[500],
     })}
   >
   ...

   <Button autoFocus onClick={handleClose}>
     Close
   </Button>
   ...
   }
   ```

2. ImageList component

   ```
   const TitlebarImageList = ({ itemData, handleClickDetail }) => {
     const handleIconClick = (event) => {
       const id = event.currentTarget.getAttribute('data-id');
       handleClickDetail(id);
     };

     ...
     ...

   }
   ```

   ```
   <IconButton
    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
    aria-label={`info about ${item.name}`}
    data-id={item.id}
    onClick={handleIconClick}
   >
    <ReadMoreIcon />
   </IconButton>
   ```

## References

- Official React Documentation​ | https://react.dev​
- React – Hooks Documentation​ | https://react.dev/learn/hooks​
- ReactJS Virtual DOM​ | https://www.geeksforgeeks.org/reactjs/reactjs-virtual-dom/​
- React Tutorial – W3Schools​ | https://www.w3schools.com/react
- Create React App | https://create-react-app.dev/docs/getting-started/
- Material UI | https://mui.com/material-ui/getting-started/installation/
- Harry Potter API | https://hp-api.onrender.com/
