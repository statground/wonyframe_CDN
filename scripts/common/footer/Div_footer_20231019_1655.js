function Div_footer() {
	function Div_footer_address() {
		return (
			<div>
				<span class="flex text-sm visible sm:hidden">
					플랫폼의 모든 컨텐츠는 저작권법에 의거 보호받고 있습니다.<br/><br/>
		
					(주)워니프레임　|　대표: 박종원　|　개인정보보호책임자: 유재성<br/>
					사업자등록번호: 836-81-00882　|　통신판매업신고번호: 0000-서울00-0000<br/>
					서울시 동작구 동작대로7길 48 새한빌딩 503<br/>
					대표전화: 0507-1300-9704　|　문의: <br/>
				</span>
				<span class="text-sm hidden sm:flex sm:visible">
					플랫폼의 모든 컨텐츠는 저작권법에 의거 보호받고 있습니다.<br/><br/><br/>
		
					(주)워니프레임<br/><br/>
					대표: 박종원　|　개인정보보호책임자: 유재성<br/>
					사업자등록번호: 836-81-00882<br/>
					통신판매업신고번호: 0000-서울00-0000<br/><br/>
					서울시 동작구 동작대로7길 48 새한빌딩 503<br/>
					대표전화: 0507-1300-9704<br/>
					문의:
				</span>
			</div>
		)
	}

	function Div_footer_icons() {
		return (
			<ul class="flex flex-wrap justify-center items-center mb-6 text-center text-sm space-x-8 sm:mb-0">
				<span class="mr-2">공동 개발 및 운영 : </span>
				<li class="flex flex-row justify-center items-center w-fit h-4">
					<a href="https://www.wonyframe.com/" target="_blank"
					   class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy">
						<img src="https://cdn.imweb.me/thumbnail/20211108/60f085340e27d.png"
							class="object-scale-down h-3" alt="Logo" />
					</a>
				</li>
				<li class="flex flex-row justify-center items-center w-fit h-4">
					<a href="https://www.statground.net" target="_blank"
					   class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy">
						<img src="https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/logo/logo.png"
							class="object-scale-down h-4" alt="Logo" />
					</a>
				</li>
				<li class="flex flex-row justify-center items-center w-fit h-4">
					<a href="https://www.statground.net" target="_blank"
					   class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/logo/logo_002.png"
							class="object-scale-down h-4" alt="Logo" />
							
					</a>
				</li>
			</ul>
		)
	}

	function Div_footer_sub_menu() {
		return (
			<ul class="flex flex-wrap items-center mb-6 text-center text-sm sm:grid sm:grid-cols-2 sm:mb-0 pt-8">
				<li>
					<a href="/intro/notice" class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy md:mr-6 ">공지사항</a>
				</li>
				<li>
					<a href="/intro" class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy md:mr-6 ">서비스 소개</a>
				</li>
				<li>
					<a href="/intro/terms" class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy md:mr-6">서비스 이용약관</a>
				</li>
				<li>
					<a href="/intro/privates" class="mr-4 hover:underline hover:decoration-gray-900 hover:decoration-wavy md:mr-6">개인정보 보호 방침</a>
				</li>
			</ul>
		)
	}


	return (
		<div class="w-full">
			<div class="sm:flex sm:flex-col sm:items-center sm:justify-between mx-auto">
				<Div_footer_address />
				<Div_footer_sub_menu />
			</div>
	
			<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
			
			<div class="flex flex-row justify-start items-center mx-auto">
				<Div_footer_icons />
			</div>
		</div>
	)  
}