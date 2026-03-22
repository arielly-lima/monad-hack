export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-cyan-400">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Liquidity Pool</h2>
          <p className="text-gray-300">Manage your liquidity positions</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <p className="text-gray-300">View recent transactions</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Balance</h2>
          <p className="text-gray-300">Current MON balance</p>
        </div>
      </div>
    </div>
  );
}