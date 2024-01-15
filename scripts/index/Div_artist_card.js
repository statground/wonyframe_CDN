function Div_artist_card(props) {
	return (
		<div class="flex flex-row justify-center items-center w-full">
			<div class="flex flex-col justify-center items-center w-full bg-gray-300 rounded-xl w-full min-w-[160px] max-w-[360px] h-fit p-4 space-y-4">
				<div class="grid grid-cols-2 justify-center items-start gap-4">

					<div class="flex flex-row justify-center items-center w-full">
						{props.data.url_image_profile == "Unknown"
						?   <div class="flex flex-row justify-center items-center bg-[#6337C1] border-[#A4A4A4] border-solid rounded-xl
										w-[130px] h-[130px]"
								 href={props.data.url_mypage}>
								<span class="text-white text-[36px] font-[700]">
									{props.data.nickname.charAt(0)}
								</span>
							</div>
						:   <div class={"border-[2px] border-[#A4A4A4] border-solid rounded-xl w-[130px] h-[130px] "
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

				<div class="grid grid-cols-2 justify-center items-start bg-gray-300 gap-4">
					<div class="flex flex-row justify-center items-center w-full">
						<div class="flex flex-row justify-center items-center bg-[#6337C1] border-[#A4A4A4] border-solid rounded-xl
									w-[130px] h-[130px]">
							<span class="text-white text-[12px] font-[700]">
								포트폴리오
							</span>
						</div>
					</div>
					<div class="flex flex-row justify-center items-center w-full">
						<div class="flex flex-row justify-center items-center bg-[#6337C1] border-[#A4A4A4] border-solid rounded-xl
									w-[130px] h-[130px]">
							<span class="text-white text-[12px] font-[700]">
								포트폴리오
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}