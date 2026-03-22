# FlowPool

FlowPool is a programmable liquidity operating system built for Monad Testnet. It turns Pix inflows into active liquidity for API usage, AI spend, agent budgets, auto-recharge, and background yield simulation.

## Stack

- Next.js App Router, TypeScript, Tailwind, Framer Motion, Recharts, Wagmi, Viem
- NestJS, Prisma, PostgreSQL, Redis, BullMQ, SSE
- Solidity, Foundry
- pnpm workspace monorepo

## Workspace

```text
flowpool/
  apps/
    web/
    api/
  contracts/
  packages/
    sdk/
    types/
    ui/
  docs/
  scripts/
```

## Run

```bash
corepack pnpm install
cp .env.example .env
cp .env.example apps/api/.env
corepack pnpm --filter @flowpool/api prisma:generate
corepack pnpm db:push
corepack pnpm seed
corepack pnpm dev
```

## Contracts

```bash
corepack pnpm contracts:build
corepack pnpm contracts:test
```

## Demo flow

1. Open landing page and launch the app.
2. Connect wallet and switch to Monad Testnet.
3. Create a mock Pix top-up on `/add-funds`.
4. Confirm payment and watch dashboard, usage, pool, and ledger update.
5. Trigger usage, agent tasks, recharge, and yield simulation.
6. Submit an onchain pool deposit from the dashboard or pool page.

See [docs/DEMO_FLOW.md](/home/lorena/Blitz-Monad/flowpool/docs/DEMO_FLOW.md) for the exact script.
