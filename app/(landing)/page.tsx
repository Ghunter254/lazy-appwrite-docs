import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-blue-500/30">
      {/* --- BACKGROUND GLOW (Subtle) --- */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20" />

      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto animate-fade-in-down">
        <div className="font-bold text-xl tracking-tight flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
          <span className="text-2xl animate-bounce-slow">🦥</span> Lazy Appwrite
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link
            href="/docs/home"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
          >
            Documentation
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <a
            href="https://github.com/Ghunter254/lazy-appwrite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center px-4 pt-20 pb-32 text-center sm:pt-32">
        {/* --- HERO SECTION --- */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-800 dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-default">
            🚀 v1.1.0 is live
          </div>

          <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl drop-shadow-sm">
            Stop clicking. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-500 to-cyan-500 animate-gradient-x bg-300%">
              Start coding.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-90">
            A declarative, self-healing SDK for Appwrite. Define your database
            in code, and let the library handle creation, syncing, and
            migrations automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/docs/01_guide/"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/Ghunter254/lazy-appwrite"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 px-8 text-sm font-semibold transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 backdrop-blur-sm"
            >
              View Source
            </a>
          </div>
        </div>

        {/* --- CODE DEMO SECTION --- */}
        <div className="mt-24 w-full max-w-4xl mx-auto animate-fade-in-up delay-200">
          <div className="group relative rounded-xl bg-gray-950 shadow-2xl border border-gray-800 overflow-hidden text-left transition-all hover:shadow-blue-900/20 hover:border-gray-700">
            {/* Glow Effect behind code */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

            <div className="relative flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs text-gray-500 font-mono">
                schemas.ts
              </span>
            </div>

            <div className="relative p-6 overflow-x-auto bg-gray-950/90 backdrop-blur-sm">
              <pre className="font-mono text-sm leading-relaxed text-gray-300">
                <code>
                  <span className="text-purple-400">export const</span>{" "}
                  UserSchema: TableSchema = {"{"}
                  {"\n"} id:{" "}
                  <span className="text-green-400">&quot;users&quot;</span>,
                  {"\n"} name:{" "}
                  <span className="text-green-400">&quot;Users&quot;</span>,
                  {"\n"} columns: [{"\n"} {"{"} key:{" "}
                  <span className="text-green-400">&quot;username&quot;</span>,
                  type: ColumnType.String, size: 50, required:{" "}
                  <span className="text-orange-400">true</span> {"}"},{"\n"}{" "}
                  {"{"} key:{" "}
                  <span className="text-green-400">&quot;age&quot;</span>, type:
                  ColumnType.Integer, required:{" "}
                  <span className="text-orange-400">false</span>, _default: 18{" "}
                  {"}"}
                  {"\n"} ],
                  {"\n"} indexes: [{"\n"} {"{"} key:{" "}
                  <span className="text-green-400">&quot;idx_user&quot;</span>,
                  type: IndexType.Unique, columns: [
                  <span className="text-green-400">&quot;username&quot;</span>]{" "}
                  {"}"}
                  {"\n"} ]{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 animate-pulse">
            👆 Define this once. We handle the rest.
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-6xl mx-auto text-left">
          <FeatureCard
            delay="0"
            icon="⚡️"
            title="Lazy Infrastructure"
            desc="Never manually create a table again. Just define your schema in TypeScript, and the library ensures it exists before you write data."
          />
          <FeatureCard
            delay="100"
            icon="🛡️"
            title="Race-Condition Proof"
            desc="Built for Serverless. Smart Mutex logic handles cold starts and concurrent requests without crashing your database."
          />
          <FeatureCard
            delay="200"
            icon="🩹"
            title="Self-Healing"
            desc="Detects Schema Drift automatically. If you change a column size or add an enum option in code, it updates the live DB."
          />
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 text-center bg-gray-50 dark:bg-gray-950/50">
        <p className="text-sm text-gray-500">
          Released under the MIT License. <br className="sm:hidden" />
          Copyright © {new Date().getFullYear()} Lazy Appwrite.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  delay: string;
}) {
  return (
    <div
      className="group p-8 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 duration-300 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
