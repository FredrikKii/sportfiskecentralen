import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildRobotsTxt, buildSitemapXml, getSitemapEntries } from '../src/utils/sitemap.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '../public')
const siteUrl = process.env.VITE_SITE_URL ?? 'https://sportfiskecentralen.se'

const entries = getSitemapEntries()

writeFileSync(resolve(publicDir, 'sitemap.xml'), buildSitemapXml(siteUrl, entries))
writeFileSync(resolve(publicDir, 'robots.txt'), buildRobotsTxt(siteUrl))

console.log(`Generated sitemap with ${entries.length} URLs for ${siteUrl}`)
