export default function AiChatAssistant() {
	const suggestions = [
		"Cattle vaccination schedule",
		"Best feed for milk cows",
		"Disease symptoms",
		"Market prices today",
	];

	return (
		<div className="bg-[#fcf8ee] min-h-screen p-20 w-full flex flex-col items-center justify-center gap-4">
			<div className="max-w-lg flex flex-col gap-4 bg-white rounded-xl border border-gray-200 shadow p-7">
				{/* Header */}
				<div className="flex items-center gap-2 mb-3 ">
					<span className="text-lg">🧑‍💻</span>
					<span className="font-semibold">AI Chat Assistant</span>
				</div>
				{/* Assistant's Message */}
				<div className="flex">
					<span className="text-2xl mr-3">🟢</span>
					<div className="bg-gray-100 rounded-lg px-4 py-3 w-full mb-1">
						<span>
							Hello! I'm your AI assistant for cattle farming. You can ask me
							questions using voice or text. How can I help you today?
						</span>
						<div className="flex justify-between mt-1 text-xs text-gray-400">
							<span>23:34</span>
							<div className="flex gap-3">
								<button title="Like">👍</button>
								<button title="Dislike">👎</button>
								<button title="Copy">📋</button>
							</div>
						</div>
					</div>
				</div>
				{/* Input Field & Suggestions */}
				<div className="mt-4 flex flex-col gap-4">
					<input
						className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500 mb-2"
						placeholder="Ask about cattle care, breeding, health..."
					/>
					<div className="flex flex-wrap gap-2">
						{suggestions.map((s, idx) => (
							<button
								key={idx}
								className="bg-gray-100 text-white px-3 py-2 rounded border text-sm font-medium"
							>
								{s}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
