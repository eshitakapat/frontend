import { ChartLine, CircleDollarSign, Coffee, TrendingUp } from "lucide-react";

export default function EconomicData() {
	const metrics = [
		{
			title: "National Agricultural Growth",
			icon: <TrendingUp />,
			value: "8.8%",
			change: "+0.4%",
			changeColor: "bg-green-600 text-white",
			subtitle: "vs last month",
			valueColor: "text-black",
		},
		{
			title: "Average Farmer Income",
			icon: <CircleDollarSign />,
			value: "₹33,200",
			change: "+12.5%",
			changeColor: "bg-green-600 text-white",
			subtitle: "vs last month",
			valueColor: "text-black",
		},
		{
			title: "Cattle Market Index",
			icon: <ChartLine />,
			value: "1,247",
			change: "-2.1%",
			changeColor: "bg-red-500 text-white",
			subtitle: "vs last month",
			valueColor: "text-black",
		},
		{
			title: "Milk Production Growth",
			icon: <Coffee />,
			value: "6.2%",
			change: "+1.8%",
			changeColor: "bg-green-600 text-white",
			subtitle: "vs last month",
			valueColor: "text-black",
		},
	];

	return (
		<div className="bg-[#fcf8ee] min-h-screen p-8">
			<h1 className="text-2xl font-bold mb-1 p-8">Economic Data</h1>
			<p className="text-gray-500 mb-6">
				Comprehensive analysis of economic trends, market data, and farmer
				profitability metrics.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
				{metrics.map((m) => (
					<div
						key={m.title}
						className="bg-white rounded-xl border border-gray-200 shadow p-5 flex flex-col items-start min-w-[200px]"
					>
						<div className="flex items-center gap-2 mb-3">
							<span className="text-sm font-medium text-gray-700">
								{m.title}
							</span>
							<span className="ml-2 text-xl">{m.icon}</span>
						</div>
						<div className={`text-2xl font-bold mb-2 ${m.valueColor}`}>
							{m.value}
						</div>
						<div
							className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${m.changeColor}`}
						>
							{m.change}
						</div>
						<span className="text-xs text-gray-500 mt-2">{m.subtitle}</span>
					</div>
				))}
			</div>
		</div>
	);
}
