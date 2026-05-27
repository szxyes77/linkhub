import LinkIcon from './LinkIcon'

/**
 * 单个链接按钮
 * 支持 hover 上浮、阴影加深、点击反馈
 */
export default function LinkButton({ title, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-4 rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-card-hover active:translate-y-0 active:scale-[0.99] active:shadow-card"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600 transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent">
        <LinkIcon name={icon} />
      </span>
      <span className="text-[15px] font-normal tracking-wide text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900">
        {title}
      </span>
    </a>
  )
}
