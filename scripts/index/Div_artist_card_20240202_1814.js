function Div_artist_card(props) {
	return (
		<div class={
						props.data.lg_hidden
						?   "flex flex-row justify-center items-center w-full visible lg:hidden"
						:   "flex flex-row justify-center items-center w-full"
				   }>
			<div class="flex flex-col justify-center items-center w-full bg-white rounded-xl 
						w-[300px] min-w-[300px] max-w-[300px] h-fit p-4 space-y-4
						border border-gray-400 shadow">

				<div class="grid grid-cols-2 justify-center items-start gap-4">
					<div class="flex flex-row justify-center items-center w-full">
						{props.data.url_image_profile == "Unknown"
						?   <div class="flex flex-row justify-center items-center bg-white border-gray-400 border-solid rounded-xl
										w-[130px] h-[130px]"
								 href={props.data.url_mypage}>
								<span class="text-gray-600 text-[36px] font-[700]">
									{props.data.nickname.charAt(0)}
								</span>
							</div>
						:   <div class={"border-[2px] border-gray-400 border-solid rounded-xl w-[130px] h-[130px] "
									  + "bg-[url('https://www.ignite-artist.com/" + props.data.url_image_profile + "')] bg-cover bg-center"}>
							</div>
						}
					</div>

					<div class="flex flex-col justify-center items-start w-full">
						<a href={props.data.url_mypage} class="text-[16px] font-[700] w-full truncate ...">
							{props.data.nickname.trim()}
						</a>

						<Div_act_list data={props.data.act} />
					</div>
				</div>

				<hr class="h-px my-8 bg-gray-700 border-0 w-full" />

				<div class="grid grid-cols-2 justify-center items-start gap-4">
					<div class="flex flex-row justify-center items-center w-full">
						<div class="flex flex-row justify-center items-center bg-blue-100 border-[#A4A4A4] border-solid rounded-xl
									w-[130px] h-[130px]">
							<span class="text-gray-500 text-[12px] font-[700]">
								포트폴리오
							</span>
						</div>
					</div>
					<div class="flex flex-row justify-center items-center w-full">
						<div class="flex flex-row justify-center items-center bg-blue-100 border-[#A4A4A4] border-solid rounded-xl
									w-[130px] h-[130px]">
							<span class="text-gray-500 text-[12px] font-[700]">
								포트폴리오
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}