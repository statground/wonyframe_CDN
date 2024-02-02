// 주목할 프로젝트
async function get_list_attract_project() {
	function Div_project_card_list(props) {
		props.data['1'].lg_hidden = true

		const project_List = Object.keys(props.data).map((btn_data) =>
			<Div_project_card data={props.data[btn_data]} />
		)
	
		return (
			<div class={"grid grid-cols-2 justify-center items-start w-full gap-[12px] lg:grid-cols-1"}>
					{project_List}
            </div>
		)
	}


	// 스켈레톤
	ReactDOM.render(<Div_main_card_title title={"주목할 프로젝트"} />, document.getElementById("div_attract_project_title"))
	ReactDOM.render(<Div_main_skeleton_cols2 />, document.getElementById("div_attract_project_contents"))

	// 데이터 가져오기
	const data = await fetch("/ajax_get_list_team/?limit=2", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_project_card_list data={data} cols={'2'} />, document.getElementById("div_attract_project_contents"));
}