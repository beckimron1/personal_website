import { ImageResponse } from 'next/og'

export const alt = 'Imronbek Abduvaliev — Ideas into useful software. Full-stack developer.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#243d32', color: '#f7f7ef', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}><span>IMRONBEK ABDUVALIEV</span><span style={{ color: '#dbf68a' }}>PORTFOLIO</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 88, letterSpacing: '-4px', lineHeight: 1.07 }}><span>Ideas into</span><span style={{ color: '#dbf68a' }}>useful software.</span></div>
      <div style={{ display: 'flex', fontSize: 23 }}>Full-stack development / Computer vision / Practical products</div>
    </div>, size,
  )
}
