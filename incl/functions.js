
/* --------------------------------------------------------------
	$THE MENU
-------------------------------------------------------------- */

window.onload = function() {
		
		var menuRef = document.getElementById("menu");
		menuRef.onclick = function() {
		var navRef = document.getElementById("theNav");
		var theClassRef = navRef.getAttribute("class");
		toggleMenu(theClassRef);
		}

		function toggleMenu(classIn) {
			if (classIn == "closed") {
				var navRef = document.getElementById("theNav");
				navRef.setAttribute("class", "open");
			}

			else {
				var navRef = document.getElementById("theNav");
				navRef.setAttribute("class", "closed");
			}
		}
}

/* --------------------------------------------------------------
	$YOUR FUNCTIONS
-------------------------------------------------------------- */

