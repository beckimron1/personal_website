import type { MetadataRoute } from 'next'
import { siteUrl, work } from '@/data/work'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, priority: 1 }, ...work.map(({ slug }) => ({ url: `${siteUrl}/work/${slug}`, priority: 0.8 }))]
}
