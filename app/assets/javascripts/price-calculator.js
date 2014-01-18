/*   
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio and Blog Theme.
 * Version: 1.3
 * Author: Html Stream
 * Website: http://htmlstream.com/preview/unify
*/

var PriceCalculator = function () {
	var stdPrice = 5.45;
	var discountPrice = 4.75;

	function price(wordCount) {
		if(!isNumber(wordCount)){
			return "NaN";
		}
		else{
			if(wordCount<20000){
				return calculateStandardPrice(wordCount);
			}
			else{
				return calculateDiscountPrice(wordCount);
			}
		}     	
    }

    function calculateStandardPrice(wordCount){
    	multiple = Math.max(Math.ceil(wordCount/500),2);
    	price = multiple * stdPrice;
    	return formatAsPrice(price);
    }

    function calculateDiscountPrice(wordCount){
    	multiple = Math.ceil(wordCount/500);
    	price = multiple * discountPrice;
    	return formatAsPrice(price);
    }

	function isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function formatAsPrice(price){
    	return "£"+price.toFixed(2);
	}
    return {
        price: price
    }
}();