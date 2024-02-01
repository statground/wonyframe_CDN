function set_main() {
	function Div_banner_top(props) {
		let class_text_small = "font-[600] text-[30px] md:text-[20px] sm:text-[14px]"
		let class_text_large = "font-[600] text-[65px] md:text-[36px] sm:text-[24px]"

		return (
			<div class="flex flex-betweeen bg-gray-200 w-full max-w-screen h-[360px]">
				<div class="grid grid-cols-3 justify-between items-center text-start w-full h-[400px] sm:h-[180px] bg-white cursor-pointer border-b-2 border-gray-100"
					onClick={props.function}>
					<div class="flex flex-col col-span-2 w-full justify-start items-start px-[80px] md:px-[40px] sm:px-[12px]">
						<p class={class_text_large}>
							{props.text1}
						</p>
						
						<div class="flex flex-row justify-center items-center w-full">
							<hr class="w-1/3 h-1 my-8 bg-gray-200 border-0 rounded" />
							<div class="absolute px-4 -translate-x-1/3 bg-white">
								<svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
									<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
								</svg>
							</div>
							<hr class="w-1/3 h-1 my-8 bg-gray-200 border-0 rounded" />
						</div>

						<p class={class_text_small}>
							{props.text2}
						</p>
						<p class={class_text_small}>
							{props.text3}
						</p>
						<p class={class_text_small}>
							{props.text4}
						</p>
					</div>

					<div class="flex flex-row justify-center items-center w-full">
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/logo/logo.png" class="h-[80px] sm:h-[40px]" />
					</div>
				</div>
			</div>
		)
	}

	function Div_main() {
		return (
			<div class="flex flex-col w-full space-y-[40px] sm:space-y-[16px]">
				<div class="w-full mb-[40px]" id="div_banner_top">
					<Div_banner_top text1={"마감하는 사람끼리 만나는 곳"}
									text2={"웹툰, 게임, 캐릭터, 이모티콘"}
									text3={"글작가, 그림작가, PD, AI편집"}
									text4={"공모전, 외주, 장/단기 프로젝트"} />
				</div>

				<div class="flex flex-col w-full px-[100px] sm:px-[20px]" id="div_artist">
					<div id="div_artist_title"></div>
					<div class="items-center pt-[24px] sm:pt-[12px]" id="div_artist_contents"></div>
				</div>
	
				<div class="flex flex-col w-full px-[100px] sm:px-[20px]" id="div_project">
					<div id="div_project_title"></div>
					<div class="items-center pt-[24px] sm:pt-[12px]" id="div_project_contents"></div>
				</div>
			
				<div class="grid grid-cols-2 justify-center items-start md:grid-cols-1">
					<div class="flex flex-col w-full px-[100px] sm:px-[20px]">
						<div id="div_profile_title"></div>
						<div class="items-start pt-4" id="div_profile_contents"></div>
					</div>

					<div class="flex flex-col w-full px-[100px] sm:px-[20px]">
						<div id="div_attract_project_title"></div>
						<div class="items-start pt-4" id="div_attract_project_contents"></div>
					</div>
				</div>

				<div class="flex flex-col w-full px-[100px] sm:px-[20px]" id="div_board">
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