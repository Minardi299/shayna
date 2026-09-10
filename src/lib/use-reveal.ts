import { useEffect } from "react"
import { useLocation } from "react-router"

export function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal],[data-draw]")
    )
    if (nodes.length === 0) return

    const show = (el: HTMLElement) => el.setAttribute("data-shown", "")

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(show)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement)
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px" }
    )
    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
