// input_extensions.js

// extends HTMLInputElement to include a self-clearing method
// @author Rob Hurring
// @date 2008-04-23
// UPDATED: 12/02/08 -- thanks to Shawn for pointing out the IE flaw

var SelfClearingInput = Class.create();
SelfClearingInput.prototype = {
	initialize:function(element)
	{
		this.element = $(element);
		this.original_value = this.element.value
		Event.observe(this.element, 'focus', this.focus.bind(this));
		Event.observe(this.element, 'blur', this.blur.bind(this));
	},
	focus:function(e)
	{
		if(this.element.value == this.original_value)
			this.element.value = '';
	},
	blur:function(e)
	{
		if(this.element.value == '')
			this.element.value = this.original_value;
	}
};
