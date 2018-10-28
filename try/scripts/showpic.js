function showPic(pic){
	var source = pic.getAttribute("href");
	var place = document.getElementById("place");
	place.setAttribute("src",source);
	var title = pic.getAttribute('title');
	descrption = document.getElementById("description");
	description.firstChild.nodeValue =title;

}
function countBodyChildren(pic){
	var body_ele = document.getElementsByTagName("body")[0];
	//alert(body_ele.nodeType);
}
window.onload = countBodyChildren;