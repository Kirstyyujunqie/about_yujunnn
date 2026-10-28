import { useEffect, useRef, useState } from 'react'
import { eventRows } from './eventPhotos'
import './travelGallery.css'

const photos = eventRows.flat()
const imageUrl = (file: string) => `${import.meta.env.BASE_URL}works/event-photography/${file}`

export default function EventGallery({ lang, onClose }: { lang: 'en' | 'zh'; onClose: () => void }) {
  const gallery = useRef<HTMLDialogElement>(null)
  const viewer = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const zh = lang === 'zh'
  useEffect(() => {
    const dialog = gallery.current
    dialog?.showModal()
    return () => { dialog?.close() }
  }, [])
  const show = (file: string) => {
    setActive(photos.findIndex(photo => photo.file === file))
    viewer.current?.showModal()
  }
  const step = (amount: number) => setActive(index => (index + amount + photos.length) % photos.length)
  return (
    <>
      <dialog ref={gallery} className="travel-gallery" aria-label={zh ? '活动摄影' : 'Event Photography'} onCancel={event => { event.preventDefault(); onClose() }}>
        <button className="travel-close" onClick={onClose} aria-label={zh ? '关闭画廊' : 'Close gallery'} autoFocus>×</button>
        <div className="travel-gallery-rows">
          {eventRows.map((row, i) => (
            <div key={i} className={`travel-row ${row.length === 2 ? 'travel-pair' : row[0].height > row[0].width ? 'travel-single-portrait' : ''}`}>
              {row.map(photo => (
                <button key={photo.file} className="travel-photo" onClick={() => show(photo.file)} aria-label={zh ? '放大照片' : 'Enlarge photograph'}>
                  <img src={imageUrl(photo.file)} width={photo.width} height={photo.height} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" alt={zh ? '活动摄影作品' : 'Event photograph'} />
                </button>
              ))}
            </div>
          ))}
        </div>
      </dialog>
      <dialog ref={viewer} className="travel-viewer" aria-label={zh ? '放大照片' : 'Enlarged photograph'} onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1) }
        if (event.key === 'ArrowRight') { event.preventDefault(); step(1) }
      }}>
        <button className="travel-close" onClick={() => viewer.current?.close()} aria-label={zh ? '关闭放大照片' : 'Close enlarged photograph'} autoFocus>×</button>
        <button className="travel-prev" onClick={() => step(-1)} aria-label={zh ? '上一张' : 'Previous photograph'}>‹</button>
        <img src={imageUrl(photos[active].file)} alt={zh ? '活动摄影作品' : 'Event photograph'} />
        <button className="travel-next" onClick={() => step(1)} aria-label={zh ? '下一张' : 'Next photograph'}>›</button>
      </dialog>
    </>
  )
}
