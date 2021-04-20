import React from "react";
import { Header } from "../components/Header";

export default function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps () {
  
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  const timeInHours = 60 * 60 * 8

  return {
    props: {
      episodes: data
    },
    revalidate: timeInHours
  }
}