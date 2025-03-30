import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Greet from "../components/Greet"
import React, { useReducer } from "react";
import ComponentD from "@/components/ComponentD";
import ReducerCounter from "@/components/ReducerCounter";
import ReducerCounter1 from "@/components/ReducerCounter1";
import ReducerCounterThree from "@/components/ReducerCounterThree";
import ComponentOneA from "@/components/ComponentOneA";
import ComponentOneB from "@/components/ComponentOneB";
import ComponentOneC from "@/components/ComponentOneC";
import DataFetchOne from "@/components/DataFetchOne";
import DataFetchTwo from "@/components/DataFetchTwo";
import Parent from "@/components/Parent";
import FocusInput from "@/components/FocusInput";
import RefInterval from "@/components/RefInterval";
import Header from "@/components/header";
import Form from "@/components/form";
// import Welcome from '../components/Welcome'
import HookCounter from '../components/HookCounter'
import Test from "@/components/Test";
import TodoList from "@/components/TodoList";
// import HookCounterTwo from '../components/HookCounterTwo'
// import HookCounterThree from '../components/HookCounterThree'
// import HookCounterFour from '../components/HookCounterFour'

// import EffectOne from '../components/EffectOne'
// import EffectMouse from '../components/EffectMouse'
// import EffectTwo from '../components/EffectTwo'
// import DataFetch from '../components/DataFetch'
// import OverlappingCards from "../components/OverlappingCards"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const UserContext = React.createContext()
export const NameContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case "INCREMENT":
            return state + 1 ;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return initialState;
        default :
            return state
    }

}

export default function Home() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <>
      {/* <Greet  title='i am sam' power='legend' >
        <p>this is para</p>
      </Greet>
      <Greet  title='i am raj' power='sharma' >
        <button>Btn</button>
      </Greet>
      <Greet  title='i am batman' power='kohli' /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <EffectOne /> */}
      {/* <EffectMouse /> */}
      {/* <EffectTwo /> */}
      {/* <DataFetch /> */}
      {/* <OverlappingCards/> */}
      {/* <UserContext.Provider value='Mugesh'>
        <NameContext.Provider value='Samraj'>
          <ComponentD /> 
        </NameContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerCounter /> */}
      {/* <ReducerCounter1 /> */}
      {/* <ReducerCounterThree /> */}
      {/* <CountContext.Provider value={{countState:count,counterDispatch:dispatch}}>
        {count}
        <ComponentOneA />
        <ComponentOneB />
        <ComponentOneC />
      </CountContext.Provider> */}
      {/* <DataFetchOne /> */}
      {/* <DataFetchTwo /> */}
      {/* <Parent /> */}
      {/* <FocusInput /> */}
      {/* <RefInterval /> */}
      {/* <Header />
      <p className="regular">lorem </p>
      <p className="bold">Lorem </p> */}
      {/* <Form /> */}
      {/* <Test /> */}
      <TodoList />
    </>
  );
}
