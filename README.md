# File Uploader Component

Project for File Uploader Component in react

### Installation

`npm install --save file-uploader-react-basics`

### How To Use

1 Step :-
Adding a Bootstrap 4.4.1

- Add below link in :- public/index.html

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />`

OR

- import "bootstrap.min.css" in root component of your project,  
  `import "file-uploader-react-basics/assets/bootstrap.min.css";`

2 Step :-
First import this component where you want to use it.
Then import the stylesheet for the component.

```
import "file-uploader-react-basics/assets/bootstrap.min.css"; // only if bootstrap CDN is not imported in public/index.html
import "file-uploader-react-basics/src/app.css";
import FileUploader from "file-uploader-react-basics";
```

Then just renders it

`<FileUploader onSelectFile= { function to get selected file }/>`

### Props

|    _Prop_    |            _Description_            |                 _Default value_                  |  _Required_  |
| :----------: | :---------------------------------: | :----------------------------------------------: | :----------: |
| onSelectFile | function() to get the selected file | return Object { name: element name, value: file} |   required   |
| sizeErrorMsg |     user can add Custome error      |            max size is \${maxSize} KB            | not required |
|              |  meassage for file size validation  |                                                  |              |
| extErrorMsg  |     user can add Custome error      |      "Choose a file with correct extension"      | not required |
|              |     meassage for file extension     |                                                  |              |
|   fileType   |  user can add array of file types   |                  Empty Array []                  | not required |
|   maxSize    |  user can add maximum size for the  |                                                  | not required |
|              |         selected file in KB         |                       0 KB                       |              |

### Example

```
import "file-uploader-react-basics/assets/bootstrap.min.css";
import "file-uploader-react-basics/src/app.css";
import FileUploader from "file-uploader-react-basics";

function App() {
const onSelectFile = e => {
console.log("selected file", e);
};
return (

<div className="App">

 <FileUploader
    name="image"
    onSelectFile={onSelectFile}
    sizeErrorMsg="Selected file should be in size less than 1 KB "
    fileType={["xls", "pdf", "doc"]} // array of files extensions
    extErrorMsg="Selected file should be of type xls, pdf and doc "
    maxSize={1} //size in KB
    />
 </div>
);
}

export default App;
```
