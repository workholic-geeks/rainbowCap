var hostName;

var intervalId;
var port=":8080";
function emptyAllSections(){
	$("#welcome").empty();
	$("#calllogoinallpages").empty();
	$("#homepage").empty();
	if(intervalId!=undefined)
	clearInterval(intervalId);
}
function preLoadHeader() {	
	var url = hostName+ "/rainbow/header.html";
	$("#header").load(url);
}

$(document).ready(function() {
	hostName = "file:///D:";//window.location.pathname;
	if("https"==window.location.protocol)
		port="";
	preLoadHeader();
	homePage();
	callIconLoader();
	loadFooter();

});

function loadFooter() {
	var url =  hostName + "/rainbow/footer.html";
	$("#homepage").empty();
	$("#footer").load(url);
}
function callIconLoader() {
	var url =  hostName  + "/rainbow/calllogoinallpages.html";
	$("#homepage").empty();
	$("#calllogoinallpages").load(url);
}

function homePage() {
	emptyAllSections();
	removeAll();
	var url =  hostName  + "/rainbow/homepage.html";
	$("#welcome").load(url,function(){
		loadHomePageSlider();
	});
	active("#homeLink");
}

function loanProducts() {
	emptyAllSections();
	removeAll();
	active("#loanProduct");
}

function loadCalculator() {
	emptyAllSections();
	removeAll();
	var url =  hostName  + "/rainbow/emiCalculator.html";
	$("#welcome").load(url);	
	active("#calculatorLink");
}

function loadContactUs() {
	emptyAllSections();
	removeAll();
	var url =  hostName  + "/rainbow/contactUSForm.html";
	$("#welcome").load(url);
	active("#contactUsLink");
}

function loadFaq() {
	emptyAllSections();
	removeAll();
	var url =  hostName  + "/rainbow/faq.html";
	$("#welcome").load(url);
	active("#faqLink");
}
function loadAboutUs() {
	emptyAllSections();
	removeAll();
	var url =  hostName  + "/rainbow/aboutUs.html";
	$("#welcome").load(url);
	active("#aboutUsLink");
}
function loadCheckListQuestion() {
	emptyAllSections();
	removeAll();
	var url =  hostName  + "/rainbow/checkListQuestion.html";
	$("#welcome").load(url);
	active("#checkListQuestionLink");
}
function loadShortTermLoan(){
	emptyAllSections();
	removeAll();
	$("#calllogoinallpages").load( hostName  + "/rainbow/shortTermEmiCalculator.html",function(){
		$("#rateOfInterest").hide();
		var output = document.getElementById("rate1");
		output.value = 42;
		lastValid = document.getElementById("displayLoanAmount").value;
		lastTenor = document.getElementById("displayRepaymentmonth").value;
		calculteEMI();
	});
	var url =  hostName  + "/rainbow/shortTermLoan.html";
	$("#welcome").load( hostName  + "/rainbow/autoSliderShortTermLoan.html",function(){
		$("#slideshow > div:gt(0)").hide();
		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		},  3000);
		active("#shortTermLoan");
	});
	$("#homepage").load(url);
	
}
function loadLongTermLoan(){
	emptyAllSections();
	removeAll();
	$("#calllogoinallpages").load( hostName  + "/rainbow/longTermEmiCalculator.html",function(){
		$("#rateOfInterest").hide();
		var output = document.getElementById("rate1");
		output.value = 42;
		lastValid = document.getElementById("displayLoanAmount").value;
		lastTenor = document.getElementById("displayRepaymentmonth").value;
		calculteEMI();
	});
	var url =  hostName  + "/rainbow/longTermLoan.html";
	$("#welcome").load( hostName  + "/rainbow/autoSliderLongTermLoan.html",function(){
		$("#slideshow > div:gt(0)").hide();
		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		},  3000);
		active("#longTermLoan");
	});
	$("#homepage").load(url);
	
}
function loadMediumTermLoan(){
	emptyAllSections();
	removeAll();
	$("#calllogoinallpages").load( hostName  + "/rainbow/mediumTermEmiCalculator.html",function(){
		$("#rateOfInterest").hide();
		var output = document.getElementById("rate1");
		output.value = 42;
		lastValid = document.getElementById("displayLoanAmount").value;
		lastTenor = document.getElementById("displayRepaymentmonth").value;
		calculteEMI();
	});
	var url =  hostName  + "/rainbow/mediumTermLoan.html";
	$("#welcome").load( hostName  + "/rainbow/autoSliderMediumTermLoan.html",function(){
		$("#slideshow > div:gt(0)").hide();

		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		},  3000);
		active("#mediumTermLoan");
	});
	$("#homepage").load(url);
	
	
}


function loadHomePageSlider(){
	$("#homeSlider").load( hostName  + "/rainbow/autoSliderHomePage.html",function(){
		$("#slideshow > div:gt(0)").hide();
		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		},  3000);
		active("#shortTermLoan");
	});
}