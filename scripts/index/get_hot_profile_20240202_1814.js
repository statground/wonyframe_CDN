// 핫한 프로필
async function get_hot_profile() {
	function Div_hot_artist_list(props) {
		props.data['1'].lg_hidden = true
		
		const artist_List = Object.keys(props.data).map((btn_data) =>
			<Div_artist_card data={props.data[btn_data]} />
		)
	
		return (
			<div class={"grid grid-cols-2 justify-center items-start w-full gap-[12px] md:grid-cols-1"}>
				{artist_List}
			</div>
		)
	} 

	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"핫한 프로필"} />, document.getElementById("div_profile_title"))
	ReactDOM.render(<Div_main_skeleton_cols2 />, document.getElementById("div_profile_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/ajax_get_list_artist/?limit=2")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_hot_artist_list data={data} />, document.getElementById("div_profile_contents"));
}