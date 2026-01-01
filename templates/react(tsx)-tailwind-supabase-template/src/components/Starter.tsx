import { Github } from "lucide-react";

export default function Starter() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content */}
      <section className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            React TSX + Supabase + Tailwind CSS 
          </h1>

          <p className="mt-3 text-2xl text-gray-400">
            starter template.
          </p>

          <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950/50 p-6 text-left">
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • Supabase client ready in{" "}
                <code className="text-white">src/lib/supabase</code>
              </li>
              <li>• Tailwind CSS installed</li>
              <li>• Lucide React icons available</li>
              <li>
                • Environment variables via{" "}
                <code className="text-white">.env.example</code>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Start editing{" "}
            <code className="text-gray-300">src/pages/home.tsx</code>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/95">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-row justify-center items-center gap-4">
          <p className="text-md text-gray-400">
            Template by{" "}
            </p>
                <a
            href="https://github.com/Sumit210106/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <span className="text-gray-300 font-medium">
              Sumit Nayak
            </span>

    
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
