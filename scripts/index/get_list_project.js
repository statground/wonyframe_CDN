async function get_list_project() {
	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"프로젝트"} more_url={"/project/"} />, document.getElementById("div_project_title"))
	ReactDOM.render(<Div_main_skeleton_cols3 />, document.getElementById("div_project_contents"))

	// 데이터 가져오기
	const data = await fetch("/get_list_new_team/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_project_card_list data={data} />, document.getElementById("div_project_contents"));
}