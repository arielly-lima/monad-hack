export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-cyan-400">FlowPool</h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl">
          Programmable liquidity operating system built for Monad Testnet.
          Turn Pix inflows into active liquidity for API usage, AI spend, agent budgets, auto-recharge, and background yield simulation.
        </p>
        <div className="mb-8">
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Monad Testnet
          </span>
        </div>
        <a
          href="/dashboard"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Launch App
        </a>
      </div>
    </div>
  );
}
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
