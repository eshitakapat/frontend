import { ArrowBigDownDash, DownloadIcon, Eye, Trash } from "lucide-react";

export default function History() {
	const stats = [
		{ title: "Total Activities", value: 5, subtitle: "All time" },
		{ title: "Breed Identifications", value: 2, subtitle: "Successful scans" },
		{ title: "Voice Queries", value: 1, subtitle: "Voice interactions" },
		{ title: "Chat Messages", value: 1, subtitle: "Text conversations" },
	];

	const logs = [
		{
			type: "identification",
			icon: "🟢", // alternatively use image icons
			title: "Gir Cow Identified",
			desc: "Breed identification completed with high confidence",
			tags: [
				{ label: "identification", color: "bg-gray-200 text-gray-800" },
				{ label: "Gir", color: "bg-green-200 text-green-700" },
				{ label: "94% confidence", color: "bg-green-600 text-white" },
			],
			time: "17/09/2025, 21:32:48",
		},
		{
			type: "voice",
			icon: "🔵",
			title: "Voice Query: Holstein Care",
			desc: "Asked about Holstein cattle vaccination schedule",
			tags: [
				{ label: "voice", color: "bg-gray-200 text-gray-800" },
				{ label: "Holstein", color: "bg-blue-200 text-blue-700" },
			],
			time: "17/09/2025, 19:32:48",
		},
		{
			type: "chat",
			icon: "🟣",
			title: "Chat: Market Prices",
			desc: "Inquired about current cattle market prices",
			tags: [{ label: "chat", color: "bg-gray-200 text-gray-800" }],
			time: "17/09/2025, 17:32:48",
		},
	];

	return (
		<div className="bg-[#fcf8ee] min-h-screen p-8">
			<div className="flex items-center justify-between mb-4">
				<div>
					<h1 className="text-2xl font-bold mb-1 p-8">History</h1>
					<p className="text-gray-500 mb-2">
						View and manage your cattle identification history and AI
						interactions.
					</p>
				</div>
				<button className="text-white flex items-center gap-2 px-4 py-2 bg-[#f7f5ee] border rounded-lg shadow font-medium">
					<span>
						<DownloadIcon />
					</span>
					Export
				</button>
			</div>
			{/* Stats Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-7">
				{stats.map((stat) => (
					<div
						key={stat.title}
						className="bg-white rounded-xl border border-gray-200 shadow p-5 flex flex-col"
					>
						<div className="font-bold text-lg">{stat.title}</div>
						<div className="text-3xl font-semibold my-2">{stat.value}</div>
						<div className="text-xs text-gray-600">{stat.subtitle}</div>
					</div>
				))}
			</div>
			{/* Log Entries */}
			<div className="space-y-4">
				{logs.map((log, i) => (
					<div
						key={i}
						className="bg-white rounded-xl border border-gray-200 shadow px-6 py-4 flex flex-col"
					>
						<div className="flex items-center gap-2 mb-2">
							<span className="text-2xl">{log.icon}</span>
							<span className="font-semibold text-md">{log.title}</span>
							{log.tags.map((tag, ti) => (
								<span
									key={ti}
									className={`ml-2 px-2 py-1 rounded text-xs ${tag.color}`}
								>
									{tag.label}
								</span>
							))}
						</div>
						<div className="text-xs text-gray-600 mb-1">{log.desc}</div>
						<div className="text-xs text-gray-400 mb-2">{log.time}</div>
						<div className="flex gap-4 ml-auto">
							{/* Optional: replace emoji with icons */}
							<button title="View" className="text-white">
								<Eye />
							</button>
							<button title="Download" className="text-white">
								<ArrowBigDownDash />
							</button>
							<button title="Delete" className="text-white">
								<Trash />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
