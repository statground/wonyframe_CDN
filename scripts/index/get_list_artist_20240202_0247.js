// 회원님을 위한 작가
async function get_list_artist() {
	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"회원님을 위한 작가"} more_url={"/artist/"} />, document.getElementById("div_artist_title"))
	ReactDOM.render(<Div_main_skeleton_card_list cols={'3'} />, document.getElementById("div_artist_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/ajax_get_list_artist/?limit=3")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_artist_card_list data={data} cols={'3'} />, document.getElementById("div_artist_contents"));
}