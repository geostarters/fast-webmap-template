import $ from "jquery";
import "../semantic/semantic";
import "../semantic/semantic.css";

import "./sidebar.css";

export default function createSidebar(parent) {
	
	const html = `<div id="sidebar" class="movein">
		<div id="toggleBtn" class="ui icon button">
			<i class="angle left icon"></i>
		</div>
		<div class="ui segment" id="panel">
			<a class="item">
				<i class="home icon"></i>
				Home
			</a>
			<a class="item">
				<i class="block layout icon"></i>
				Topics
			</a>
			<a class="item">
				<i class="smile icon"></i>
				Friends
			</a>
		</div>
	</div>`;
	const template = document.createElement("template");
	template.innerHTML = html;

	$(parent).append(template.content.cloneNode(true));

	$("#toggleBtn").click(function() {
		if ($("#sidebar").hasClass("movein")) {
			$("#sidebar").removeClass("movein").addClass("moveout");
			$("#toggleBtn > i").removeClass("left").addClass("right");
		} else {
			$("#sidebar").removeClass("moveout").addClass("movein");
			$("#toggleBtn > i").removeClass("right").addClass("left");
		}
	});

	/*
	$(".ui.launch.button").on("click", function(){
		console.log($(".ui.launch.button"));

		if ($("#sidebar").hasClass("movein")) {
			//$("#sidebar").removeClass("movein").addClass("moveout");
			//$(".ui.launch.button").removeClass("right").addClass("left");
		} else {
			//$("#sidebar").removeClass("moveout").addClass("movein");
			//$(".ui.launch.button").removeClass("left").addClass("right");
		}
	});
	
	$(".ui.sidebar").sidebar({
		transition: "overlay",
		context: $("#sidebar"),
		dimPage: false
	}).sidebar("attach events",".ui.launch.button");
	*/

}
