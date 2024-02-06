"use client"

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void
}

export default function Error(props: ErrorProps) {

  useEffect(() => {
    console.log(props.error)
  }, [props.error])

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={props.reset}>Intentar de nuevo</button>
    </div>
  )
}