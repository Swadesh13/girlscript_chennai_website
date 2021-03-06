let header = $(`
<nav class="navbar fixed-top navbar-expand-lg" id="navbar">
  <a class="navbar-brand" href="index.html"><img src="assets/Images/Logo1.png" width="210px" id="logo"></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
	  <ul class="navbar-nav ml-5">
		<li class="nav-item">
		  <a class="nav-link active"  href="index.html"><span>HOME</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="announcements.html"><span>ANNOUNCEMENTS</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="team.html"><span>OUR TEAM</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="achievements.html"><span>OUR ACHIEVEMENTS</span></a>
		</li>
		  <li class="nav-item">
			<a class="nav-link" href="blogs.html"><span>BLOGS</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="contactUs.html"><span>CONTACT US</span></a>
		</li>

	  </ul>
	</div>
  </nav>`);
let footer = $(`
<footer>
<div class="container">
  <div class="row">
	<div class="col-lg-4 footer-logo"> 
		<img src="assets/Images/logo.png" alt="" class="logo">
	</div>
	<div class="col-lg-4" id="footer-c">
		<div class="switch">
		<label>	
			<input type="checkbox" name="theme" onchange="changeTheme()">	
			<span class="slider round"></span>	
		</label>
		</div>
	  <h3 class="footer-h">Join Our Newsletter</h3>
	  <div class="border"></div>
	  <form action="" class="newsletter-form" name="footermail" onsubmit="return validateFooterForm()" method="post" >
	   <input type="email" id="email" name="email" class="txtb" placeholder="Enter Your Email" required >
	  </form>
	  <button class="btn btn-spl mt-2" type="submit">Send</button>
	</div>
  </div>
   <center>

		<div class="social-media">
		  <a class="fa fa-twitter"  href="https://twitter.com/girlscriptch"></a>
		  <a class="fa fa-instagram" href="https://www.instagram.com/girlscriptchennai/"></a>
		  <a class="fa fa-github" href="https://github.com/girlscriptchennai"></a>
		  <a class="fa fa-linkedin" href="https://www.linkedin.com/company/girlscript-chennai/"></a>
		</div>
		  <h6 class="footer-h3">Made with ♥</h6>
	</center>
</div>		
</footer>`);

function scrollFunction() {
	let navBar = document.getElementById("navbar"),
		logo = document.getElementById("logo");
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		navBar.style.padding = "2px 16px";
		logo.width = "160px";
	} else {
		navBar.style.padding = "4px 16px";
		logo.style.width = "210px";
	}
}

function activeTab() {
	let navBar = $("#navbarNav");
	let navItems = navBar[0].children[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for (let i = 0; i < navItems.length; i++) {
		let childHref = navItems[i].children[0].pathname.toLowerCase();
		if (
			(childHref === pageName || childHref.includes(pageName)) &&
			window.location.pathname !== "/"
		)
			navItems[i].children[0].classList.add("active");
		else navItems[i].children[0].classList.remove("active");
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function validateFooterForm() {
	let emailID = document.footermail.email,
		atpos = emailID.value.indexOf("@"),
		dotpos = emailID.value.lastIndexOf(".");

	if (atpos < 1 || (dotpos - atpos < 2)) {
		alert("Please enter correct email ID")
		emailID.focus();
		return false;
	}
	return true;
}

function changeTheme() {
	let docElement = document.documentElement;
	docElement.classList.add('transition');
	window.setTimeout(() => {
		docElement.classList.remove('transition')
	}, 1000)
	if (event.target.checked) {
		docElement.setAttribute('data-theme', 'dark');
	} else {
		docElement.setAttribute('data-theme', 'light');
	}
}

// Window Loads
$(function () {
	let bodyElement = $(`body`);
	bodyElement.prepend(header);
	bodyElement.append(footer);
	activeTab();
})

window.onscroll = function () {
	scrollFunction();
};

