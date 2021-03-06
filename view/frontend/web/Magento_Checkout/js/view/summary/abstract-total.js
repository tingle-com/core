// 2020-01-12
define([], function() {'use strict'; return function(sb) {return sb.extend({
   /**
	* 2020-01-12
	* @override
	* @see Magento_Checkout/js/view/summary/abstract-total::isFullMode()
	* It shows the full totals block on the shipping step of the frontend checkout:
	* https://magento.stackexchange.com/a/235329
	* https://www.upwork.com/ab/f/contracts/23508657
	* @returns {boolean}
	*/
	isFullMode: function() {return !!this.getTotals();}
});};});