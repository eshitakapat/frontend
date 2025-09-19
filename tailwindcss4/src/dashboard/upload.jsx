export default function IdentifyBreed() {
	return (
		<div className="bg-[#fcf8ee] min-h-screen p-8">
			{/* Header */}
			<div className="flex items-center justify-between mb-4">
				<div>
					<h1 className="text-3xl font-bold p-8">Identify Breed</h1>
					<p className="text-gray-500 text-md">
						Upload a clear image of your cattle to get instant breed
						identification and care recommendations.
					</p>
				</div>
				<a href="/dashboard/history">
					<button className="flex items-center gap-2 px-4 py-2 bg-[#f7f5ee] border rounded-lg shadow font-medium text-white">
						{/* History icon: use emoji here for simplicity */}
						<span>⏳</span>
						View History
					</button>
				</a>
			</div>

			{/* Tips for Best Results */}
			<div className="bg-white rounded-xl border border-gray-200 p-5 mb-6 shadow">
				<h2 className="text-lg font-semibold mb-1">Tips for Best Results</h2>
				<p className="text-gray-500 mb-3 text-sm">
					Follow these guidelines for accurate breed identification
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
					<div className="flex items-center gap-3">
						<span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg">
							1
						</span>
						<span className="text-sm">
							Take photos in good lighting conditions
						</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg">
							2
						</span>
						<span className="text-sm">
							Capture the full body or clear head shot
						</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg">
							3
						</span>
						<span className="text-sm">
							Ensure the animal is clearly visible
						</span>
					</div>
				</div>
			</div>

			{/* Upload Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-white">
				{/* Upload box */}
				<div className="bg-white rounded-xl border border-gray-200 shadow flex flex-col items-center justify-center h-64">
					<div className="border-dashed border-2 border-gray-300 rounded-lg w-40 h-40 flex flex-col items-center justify-center mb-2">
						<span className="text-4xl mb-2">⬆️</span>
						<span className="font-semibold text-md text-black">
							Upload Cattle Image
						</span>
					</div>
					<span className="text-xs text-gray-500 mb-2">
						Drag and drop your cattle image here, or click to browse
					</span>
					<div className="flex gap-4 mb-2">
						<button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded border text-sm font-medium">
							<span>📷</span> Take Photo
						</button>
						<button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded border text-sm font-medium">
							<span>📁</span> Browse Files
						</button>
					</div>
					<span className="text-xs text-gray-400 mt-2">
						Supports: JPG, PNG, WebP (Max 10MB)
					</span>
				</div>
				{/* Result box */}
				<div className="bg-white rounded-xl border border-gray-200 shadow flex flex-col items-center justify-center h-64">
					<span className="text-4xl mb-2">⏳</span>
					<span className="font-semibold text-md mb-2">No Results Yet</span>
					<span className="text-xs text-gray-500">
						Upload an image to see breed identification results here
					</span>
				</div>
			</div>
		</div>
	);
}
