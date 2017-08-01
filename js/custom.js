// Event.observe(window,'load',function()
// {
// 	var objAccordion = new Accordion($('glossary'));
// 	objAccordion.hideAnswers();
// 	objAccordion.linkQuestions();
// 	objAccordion.linkExpandCollapseLinks();
// 	
// 	var objGlossary = new Glossary();
// 	objGlossary.configure();
// });

jQuery(window).load(function() {
	var objAccordion = new Accordion(jQuery('#glossary').eq(0));
	
	var objGlossary = new Glossary();
	objGlossary.configure();
});

jQuery(window).load(function() {
	var objAccordion2 = new Accordion(jQuery('.glossary').eq(0));
	
	var objGlossary2 = new Glossary();
	objGlossary2.configure();
});