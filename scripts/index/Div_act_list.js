function Div_act_list(props) {
	const btn_List = Object.keys(props.data).map((btn_data) =>
		<button type="button"
				class="w-fit min-w-[32px] max-w-[216px] px-[8px] h-[22px] 
					   flex justify-center items-center border-gray-100 bg-white rounded-md border border-gray-200
					   hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">
			<p class="text-[12px] font-[600] text-[#3B3B3B] truncate ...">{props.data[btn_data].name}</p>
		</button>
	)

	return (
		<div class="flex flex-wrap w-full space-x-[8px] space-y-[8px]">
			<div></div>
			{btn_List}
		</div>
	)
}