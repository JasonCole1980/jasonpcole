$(document).ready(function() {

	var s;
	var theSequence = {
		
		settings: {
			/* "Cached" variables/information, 
				frequently/widely used information for sub-functions */
			headerText: "Jason Paul Cole",
			logoButton: $("#logo"),
			pageItems: ["header", "nav", "article", "footer"]
		},
		
		init: function() {
			// The Sequence Begins
			s = this.settings;
			
			this.bindUIActions();
		},
		
		bindUIActions: function() {
			s.logoButton.on("click", function() {
				theSequence.togglePageItems(s.pageItems);
				
			});
		},

		togglePageItems: function(numToGet) {
			// animate page items
		}
		
	};
	
	  
	$(function () {  
		theSequence.init();  
	});

});







