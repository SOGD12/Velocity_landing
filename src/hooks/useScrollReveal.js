import { useEffect } from 'react'

const REVEAL_SELECTORS = [
  '.section h2',
  '.section .eyebrow',
  '.section > .container > p',
  '.section .reviews-header',
  '.hero-content',
  '.catalog-card',
  '.review-card',
  '.box-list li',
  '.features-grid > *',
  '.specs-list li',
  '.pricing',
].join(',')

export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const mql = window.matchMedia('(max-width: 768px)')
    if (!mql.matches) return

    const elements = document.querySelectorAll(REVEAL_SELECTORS)
    if (!elements.length) return

    elements.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
