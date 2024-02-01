// 프로젝트
async function get_list_project() {
	function Div_project_card_list(props) {
		const project_List = Object.keys(props.data).map((btn_data) =>
			<Div_project_card data={props.data[btn_data]} />
		)
	
		return (
			<div class="flex flex-col w-full h-fit" id="div_project_sub">
				<div class="flex flex-nowrap justify-start items-start space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_project_slider">
					{project_List}
					<div id="div_project_prev"
					class="absolute top-[1075px] left-[68px] z-10 sm:top-[1025px] sm:left-[-5px] cursor-pointer
							hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_left.svg" class="w-[36px] h-[36px]" />
				</div>

				<div id="div_project_next"
					class="absolute top-[1075px] right-[82px] z-10 sm:top-[1025px] sm:right-[5px] cursor-pointer
							hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_right.svg" class="w-[36px] h-[36px]" />
				</div>
			</div>
		</div>
		)
	}

	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"프로젝트"} more_url={"/project/"} />, document.getElementById("div_project_title"))
	ReactDOM.render(<Div_main_skeleton_list />, document.getElementById("div_project_contents"))

	// 데이터 가져오기
	const data = await fetch("/ajax_get_list_team/?limit=20", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_project_card_list data={data} />, document.getElementById("div_project_contents"));

	// 스크롤 이벤트 추가
	const next = document.querySelectorAll('#div_project_next');
	const prev = document.querySelectorAll('#div_project_prev');
	const slider = document.querySelectorAll('#div_project_slider')

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