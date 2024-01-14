function Div_main_skeleton_cols2() {
	function Div_main_skeleton_sub() {
		return (
			<div class="flex flex-row justify-center items-center w-full">
				<div class="grid grid-cols-1 content-between bg-gray-300 rounded-xl w-full min-w-[160px] max-w-[360px] h-[250px]">
				</div>
			</div>
		)
	}

	return (
		<div class="grid grid-cols-2 justify-center items-center w-full gap-[12px] animate-pulse md:grid-cols-1">
			<Div_main_skeleton_sub /> 
			<Div_main_skeleton_sub /> 
		</div>
	)
}