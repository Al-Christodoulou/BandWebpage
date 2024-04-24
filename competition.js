var usersinfo = [ [0,0] ];

// ================================
// Συναρτήσεις για το νέο παράθυρο
// ================================
function newWindowShowWinners(num_of_people)
{
	smallwindow.document.write("<p class='concertfont' style='color: lightblue; text-decoration: underline;'>Στατιστικά:</p>");

	var totalnumber = 0;
	for (var i = 0; i < num_of_people; i++)
		if (usersinfo[i][1] == 2003)
			++totalnumber;

	smallwindow.document.write("<p class='concertfont'>");

	if (totalnumber == 0)
	{
		smallwindow.document.write("Κανένα άτομο δεν έχει γεννηθεί το 2003.</p>");
		smallwindow.document.write("<p class='concertfont'>Κανένας δεν κέρδισε.</p>");
		return;
	}
	else if (totalnumber == 1)
	{
		smallwindow.document.write(totalnumber);
		smallwindow.document.write(" άτομο έχει γεννηθεί το <strong>2003</strong> και κέρδισε:</p>");
	}
	else
	{
		smallwindow.document.write(totalnumber);
		smallwindow.document.write(" άτομα έχουν γεννηθεί το <strong>2003</strong> και κέρδισαν:</p>");
	}

	for (var i = 0; i < num_of_people; i++)
	{
		if (usersinfo[i][1] == 2003)
		{
			smallwindow.document.write("<p class='concertfont' style='color: lightgreen;'>");
			smallwindow.document.write(usersinfo[i][0]);
			smallwindow.document.write(",</p>");
		}
	}
}

function makeNewWindow(num_of_people)
{
	smallwindow = window.open("about:blank", "Ratting", "width=1000, height=275");
	smallwindow.document.open();
	smallwindow.document.write("<link rel='stylesheet' href='css.css'>");

	smallwindow.document.write("<div style='background-image: url(concert_blur.jpg); background-attachment: fixed; background-size: cover;'>");
	newWindowShowWinners(num_of_people);
	smallwindow.document.write("<br><br><br><br><br><br>");
	smallwindow.document.write("</div>");
}

// ======================================
// Τέλος συναρτήσεων για το νέο παράθυρο
// ======================================


// Επιπλέον κενά στο τέλος της σελίδας, αφού δημιουργήσουμε
// την φόρμα για το κάθε άτομο
function endBreakingSpaces(num_of_people)
{
	imagedivID = document.getElementById("pageimage");
	var i = 0;
	if (num_of_people > 19)
	{
		return;
	}

	for (i; i < 19 - num_of_people; i++)
	{
		br = document.createElement("br");
		imagedivID.appendChild(br);
	}
}

function addNBSP(elementID, amount)
{
	p = document.createElement("span");
	p.innerHTML = "";
	for (var i = 0; i < amount; i++)
		p.innerHTML += "&nbsp";

	elementID.appendChild(p);
}

function addBR(elementID, amount)
{
	for (var i = 0; i < amount; i++)
	{
		br = document.createElement("br");
		elementID.appendChild(br);
	}
}

function form_addLabel(formElement, inputID, text)
{
	var label = document.createElement("label");
	var label_for = document.createAttribute("for");
	label_for.value = inputID + i; // π.χ. username0

	// Το span εσωτερικά του label.
	var labelspan = document.createElement("span");
	var labelspan_attr = document.createAttribute("class");
	labelspan_attr.value = "concertfont";
	labelspan.setAttributeNode(labelspan_attr); // Δώσε την κλάση στο <span>
	// Το τελικό κείμενο εσωτερικά του span, που είναι εσωτερικά του label.
	labelspan.innerHTML = text;

	// =========================================================
	// <label for="usernameX">
	// 		<span class="concertfont">Ψευδώνυμο: </span>
	// </label>
	// =========================================================
	label.setAttributeNode(label_for); // Δώσε το "for" στο label
	label.appendChild(labelspan); // Βάλε το <span> μέσα στο label
	formElement.appendChild(label); // Βάλε το τελικό αποτέλεσμα στην φόρμα
}

function form_addInput(formElement, inputID, pInputType)
{
	var input = document.createElement("input");
	var input_type = document.createAttribute("type");
	input_type.value = pInputType;
	input.setAttributeNode(input_type); // Δώσε το type στο input

	var id_attribute = document.createAttribute("id");
	id_attribute.value = inputID + i;
	input.setAttributeNode(id_attribute); // Δώσε το id στο input

	// ========================================
	// <input required type="text" id="birthyearX">
	// ========================================
	formElement.appendChild(input);
}

function form_addConfirmButton(formElement, inputID)
{
	var button = document.createElement("input");

	var buttontype = document.createAttribute("type");
	buttontype.value = "button";
	button.setAttributeNode(buttontype); // Δώσε το type στο button

	var buttonID = document.createAttribute("id");
	buttonID.value = inputID + i;
	button.setAttributeNode(buttonID); // Δώσε το id στο button

	var buttontext = document.createAttribute("value");
	buttontext.value = "Υποβολή";
	button.setAttributeNode(buttontext); // Δώσε το value στο button

	// ====================================================
	// <input type="button" id="confirm0" value="Υποβολή">
	// ====================================================
	formElement.appendChild(button);

	// Το i την στιγμή που δημιουργείται το κουμπί, διότι αν ήταν μέσα
	// στην συνάρτηση θα είχε πάντα την τιμή του ποσού των ατόμων που
	// θα είχε η φόρμα, που θα ήταν λάθος
	var thisi = i;
	button.onclick = function() {
		// Γέμισμα του πίνακα μόλις πατηθεί το 'Υποβολή'
		usernamebox = document.getElementById("username" + thisi).value;
		birthyearbox = document.getElementById("birthyear" + thisi).value;
		usersinfo[thisi][0] = usernamebox;
		usersinfo[thisi][1] = parseInt(birthyearbox);
	};
}

function form_addFinalConfirmButton(formElement, num_of_people)
{
	var button = document.createElement("input");

	var buttontype = document.createAttribute("type");
	buttontype.value = "button";
	button.setAttributeNode(buttontype);

	var cssstyle = document.createAttribute("style");
	cssstyle.value = "width: 500px; font-size: 20px; font-weight: bold;";
	button.setAttributeNode(cssstyle);

	var buttontext = document.createAttribute("value");
	buttontext.value = "Τελική υποβολή";
	button.setAttributeNode(buttontext);

	// Βάλε το κουμπί μέσα στην φόρμα
	formElement.appendChild(button);

	button.onclick = function() { makeNewWindow(num_of_people) };
}

// Δεύτερη καλεσμένη συνάρτηση
function setupButtons(num_of_people)
{
	for (i = 0; i < num_of_people; i++)
	{
		var form = document.createElement("form");
		var imagedivID = document.getElementById("pageimage");
	
		// Πρόσθεσε την φόρμα μέσα στην div της εικόνας
		imagedivID.appendChild(form);

		form_addLabel(form, "username", "Ψευδώνυμο: ");
		form_addInput(form, "username", "text");
		addNBSP(form, 5);
		form_addLabel(form, "birthyear", "Χρόνος γέννησης: ");
		form_addInput(form, "birthyear", "number");
		addNBSP(form, 2);
		form_addConfirmButton(form, "confirm");
		addBR(form, 2);

		// Άδειασμα στον πίνακα. Ο έλεγχος γίνεται διότι ο πίνακας
		// έχει ήδη μια σειρά άδειου στοιχείου ([0,0]).
		if (i >= 1)
			usersinfo.push([0,0]);
	}

	// Το τελικό κουμπί υποβολής
	form_addFinalConfirmButton(form, num_of_people);
}

// first function called
function removeFirstQuestion()
{
	firstquestion = document.getElementById("firstquestion");
	firstquestion.parentNode.removeChild(firstquestion);
}