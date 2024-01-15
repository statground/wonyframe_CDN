function Div_project_card_list(props) {
	const project_List = Object.keys(props.data).map((btn_data) =>
		<Div_project_card data={props.data[btn_data]} />
	)

	return (
		<div class={"grid grid-cols-" + props.cols + " justify-center items-start w-full gap-[12px] md:grid-cols-1"}>
			{project_List}
		</div>
	)
}