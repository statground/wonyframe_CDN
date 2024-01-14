function Div_project_card_list(props) {
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

	const project_List = Object.keys(props.data).map((btn_data) =>
		<div class="flex flex-row justify-center items-center w-full">
			<div class="flex flex-col justify-center items-center w-full bg-gray-300 rounded-xl w-full min-w-[160px] max-w-[360px] h-fit p-4 space-y-4">
				<div class="grid grid-cols-2 justify-center items-start gap-4">

					<div class="flex flex-row justify-center items-center w-full">
						{props.data[btn_data].url_image_profile_creator == "Unknown"
						?   <div class="flex flex-row justify-center items-center bg-[#6337C1] border-[#A4A4A4] border-solid rounded-xl
										w-[130px] h-[130px]">
								<span class="text-white text-[36px] font-[700]">
									{props.data[btn_data].name.charAt(0)}
								</span>
							</div>
						:   <div class={"border-[2px] border-[#A4A4A4] border-solid rounded-xl w-[130px] h-[130px] "
									  + "bg-[url('https://www.ignite-artist.com/" + props.data[btn_data].url_image_profile_creator + "')] bg-cover bg-center"}>
							</div>
						}
					</div>

					<div class="flex flex-col justify-center items-start w-full">
						<p class="text-[16px] font-[700] w-full truncate ...">
							{props.data[btn_data].name.trim()}
						</p>

						<p class="text-[12px] font-[500] w-full">
							- 모집 기간:<br/>
							{props.data[btn_data].due_date.trim()} 까지<br/>
							({props.data[btn_data].due_date_remain})
						</p>

						<p class="text-[12px] font-[500] w-full">
							- 모집 인원: {props.data[btn_data].cnt_member_limit.toString().trim()} 명
						</p>
					</div>
				</div>

				<hr class="h-px my-8 bg-gray-700 border-0 w-full" />

				<div class="flex flex-row justify-center items-start bg-gray-300 gap-4">
					<Div_act_list data={props.data[btn_data].act} />
				</div>
			</div>
		</div>
	)

	return (
		<div class="grid grid-cols-3 justify-center items-start w-full gap-[12px] md:grid-cols-1">
			{project_List}
		</div>
	)
}