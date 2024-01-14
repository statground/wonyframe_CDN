function Div_menu() {
	function Div_menu_text(props) {
		return (
			<a href={props.url} class="flex justify-center items-center w-[100px] h-[17px] px-[12px] py-[25px] 
									   text-gray-700 font-bold
									   hover:bg-gray-200">
				{props.text}
			</a>
		)
	}

	function Div_menu_text_mobile(props) {
		return (
			<li>
				<div class="flex flex-row justify-start items-center content-center text-gray-900 h-[60px]
							hover:bg-gray-200">
					<a href={props.url} class="w-full">
						{props.text}
					</a>
	
					<div class="flex items-stretch h-[24px] max-h-[24px] pt-[4px] ml-[4px] hidden">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_red_dot.svg" class="w-[4px] h-[4px]"/>
					</div>
				</div>
			</li>
		)
	}

	function Div_menu_pc() {
		return (
			<div class="flex justify-between items-center h-[36px]">
				<span id="menu_logo" onClick={() => location.href='/'} 
					class="justify-center items-center w-[180px] h-[17px] px-[12px] py-[25px] cursor-pointer
						   hidden md:flex md:visible
						   text-gray-700 font-bold">
				   로고
				</span>

				<div id="menu_name" class="flex justify-center items-center md:hidden">
					<span id="menu_logo" onClick={() => location.href='/'} 
						class="flex justify-center items-center w-[180px] h-[17px] px-[12px] py-[25px] cursor-pointer
							   text-gray-700 font-bold">
					   로고
					</span>
				</div>


				<div id="menu_right" class="flex justify-center items-center space-x-[10px] md:hidden">
					<Div_menu_text text={"메인"} url={"/"} />
					<Div_menu_text text={"작가"} url={"/artist/"} />
					<Div_menu_text text={"프로젝트"} url={"/project/"} />
					<Div_menu_text text={"이벤트"} url={"/event/"} />

					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer 
								 w-[40px] min-w-[40px] max-w-[40px] h-[36px] min-h-[36px] max-h-[36px]
								 hover:bg-gray-200"
						  id="btn_letter_closed" onClick={() => menu('letter')}>
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_letter.svg" class="w-[16px] h-[16px]" />
					</span>

					<span class="hidden" id="btn_letter_opened" onClick={() => menu('letter')}>
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_cancel.svg" class="w-[16px] h-[16px]" />
					</span>

					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer
								 w-[40px] min-w-[40px] max-w-[40px] h-[36px] min-h-[36px] max-h-[36px]
								 hover:bg-gray-200"
						  id="btn_alert_closed" onClick={() => menu('alert')}>
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_bell.svg" class="w-[24px] h-[24px]" />
					</span>

					<span class="hidden" id="btn_alert_opened" onClick={() => menu('alert')}>
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_cancel.svg" class="w-[16px] h-[16px]" />
					</span>

					{ gv_username == ""
						?   ""
						:   <a href="/account/userinfo/" class="flex justify-center items-center w-[80px] h-[36px] px-[12px] py-[25px] 
															  text-gray-700 font-bold
															  hover:bg-gray-200">
								내 정보
							</a>
					}

					{ gv_username == ""
						?   <a href="/account/" class="flex justify-center items-center w-[80px] h-[36px] px-[12px] py-[25px] 
													   text-gray-700 font-bold
													   hover:bg-gray-200">
								로그인
							</a>
						:   <a href="/account/logout/" class="flex justify-center items-center w-[80px] h-[36px] px-[12px] py-[25px] 
															  text-gray-700 font-bold
															  hover:bg-gray-200">
								로그아웃
							</a>
					}
				</div>
		
				<div class="items-center justify-center hidden md:flex md:visible">
					<button type="button" id="btn_menu_closed" onClick={() => menu('hamburger')}
							class="inline-flex justify-center items-center text-sm text-white rounded-lg 
								   w-[40px] min-w-[40px] max-w-[40px] h-[36px] min-h-[36px] max-h-[36px]
								   hover:bg-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_hamburger.svg" class="w-[24px] h-[24px]" />
					</button>
		
					<button type="button" id="btn_menu_opened" onClick={() => menu('hamburger')}
							class="hidden">
						<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_cancel.svg" class="w-[16px] h-[16px]" />
					</button>
						
				</div>
			</div>
		)
	}

	function Div_menu_mobile() {
		return (
			<div id="div_menu_mobile" class="hidden">

				<div class={
								gv_username == ""
								?   "grid grid-cols-4 sm:grid-cols-3"
								:   "grid grid-cols-5 sm:grid-cols-4"
						   }>
					<div class="flex justify-center items-center w-full h-[60px] cursor-pointer
								hover:bg-gray-200
								focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => menu('letter')} >
						<span class="flex flex-row justify-center items-center text-[14px] font-[600]">
							<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_letter.svg" class="w-[16px] h-[16px]" />
						</span>
					</div>
					<div class="flex justify-center items-center w-full h-[60px] cursor-pointer
								hover:bg-gray-200
								focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => menu('alert')} >
						<span class="flex flex-row justify-center items-center text-[14px] font-[600]">
							<img src="https://cdn.jsdelivr.net/gh/statground/wonyframe_CDN/image/menu/menu_bell.svg" class="w-[24px] h-[24px]" />
						</span>
					</div>

					{
						gv_username == ""
						?   ""
						:   <div class="flex justify-center items-center w-full h-[60px] cursor-pointer
										hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
								onClick={() => location.href='/account/userinfo/'}>
								내 정보
							</div>
					}

					{
						gv_username == ""
						?   <div class="flex justify-center items-center w-full h-[60px] cursor-pointer
										hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
								onClick={() => location.href='/account/'}>
								로그인
							</div>
						:   <div class="flex justify-center items-center w-full h-[60px] cursor-pointer
										hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
								onClick={() => location.href='/account/logout/'}>
								로그아웃
							</div>
					}
					
					<div class="flex justify-center items-center w-full h-[60px] cursor-pointer visible sm:hidden
								hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
						 onClick={() => menu('hamburger')}>
						서브 메뉴 닫기
					</div>
				</div>

				<ul class="flex-row text-[14px] font-[600]">
					<Div_menu_text_mobile text={"메인"} url={"/"} />
					<Div_menu_text_mobile text={"작가"} url={"/artist/"} />
					<Div_menu_text_mobile text={"프로젝트"} url={"/project/"} />
					<Div_menu_text_mobile text={"이벤트"} url={"/event/"} />
				</ul>
			</div>
		)
	}

	return (
		<nav class="bg-backgroundblack justify-center items-center 
					px-[100px] py-[12px] 
					w-full border-b-2 border-[#121212]
					sm:px-[16px]">
			<Div_menu_pc />
			<Div_menu_mobile />
			<Div_menu_letter />
			<Div_menu_alert />
		</nav>
	)
}