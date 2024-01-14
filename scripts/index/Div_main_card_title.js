function Div_main_card_title(props) {
	return (
		<div class="flex flex-row justify-between items-center text-start w-full">
			<div class="flex flex-row justify-between items-end space-x-[6px]">
				<h2 class="text-[24px] font-[700] sm:text-[20px] sm:font-[600]">{props.title}</h2>
				<h2 class="text-[16px] font-[500] sm:text-[20px] sm:font-[600]">{props.subtitle}</h2>
			</div>

			{props.more_url != null
				?<a class="text-blue-700 text-[16px] font-[600] sm:text-[14px]" href={props.more_url}>더 보기</a>
				:""
			}
		</div>
	)
}