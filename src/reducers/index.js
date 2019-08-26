// const initialState={
//     posts: [
//         {
//             id: 1,
//             likes:2,
//             comments:2,
//             thumb_url:"/images/aboutUs_hero.png",
//             title: "Title One",
//             desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
//         },
//         {
//             id: 2,
//             likes:2,
//             comments:2,
//             thumb_url:"/images/aboutUs_hero.png",
//             title: "Title Two",
//             desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
//         },
//         {
//             id: 3,
//             likes:2,
//             comments:2,
//             thumb_url:"/images/aboutUs_hero.png",
//             title: "Title Three",
//             desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
//         },
//         {
//             id: 4,
//             likes:2,
//             comments:2,
//             thumb_url:"/images/aboutUs_hero.png",
//             title: "Title Four",
//             desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa ac tellus ornare elementum ut vel augue. Donec lobortis ligula vitae viverra varius. Curabitur tempus dignissim mauris nec posuere. Donec leo nisi, vehicula at ultricies a, pretium id diam. Aenean feugiat tortor sit amet tellus blandit, in sagittis lacus vehicula. Praesent neque neque, tristique eu arcu non, aliquet rhoncus sapien. Sed porta, ipsum nec posuere scelerisque, justo tellus rhoncus risus, at cursus nunc ipsum sit amet leo. Vivamus mattis ligula a odio fermentum accumsan. Integer volutpat, est sit amet placerat congue, metus est sodales felis, sed tristique nisi neque a lectus. Duis varius erat a sem gravida, pharetra viverra turpis condimentum. Morbi sollicitudin vulputate ante ut congue. Fusce bibendum magna nec facilisis rhoncus. Etiam dignissim venenatis mollis."
//         }
//     ],
//     data:{
//         items:[]
//     }
// }
// export const reducer = (state=initialState,action) =>{
//     if(action.type=="comment"){
//         let all=state.posts.slice()
//         all[0].comments=(state.posts[0].comments+1)
//         return {
//             ...state,
//            posts:all,
//         }
//     }else if(action.type=="SEARCH_RESULTS_UPDATE"){
//         return {
//             ...state,
//             data:{...action.payload}
//         }
//     }

//     return state;
// }

const initialState = {
  value: 0,
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, value: state.value + 1 };
    case "SUB":
      return { ...state, value: state.value - 1 };
    case "GET_USER":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
