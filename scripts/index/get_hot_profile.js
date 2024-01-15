// 핫한 프로필
async function get_hot_profile() {
	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"핫한 프로필"} />, document.getElementById("div_profile_title"))
	ReactDOM.render(<Div_main_skeleton_card_list cols={'2'} />, document.getElementById("div_profile_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/ajax_get_list_artist/?limit=2")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_artist_card_list data={data} cols={'2'} />, document.getElementById("div_profile_contents"));
}