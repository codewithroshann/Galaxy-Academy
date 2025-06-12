"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing to prevent re-triggering
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isVisible]
}

export function useStaggeredAnimation(itemCount, delay = 100) {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of child elements
          const children = entry.target.children
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]))
            }, index * delay)
          })
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return [ref, visibleItems]
}
