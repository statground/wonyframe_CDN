function Div_project_card(props) {
	return (
		<div class="flex flex-row justify-center items-center w-full">
			<div class="flex flex-col justify-center items-center w-full bg-gray-300 rounded-xl w-full min-w-[160px] max-w-[360px] h-fit p-4 space-y-4">
				<div class="grid grid-cols-2 justify-center items-start gap-4">

					<div class="flex flex-row justify-center items-center w-full">
						{props.data.url_image_profile_creator == "Unknown"
						?   <div class="flex flex-row justify-center items-center bg-[#6337C1] border-[#A4A4A4] border-solid rounded-xl
										w-[130px] h-[130px]">
								<span class="text-white text-[36px] font-[700]">
									{props.data.name.charAt(0)}
								</span>
							</div>
						:   <div class={"border-[2px] border-[#A4A4A4] border-solid rounded-xl w-[130px] h-[130px] "
									  + "bg-[url('https://www.ignite-artist.com/" + props.data.url_image_profile_creator + "')] bg-cover bg-center"}>
							</div>
						}
					</div>

					<div class="flex flex-col justify-center items-start w-full">
						<p class="text-[16px] font-[700] w-full truncate ...">
							{props.data.name.trim()}
						</p>

						<p class="text-[12px] font-[500] w-full">
							- 모집 기간:<br/>
							{props.data.due_date.trim()} 까지<br/>
							({props.data.due_date_remain})
						</p>

						<p class="text-[12px] font-[500] w-full">
							- 모집 인원: {props.data.cnt_member_limit.toString().trim()} 명
						</p>
					</div>
				</div>

				<hr class="h-px my-8 bg-gray-700 border-0 w-full" />

				<div class="flex flex-row justify-center items-start bg-gray-300 gap-4">
					<Div_act_list data={props.data.act} />
				</div>
			</div>
		</div>
	)
}