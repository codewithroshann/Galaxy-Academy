"use client"

import { useScrollAnimation } from "../hooks/useScrollAnimation"

export function ScrollAnimationWrapper({
  children,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  className = "",
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold })

  const animationClass = `animate-${animation} ${isVisible ? "visible" : ""}`
  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {}

  return (
    <div ref={ref} className={`${animationClass} ${className}`} style={style} {...props}>
      {children}
    </div>
  )
}
