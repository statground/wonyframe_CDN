function set_main() {
	function Div_main() {
		return (
			<div class="w-full">
				<div class="w-full" id="div_banner_top">
					<div class="bg-gray-200 w-full max-w-screen h-[360px]"></div>
				</div>

				<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]" id="div_artist">
					<div id="div_artist_title"></div>
					<div class="items-center pt-[24px] sm:pt-[12px]" id="div_artist_contents"></div>
				</div>
	
				<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]" id="div_project">
					<div id="div_project_title"></div>
					<div class="items-center pt-[24px] sm:pt-[12px]" id="div_project_contents"></div>
				</div>
			
				<div class="grid grid-cols-2 justify-center items-start md:grid-cols-1">
					<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]">
						<div id="div_profile_title"></div>
						<div class="items-start pt-4" id="div_profile_contents"></div>
					</div>

					<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]">
						<div id="div_attract_project_title"></div>
						<div class="items-start pt-4" id="div_attract_project_contents"></div>
					</div>
				</div>

				<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]" id="div_board">
					<div id="div_board_title"></div>
					<div class="items-center pt-[24px] sm:pt-[12px]" id="div_board_contents"></div>
				</div>
			</div>
		)
	}
	
	ReactDOM.render(<Div_main />, document.getElementById("div_main"))

	// 회원님을 위한 작가
	get_list_artist()
	
	// 프로젝트
	get_list_project()

	// 핫한 프로필
	get_hot_profile()

	// 주목할 프로젝트
	get_list_attract_project()

	ReactDOM.render(<Div_main_card_title title={"마감인 공지사항"} more_url={"/intro/notice/"} />, document.getElementById("div_board_title"))
	ReactDOM.render(<Div_main_board />, document.getElementById("div_board_contents"))	
}