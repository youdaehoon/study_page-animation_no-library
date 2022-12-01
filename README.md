# page animation without library  
## 배포  
- deploy by vercel  
https://study-page-animation-no-library.vercel.app/
## setting  
### CRA  
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### file-structure
```
|   App.css
|   App.js
|   App.test.js
|   content.js      //animation logic이 존재하는 파일
|   index.css
|   index.js
|   logo.svg
|   reportWebVitals.js
|   setupTests.js
|
+---components
|       Header.js
|
+---pages
|       admin.js
|       main.js
|       users.js
|
\---styles
        pagetransition.css  // animation css logic이 존재하는 파일
```
