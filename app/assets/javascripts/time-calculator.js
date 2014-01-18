/*   
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio and Blog Theme.
 * Version: 1.3
 * Author: Html Stream
 * Website: http://htmlstream.com/preview/unify
*/

var TimeCalculator = function () {
	var stdPrice = 5.45;
	var discountPrice = 4.75;

	function calc(wordCount) {
		if(!isNumber(wordCount)){
			return "NaN";
		}
		else{
			if(wordCount<6000){
				return 24;
			} else if(wordCount<15000){
				return 48;
			} else if(wordCount<30000){
				return 72;
			}
			else{
				return calculateTime(wordCount);
			}
		}     	
    }

    function calculateTime(wordCount){
    	multiple = Math.ceil(wordCount/10000);
    	timeInHours = multiple * 24;
    	return timeInHours;
    }

	function isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function format(timeInHours){
		if(!isNumber(timeInHours)){
			return null;
		}
		if(timeInHours<=72){
			return timeInHours+" hour";
		}
		else{
			timeInDays = timeInHours/24;
			return timeInDays+" day";	
		}
	}

	function fromNow(timeInHours){
		if(!isNumber(timeInHours)){
			return moment().minutes(0).add('hours',25).format('llll');
		}
		else{
			timeInHours+=1;
			return moment().minutes(0).add('hours',timeInHours).format('llll');
		}
		
	}
    return {
        calc: calc,
        format: format,
        fromNow: fromNow
    }
}();