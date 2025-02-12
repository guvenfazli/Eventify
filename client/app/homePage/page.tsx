"use client"
export default function Page() {

  async function test() {
    const response = await fetch('http://localhost:8080/auth/test', {
      credentials: "include"
    })


  }

  return (
    <>
      <p>Welcome to the homepage.</p>
      <button onClick={test}>Test</button>
    </>
  )
}