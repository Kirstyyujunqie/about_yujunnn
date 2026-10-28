import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'douyin',
    label: '抖音',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAlmQDgHf0NlbsjrfWENm8LyrIikxSRRq7mzlzQSIStQJkV7Ju52B6A55zw5TUDU5d',
  },
  {
    id: 'bilibili',
    label: 'B站',
    href: 'https://space.bilibili.com/275344092?spm_id_from=333.937.0.0',
  },
  {
    id: 'xiaohongshu',
    label: '小红书',
    href: 'https://www.xiaohongshu.com/user/profile/5ceba8c8000000000502fd69',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: 'Class of 2027',
        place: 'Northwestern University in Qatar',
        role: 'B.S. in Communication · Minor in AI & Media',
        points: [
          'Doha, Qatar',
        ],
      },
      {
        period: '2025 – Present',
        place: 'Research Experience',
        groups: [
          {
            heading: 'Game and AI Animation Marketing Project',
            sub: 'Research Assistant · Aug 2026 – Present',
            items: [
              'Social media strategy, game testing, and user experience feedback.',
            ],
          },
          {
            heading: 'Qatar Art World and Collectors Project',
            sub: 'Research Assistant · Aug 2026 – Present',
            items: [
              'Qualitative research, interviews, translation, and transcription.',
            ],
          },
          {
            heading: 'Thai-Chinese Cultural Heritage Project',
            sub: 'Research Assistant · Aug 2025 – Aug 2026',
            items: [
              'Literature reviews, cultural research, and annotated datasets.',
            ],
          },
        ],
      },
      {
        period: 'Jan 2026 – Present',
        place: 'NU-Q Views',
        role: 'Design Lead & Associate Social Media Lead',
        points: [
          'Lead magazine layouts and digital visual design.',
          'Plan weekly social media content and maintain the publication website.',
          'Coordinate design tasks and support editorial production.',
        ],
      },
      {
        period: '2025 – 2026',
        place: 'Professional Experience',
        groups: [
          {
            heading: 'Jabil Electronics (Wuxi)',
            sub: 'Public Relations Intern · May – Aug 2026',
            items: [
              'Designed corporate presentations and coordinated promotional video production.',
            ],
          },
          {
            heading: 'Wuxi Online and Offline Communication',
            sub: 'Overseas Marketing Intern · Jul – Aug 2025',
            items: [
              'Created advertising scripts, coordinated influencer outreach, and analyzed campaign performance.',
            ],
          },
        ],
      },
      {
        period: '2024 – Present',
        place: 'Leadership & Campus Experience',
        points: [
          'Chinese Student Association — Co-President & Social Media Lead',
          'Vibe Coding & Exploring Global Media — Teachning Assistant',
          'HollyWould Theater Club — Former Head of Art Department',
          'NU-Q Library — Student Library Assistant',
          'NU-Q Admissions Office - Admissions Student Diplomat',
        ],
      },
    ],
  },

  zh: {
    title: '个人履历',
    entries: [
      {
        period: '2027届',
        place: '西北大学卡塔尔校区',
        role: '传播学理学学士 · 辅修人工智能与媒体',
        points: [
          'GPA：3.77 / 4.0',
          '卡塔尔多哈',
        ],
      },
      {
        period: '2025 年 – 至今',
        place: '研究经历',
        groups: [
          {
            heading: '游戏与 AI 动画营销项目',
            sub: '研究助理 · 2026 年 8 月 – 至今',
            items: [
              '参与社交媒体营销策划、游戏测试和用户体验评估',
            ],
          },
          {
            heading: '卡塔尔艺术界与收藏家研究项目',
            sub: '研究助理 · 2026 年 8 月 – 至今',
            items: [
              '开展定性研究，协助访谈、翻译及资料整理',
            ],
          },
          {
            heading: '泰中文化遗产研究项目',
            sub: '研究助理 · 2025 年 8 月 – 2026 年 8 月',
            items: [
              '负责文献综述、文化研究与数据资料整理',
            ],
          },
        ],
      },
      {
        period: '2026 年 1 月 – 至今',
        place: 'NU-Q Views',
        role: '设计负责人兼社交媒体副负责人',
        points: [
          '负责杂志排版和数字视觉设计',
          '策划每周社交媒体内容并维护刊物网站',
          '协调设计工作并支持编辑出版流程',
        ],
      },
      {
        period: '2025 – 2026 年',
        place: '企业实习经历',
        groups: [
          {
            heading: '捷普电子（无锡）有限公司',
            sub: '公共关系实习生 · 2026 年 5 – 8 月',
            items: [
              '优化企业演示文稿，协调宣传视频制作',
            ],
          },
          {
            heading: '无锡线上线下通信信息技术有限公司',
            sub: '海外营销实习生 · 2025 年 7 – 8 月',
            items: [
              '撰写广告脚本、协调海外达人合作并分析营销效果',
            ],
          },
        ],
      },
      {
        period: '2024 年 – 至今',
        place: '校园领导与工作经历',
        points: [
          '中国学生协会 — 联合主席兼社交媒体负责人',
          'Vibe Coding 与 Exploring Global Media — 课程助教',
          'HollyWould 戏剧社 — 前艺术部门负责人',
          '西北大学卡塔尔校区图书馆 — 学生助理',
          '西北大学卡塔尔校区招生办公室 - 招生学生大使'
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading =
    group.logo === 'zooop' ? (
      <a
        className="zooop-logo-link"
        href={group.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZOOOP"
      >
        <ZooopLogo className="zooop-logo" animated />
      </a>
    ) : group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
