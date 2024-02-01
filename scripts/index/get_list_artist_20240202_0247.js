// 회원님을 위한 작가
async function get_list_artist() {
	function Div_artist_card_list(props) {
		const artist_List = Object.keys(props.data).map((btn_data) =>
			<Div_artist_card data={props.data[btn_data]} />
		)
	
		return (
			<div class="flex flex-col w-full h-fit" id="div_artist_sub">
				<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_artist_slider">
					{artist_List}
					<div id="div_artist_prev"
						class="absolute top-[675px] left-[68px] z-10 sm:top-[375px] sm:left-[-5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_left.svg" class="w-[36px] h-[36px]" />
					</div>

					<div id="div_artist_next"
						class="absolute top-[675px] right-[82px] z-10 sm:top-[375px] sm:right-[5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_right.svg" class="w-[36px] h-[36px]" />
					</div>
				</div>
			</div>
		)
	} 
	

	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"회원님을 위한 작가"} more_url={"/artist/"} />, document.getElementById("div_artist_title"))
	ReactDOM.render(<Div_main_skeleton_list />, document.getElementById("div_artist_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/ajax_get_list_artist/?limit=20")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_artist_card_list data={data} />, document.getElementById("div_artist_contents"));


	// 스크롤 이벤트 추가
	const next = document.querySelectorAll('#div_artist_next');
	const prev = document.querySelectorAll('#div_artist_prev');
	const slider = document.querySelectorAll('#div_artist_slider')

	for(let i = 0 ; i < slider.length ; i++){
		makeSlider(slider[i], prev[i], next[i]);
	}

	function makeSlider(element, prev, next){
		next.addEventListener('click',()=>{
			const offsetX = element.offsetWidth;
			element.scrollBy(offsetX,0)
		})
		prev.addEventListener('click',()=>{
			const offsetX = element.offsetWidth;
			element.scrollBy(-offsetX,0)
		})
	}
}