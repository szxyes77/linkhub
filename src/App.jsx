import { user } from './data/links'
import LinkButton from './components/LinkButton'

/**
 * 个人链接聚合页主组件
 * 极简布局：头像 → 昵称 → 签名 → 链接列表 → 页脚
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(91,127,165,0.06)_0%,_transparent_50%)] bg-white">
      <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-16 sm:py-24">
        {/* 顶部个人信息区 */}
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="group relative mb-6">
            <img
              src={user.avatar}
              alt={`${user.name} 的头像`}
              className="h-24 w-24 rounded-full border border-neutral-200 object-cover transition-all duration-300 group-hover:border-accent"
            />
          </div>

          <h1 className="mb-3 text-2xl font-semibold tracking-wide text-neutral-900">
            {user.name}
          </h1>

          <p className="max-w-xs text-sm font-light leading-relaxed tracking-wide text-neutral-500">
            {user.bio}
          </p>
        </header>

        {/* 链接按钮列表 */}
        <section className="flex flex-1 flex-col gap-3" aria-label="社交链接">
          {user.links.map((link) => (
            <LinkButton
              key={link.id}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </section>

        {/* 页脚 */}
        <footer className="mt-16 text-center">
          <p className="text-xs font-light tracking-widest text-neutral-300">
            © 2026 双子星
          </p>
        </footer>
      </main>
    </div>
  )
}
