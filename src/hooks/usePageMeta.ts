import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../config/site'

export interface PageMetaOptions {
  title: string
  description?: string
  image?: string
  path?: string
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function toAbsoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  const base = SITE_URL.replace(/\/$/, '')
  return `${base}${url.startsWith('/') ? url : `/${url}`}`
}

export function usePageMeta({ title, description, image, path }: PageMetaOptions) {
  const location = useLocation()
  const pagePath = path ?? `${location.pathname}${location.search}`
  const pageDescription = description ?? DEFAULT_DESCRIPTION
  const pageImage = image ?? DEFAULT_OG_IMAGE

  useEffect(() => {
    const fullTitle = `${title} – ${SITE_NAME}`
    const pageUrl = `${window.location.origin}${pagePath}`
    const imageUrl = toAbsoluteUrl(pageImage)

    document.title = fullTitle
    setMetaTag('name', 'description', pageDescription)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', pageDescription)
    setMetaTag('property', 'og:image', imageUrl)
    setMetaTag('property', 'og:image:width', '1024')
    setMetaTag('property', 'og:image:height', '537')
    setMetaTag('property', 'og:image:alt', `${SITE_NAME} – sportfiske i centrala Skåne`)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', pageDescription)
    setMetaTag('name', 'twitter:image', imageUrl)
    setMetaTag('property', 'og:url', pageUrl)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:locale', 'sv_SE')
  }, [title, pageDescription, pageImage, pagePath])
}
