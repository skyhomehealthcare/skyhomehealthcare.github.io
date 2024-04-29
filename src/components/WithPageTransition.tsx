import React, { useEffect, useState } from 'react'
import '../App.css' // Ensure this path correctly points to your CSS file

const withPageTransition = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      // Trigger the animation when the component mounts
      setIsMounted(true)

      // No cleanup function is needed for fade-in only
    }, [])

    return (
      <div
        className={`page ${isMounted ? 'page-transition-enter-active' : 'page-transition-enter'}`}
      >
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withPageTransition
