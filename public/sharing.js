let ul_dlLinks = document.getElementById('ul_dlLinks');
let li_dlLinks = ul_dlLinks.getElementsByTagName('li');

for(let i=0; i<li_dlLinks.length; i++){
	let tmp_dlLink = li_dlLinks[i].innerText.trim();

	li_dlLinks[i].innerHTML = "<a href='/download/" +tmp_dlLink+ "' download>" + tmp_dlLink + "</a>";

	console.log(li_dlLinks[i]);
}