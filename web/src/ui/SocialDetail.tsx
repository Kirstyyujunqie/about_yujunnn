import { useEffect, useRef, useState } from 'react'
import { socialContent } from './socialContent'
import './socialDetail.css'

export default function SocialDetail({ slug, lang, onClose }: {
  slug: 'nuq-views-social' | 'csa-social'
  lang: 'en' | 'zh'
  onClose: () => void
}) {
  const gallery = useRef<HTMLDialogElement>(null)
  const viewer = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const content = socialContent.find(item => item.slug === slug)!
  const zh = lang === 'zh'
  const title = zh ? content.titleZh : content.title
  const imageUrl = (file: string) => `${import.meta.env.BASE_URL}works/${slug}/${file}`
  useEffect(() => {
    const dialog = gallery.current
    dialog?.showModal()
    return () => dialog?.close()
  }, [])
  const show = (index: number) => {
    setActive(index)
    viewer.current?.showModal()
  }
  const step = (direction: number) => setActive(index => (index + direction + content.photos.length) % content.photos.length)
  const photoButton = (index: number) => {
    const photo = content.photos[index]
    const label = index === 0 ? (zh ? '账号主页' : 'Account overview') : (zh ? `内容截图 ${index}` : `Content screenshot ${index}`)
    return <button key={photo.file} className="social-image" onClick={() => show(index)} aria-label={`${zh ? '放大' : 'Enlarge'}: ${label}`}>
      <img src={imageUrl(photo.file)} width={photo.width} height={photo.height} alt={`${title} — ${label}`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
    </button>
  }
  return <>
    <dialog ref={gallery} className="social-detail" aria-labelledby="social-title" onCancel={event => { event.preventDefault(); onClose() }}>
      <button className="social-close" onClick={onClose} aria-label={zh ? '关闭' : 'Close'} autoFocus>×</button>
      <div className="social-inner">
        <header className="social-heading">
          <h2 id="social-title">{title}</h2>
          <p>{zh ? content.descriptionZh : content.description}</p>
        </header>
        <div className="social-account">{photoButton(0)}</div>
        <div className="social-triptych">{content.photos.slice(1).map((_, index) => photoButton(index + 1))}</div>
      </div>
    </dialog>
    <dialog ref={viewer} className="social-viewer" aria-label={zh ? '放大截图' : 'Enlarged screenshot'} onKeyDown={event => {
      if (event.key === 'Escape') event.stopPropagation()
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1) }
    }}>
      <button className="social-close" onClick={() => viewer.current?.close()} aria-label={zh ? '关闭放大截图' : 'Close enlarged screenshot'} autoFocus>×</button>
      <button className="social-prev" onClick={() => step(-1)} aria-label={zh ? '上一张' : 'Previous'}>‹</button>
      <img src={imageUrl(content.photos[active].file)} alt={title} />
      <button className="social-next" onClick={() => step(1)} aria-label={zh ? '下一张' : 'Next'}>›</button>
    </dialog>
  </>
}
