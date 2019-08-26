// var arr1 = [1, 2, 3];
// var arr2 = [0, 8, 9, 11, 13, 15];

// var newArr = [];
// const arrsort = (arr1, arr2) => {
//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) {
//       newArr.push(arr1.shift());
//     } else {
//       newArr.push(arr2.shift());
//     }
//   }
//   newArr = [...newArr, ...arr1, ...arr2];
//   return newArr;
// };

// var result = arrsort(arr1, arr2);
// console.log(result);

// class App {
//   value = 9;

//   handle = () => {
//     console.log(this.value);
//   };
// }

// var app = new App();
// app.handle();

// class App2 extends App {
//   constructor() {
//     super();
//     this.value2 = 10;
//     this.value = 1;
//   }
//   handle2() {
//     console.log(this.value, this.value2);
//   }
// }

// var app2 = new App2();
// app2.handle2();

// var obj = {
//   name: "jafeel"
// };

// var obj2 = {};
// obj2 = { ...obj, age: 20 };
// console.log(obj2);

// import React from "react";
// import ReactDOM from "react-dom";

// const element = <div>hello this is my div hello</div>;

// ReactDOM.render(element, document.getElementById("app"));



import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Posts from './components/Posts';

const initialState={
    posts: [
        {
            id: 1,
            likes:2,
            comments:2,
            thumb_url:"/images/aboutUs_hero.png",
            title: "Title One",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
        },
        {
            id: 2,
            likes:2,
            comments:2,
            thumb_url:"/images/aboutUs_hero.png",
            title: "Title Two",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
        },
        {
            id: 3,
            likes:2,
            comments:2,
            thumb_url:"/images/aboutUs_hero.png",
            title: "Title Three",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
        },
        {
            id: 4,
            likes:2,
            comments:2,
            thumb_url:"/images/aboutUs_hero.png",
            title: "Title Four",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
        }
    ]
}

const reducer = (state=initialState,action)=>{
    if(action.type=="comment"){
        let all=state.posts.slice()
        all[0].comments=(state.posts[0].comments+1)
        return {
            ...state,
           posts:all,
        }
    }
    return state;
}


const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>
, document.getElementById("app"))
