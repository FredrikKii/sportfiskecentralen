export const SITE_NAME = 'Sportfiskecentralen'

export const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://sportfiskecentralen.se'

export const DEFAULT_DESCRIPTION =
  'Sportfiskecentralen – guider, fiskerapporter och lokala vatten för sportfiskare i centrala Skåne.'

export const DEFAULT_OG_IMAGE_PATH = '/og-image.png'

export const DEFAULT_OG_IMAGE = `${SITE_URL.replace(/\/$/, '')}${DEFAULT_OG_IMAGE_PATH}`
