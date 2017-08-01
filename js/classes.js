var Accordion = function() {
	this._initialize.apply(this, arguments);
}

Accordion.prototype = {
	_initialize: function(element) {
		this.questions = jQuery('a.term', element);
	    this.answers = jQuery('div.definition', element);
		this.expandCollapseLinks = jQuery('a.expand-collapse', element)
		
		this.hideAnswers();
		this.linkQuestions();
		this.linkExpandCollapseLinks();
	},
	hideAnswers: function() {
		this.answers.each(function(a) {
	        jQuery(this).hide();
	    });
	},
	linkQuestions: function() {
		this.questions.bind('click', this.toggle);
	},
		linkExpandCollapseLinks: function() {
			this.expandCollapseLinks.each(this.toggleAll);
		},
		toggle: function () {
			var q = jQuery(this);
			q.toggleClass('opened');
			q.next().slideToggle('.25').toggleClass('active');
		},
		toggleAll: function(link) {
			jQuery(this).bind('click', function() {
				var link = jQuery(this);
				link.toggleClass('expanded');
				if(link.hasClass('expanded')) {
					var displayMethod = 'slideDown', openClassMethod = 'addClass';
					link.html('Collapse All');
				} else {
					var displayMethod = 'slideUp', openClassMethod = 'removeClass';
					link.html('Expand All');
				}
				var answers = link.parent().find('.definition');
				answers.prev()[openClassMethod]('opened');
				answers[displayMethod]('.25');

			});
		}
}

var Glossary = function() {
	this._initialize.apply(this, arguments);
}

Glossary.prototype = {
	_initialize: function() {
		this.letters = jQuery('div#alphabet a');
		this.currentlyDisplayed = jQuery('#a').eq(0);
	},
	configure: function() {
		this.letters.each(function(l) {
			if(l == 0) {
				jQuery(this).addClass('current');
			} else {
				jQuery("#"+this.innerHTML).hide();
			}
		});
		
		this.letters.bind('click', function() {
			jQuery('div#alphabet a.current').removeClass('current'); 
			jQuery(this).addClass('current');
			jQuery('div.letter').hide();
			jQuery('#'+this.innerHTML).show();
			return false;
		});
	}
}