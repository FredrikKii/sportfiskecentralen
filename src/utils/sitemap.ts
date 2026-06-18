import { guides } from '../data/guides'
import { reports } from '../data/reports'
import { waterIds } from '../data/waterIds'

export interface SitemapEntry {
  path: string
  lastmod?: string
  changefreq?: 'weekly' | 'monthly'
  priority?: number
}

export function getSitemapEntries(): SitemapEntry[] {
  return [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/fiskevatten', changefreq: 'weekly', priority: 0.9 },
    ...waterIds.map((id) => ({
      path: `/fiskevatten/${id}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
    { path: '/rapporter', changefreq: 'weekly', priority: 0.8 },
    ...reports.map((report) => ({
      path: `/rapporter/${report.id}`,
      lastmod: report.date,
      changefreq: 'monthly' as const,
      priority: 0.7,
    })),
    { path: '/guider', changefreq: 'weekly', priority: 0.9 },
    ...guides.map((guide) => ({
      path: `/guider/${guide.id}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
    { path: '/kontakt', changefreq: 'monthly', priority: 0.6 },
    { path: '/credits', changefreq: 'monthly', priority: 0.3 },
  ]
}

export function buildSitemapXml(siteUrl: string, entries: SitemapEntry[]): string {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, '')
  const urls = entries
    .map((entry) => {
      const parts = [`    <loc>${normalizedSiteUrl}${entry.path}</loc>`]
      if (entry.lastmod) parts.push(`    <lastmod>${entry.lastmod}</lastmod>`)
      if (entry.changefreq) parts.push(`    <changefreq>${entry.changefreq}</changefreq>`)
      if (entry.priority !== undefined) {
        parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`)
      }
      return `  <url>\n${parts.join('\n')}\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function buildRobotsTxt(siteUrl: string): string {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, '')
  return `User-agent: *\nAllow: /\n\nSitemap: ${normalizedSiteUrl}/sitemap.xml\n`
}
