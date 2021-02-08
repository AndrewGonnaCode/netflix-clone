import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
    subscription:null,
    loading:false,
    tabs:[
      {
        id:1,
        text:'Cancel at any time',
        checked:true,
        icon:'fa-door-open'
      },
      {
        id:2,
        text:'Watch Anywhere',
        checked:false,
        icon:'fa-tablet-alt'
      },
      {
        id:3,
        text:'Pick your price',
        checked:false,
        icon:'fa-tags'
      }
    ],
    questions:[
      {
        id:1,
        question:'What is Netflix?',
        answer:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
      },
      {
        id:2,
        question:'How Much does Netflix cost?',
        answer:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from RUB599 to RUB999 a month. No extra costs, no contracts.'
      },
      {
        id:3,
        question:'Where can I watch?',
        answer:'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles..'
      },
      {
        id:4,
        question:'How do I cancel?',
        answer:'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
      },
      {
        id:5,
        question:'What can I watch on Netflix?',
        answer:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer.'
      },
      {
        id:1,
        question:'How does the free trial work?',
        answer:'Try us free for 30 days! If you enjoy your Netflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.'
      }
    ]
  },
  reducers: {
    login: (state, action) => {
     state.user = action.payload
    },
    logout: state => {
      state.user = null
    },
    subscribe:(state, action) =>{
      state.subscription = action.payload
    },
    toggleLoading:(state,action)=>{
      state.loading = action.payload
    },
    changeTab:(state,action)=>{
     state.tabs.forEach((tab)=>{
       tab.checked = false
       if(tab.id === action.payload){
         tab.checked = true
       }
     })
    }
  }
});

export const { login, logout, subscribe, toggleLoading, changeTab} = userSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.user.user;
export const selectSubscription = state => state.user.subscription;
export const selectLoading = state => state.user.loading;
export const selectTabs = state => state.user.tabs;
export const selectQuestions = state => state.user.questions;

export default userSlice.reducer;
