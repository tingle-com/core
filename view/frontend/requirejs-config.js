// 2020-01-12 https://www.upwork.com/ab/f/contracts/23508657
var config = {config: {mixins: {
	// 2020-01-12 https://www.upwork.com/ab/f/contracts/23508657
	// It shows the full totals block on the shipping step of the frontend checkout:
	// https://magento.stackexchange.com/a/235329
	'Magento_Checkout/js/view/summary/abstract-total': {'Tingle_Core/Magento_Checkout/js/view/summary/abstract-total': true}
	// 2020-01-12 https://www.upwork.com/ab/f/contracts/23508657
	// It shows taxes in the full totals block on the shipping step of the frontend checkout:
	// https://magento.stackexchange.com/a/209351
	,'Magento_Checkout/js/view/summary/shipping': {'Tingle_Core/Magento_Checkout/js/view/summary/shipping': true}
}}};