// 주목할 프로젝트
async function get_list_attract_project() {
	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"주목할 프로젝트"} />, document.getElementById("div_attract_project_title"))
	ReactDOM.render(<Div_main_skeleton_card_list cols={'2'} />, document.getElementById("div_attract_project_contents"))

	// 데이터 가져오기
	const data = await fetch("/ajax_get_list_team/?limit=2", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_project_card_list data={data} cols={'2'} />, document.getElementById("div_attract_project_contents"));
}