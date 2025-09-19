export default function VoiceAssistant() {
	const quickCommands = [
		"What is Gir cow milk yield?",
		"Current cattle market prices",
		"Show me Holstein care tips",
		"Vaccination schedule for calves",
	];

	return (
		<div className="bg-[#fcf8ee] min-h-screen p-8 w-full flex flex-col items-center justify-center gap-4">
			{/* Header */}
			<div className="mb-6">
				<h1 className="text-2xl font-bold mb-1 p-8">Voice Assistant</h1>
				<p className="text-gray-500 text-md">
					Get instant answers to your cattle farming questions using voice
					commands or text chat.
				</p>
			</div>

			{/* Voice Assistant Card */}
			<div className="bg-white rounded-xl border border-gray-200 shadow p-7 mb-4 max-w-lg">
				<div className="flex items-center gap-2 mb-3">
					<span className="text-xl font-semibold">🟢 Voice Assistant</span>
				</div>
				<p className="text-gray-600 text-sm mb-4">
					Speak naturally in your preferred language to get instant answers
				</p>
				<div className="flex items-center mb-4">
					<button className="w-10 h-10 rounded-full bg-green-600 flex justify-center items-center text-white text-2xl mr-3">
						🎤
					</button>
					<button className="bg-gray-100 px-4 py-2 rounded border text-sm font-medium text-white">
						Audio On
					</button>
				</div>
				<div>
					<span className="font-semibold mb-1 block text-gray-700">
						Quick Commands:
					</span>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
						{quickCommands.map((cmd, i) => (
							<button
								key={i}
								className="bg-gray-100 px-3 py-2 rounded border text-sm font-medium w-full text-left text-gray-100"
							>
								"{cmd}"
							</button>
						))}
					</div>
					<div className="text-xs mt-3 text-gray-400">
						Voice recognition available in: English, हिंदी, पंजाबी, तेलुगु, बांग्ला,
						मराठी
					</div>
				</div>
			</div>
		</div>
	);
}
