const MemberTopNavbar = () => {
	return (
		<div className="bg-[#fbf9f1] text-[#3D3436] py-1.5 flex items-center justify-between border-b border-gray-400 w-full h-16 flex-shrink-0 fixed top-0 right-0 z-50">
			<h1
				className="font-madimi
          font-normal
          text-[32px]
          leading-[100%]
          tracking-[0%]
          ml-6 mb-3"
			>
				AgriScan
			</h1>
			<div className="flex items-center gap-4 mr-6">
				<div className="w-10 h-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
					AU
				</div>
			</div>
		</div>
	);
};

export default MemberTopNavbar;
