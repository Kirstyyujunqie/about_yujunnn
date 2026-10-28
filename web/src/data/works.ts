// Yujun Shen — bilingual portfolio data.
// Edit `sections` to change categories and portfolio items.
// Each item's `slug` can match a Markdown file at src/content/works/<slug>.md.

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  "zh": {
    "title": "作品集",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "奖项",
    "visitLabel": "访问作品",
    "detailPlaceholder": "作品介绍即将更新",
    "phImageLabel": "图片 / 视频即将更新",
    "phButtonLabel": "作品链接",
    "countLabel": (n) => `${n} 件作品`,
    "sections": [
      {
        "id": "editorial",
        "no": "01",
        "title": "编辑、网页与企业设计",
        "tagline": "杂志 · 网页 · 企业演示",
        "items": [
          {
            "name": "NU-Q Views 杂志设计",
            "meta": "杂志排版与视觉设计",
            "slug": "nuq-views-magazine"
          },
          {
            "name": "Unscripted Women 主题杂志",
            "meta": "研究、写作与杂志设计",
            "slug": "unscripted-women"
          },
          {
            "name": "Jabil 企业演示文稿设计",
            "meta": "企业视觉与信息设计",
            "slug": "jabil-presentations"
          },
          {
            "name": "NU-Q Views 网站",
            "meta": "网页与界面设计",
            "slug": "nuq-views-website"
          }
        ]
      },
      {
        "id": "ai",
        "no": "02",
        "title": "AI 与互动媒体",
        "tagline": "游戏 · 创意技术 · 数字体验",
        "items": [
          {
            "name": "Vibe Coding 与创意实验",
            "meta": "网站与互动媒体",
            "slug": "vibe-coding"
          },
          {
            "name": "AI 2D 动画",
            "meta": "AI 辅助二维动画创作",
            "slug": "ai-2d-animation"
          }
        ]
      },
      {
        "id": "social",
        "no": "03",
        "title": "社交媒体与品牌传播",
        "tagline": "内容策划 · 视觉传播 · 社区运营",
        "items": [
          {
            "name": "NU-Q Views 社交媒体",
            "meta": "活动报道与人物采访",
            "slug": "nuq-views-social"
          },
          {
            "name": "中国学生协会（CSA）社交媒体",
            "meta": "活动宣传与 Instagram 内容",
            "slug": "csa-social"
          }
        ]
      },
      {
        "id": "photography",
        "no": "04",
        "title": "摄影作品",
        "tagline": "人物 · 场所 · 日常瞬间",
        "items": [
          {
            "name": "旅行与街头摄影",
            "meta": "旅行与日常记录",
            "slug": "travel-photography"
          },
          {
            "name": "活动摄影",
            "meta": "活动与校园生活",
            "slug": "event-photography"
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Works",
    "closeLabel": "Back",
    "openLabel": "Explore",
    "hint": "Keep scrolling",
    "awardsLabel": "Awards",
    "visitLabel": "Visit site",
    "detailPlaceholder": "Project details coming soon",
    "phImageLabel": "Images / Video coming soon",
    "phButtonLabel": "Project link",
    "countLabel": (n) => `${n} works`,
    "sections": [
      {
        "id": "editorial",
        "no": "01",
        "title": "Editorial, Web & Corporate Design",
        "tagline": "Magazines · Websites · Presentations",
        "items": [
          {
            "name": "NU-Q Views Magazine",
            "meta": "Editorial Layout & Design",
            "slug": "nuq-views-magazine"
          },
          {
            "name": "Unscripted Women — Magazine",
            "meta": "Research, Writing & Editorial Design",
            "slug": "unscripted-women"
          },
          {
            "name": "Jabil Corporate Presentations",
            "meta": "Presentation & Information Design",
            "slug": "jabil-presentations"
          },
          {
            "name": "NU-Q Views Website",
            "meta": "Web & Interface Design",
            "slug": "nuq-views-website"
          }
        ]
      },
      {
        "id": "ai",
        "no": "02",
        "title": "AI & Interactive Media",
        "tagline": "Games · Creative Technology · Digital Experience",
        "items": [
          {
            "name": "Vibe Coding & Creative Experiments",
            "meta": "Web & Interactive Media",
            "slug": "vibe-coding"
          },
          {
            "name": "AI 2D Animation",
            "meta": "AI-assisted 2D Animation",
            "slug": "ai-2d-animation"
          }
        ]
      },
      {
        "id": "social",
        "no": "03",
        "title": "Social Media & Branding",
        "tagline": "Content Strategy · Visual Communication",
        "items": [
          {
            "name": "NU-Q Views Social Media",
            "meta": "Event Coverage & Interviews",
            "slug": "nuq-views-social"
          },
          {
            "name": "Chinese Students Association Social Media",
            "meta": "Campaigns & Instagram Content",
            "slug": "csa-social"
          }
        ]
      },
      {
        "id": "photography",
        "no": "04",
        "title": "Photography",
        "tagline": "People · Places · Moments",
        "items": [
          {
            "name": "Travel & Street Photography",
            "meta": "Places & Everyday Moments",
            "slug": "travel-photography"
          },
          {
            "name": "Event Photography",
            "meta": "Events & Campus Life",
            "slug": "event-photography"
          }
        ]
      }
    ]
  }
}

// Optional cover images. Until you add your own images, each card shows
// the project's built-in gradient/number placeholder.
// Add covers to: web/public/works/covers/<id>.jpg
export const SECTION_COVERS: Record<string, string> = {
  editorial: `${import.meta.env.BASE_URL}works/covers/editorial.jpg`,
  ai: `${import.meta.env.BASE_URL}works/covers/ai.png`,
  social: `${import.meta.env.BASE_URL}works/covers/social.jpg`,
  photography: `${import.meta.env.BASE_URL}works/covers/photography.jpg`,
}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
