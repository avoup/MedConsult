
function bmiCalc(form) {
  var weight = Number(form.wt.value);
	var height = Number(form.ht.value);

	if (!checkNum(weight,"WEIGHT")) {
		form.wt.select();
		form.wt.focus();
		return false
	}

	if (!checkNum(height,"HEIGHT")) {
		form.ht.select();
		form.ht.focus();
		return false
	}

        if (form.wu.selectedIndex == 1) {
                                        //  What units for weight?
                                        //  0 = lbs
                                        //  1 = kg
                weight = weight * 0.45359237;	//  Convert wt (lbs to kg)
        }

        if (form.sex[1].checked) {      //  Is the patient female?
                                        //  0 = male
                                        //  1 = female
                leanFactor = 1.07
		leanConvert = 148;
		idealConvert = 45.5;	//  conversion factors for women
        } else {
                leanFactor = 1.1
		leanConvert = 128;
		idealConvert = 50;	//  conversion factors for men
	}

	if (form.hu.selectedIndex == 0) {
        //  if height units are "cm"
    heightInches = height / 2.54;
    heightMeters = height / 100;
	}

	if (form.hu.selectedIndex == 1) {
    //  if height units are "inches"
        heightInches = height;
        heightMeters = height * 2.54 / 100;
	}

	if (form.hu.selectedIndex == 2) {
				//  if height units are "meters"
		heightInches = height * 100 / 2.54;
		heightMeters = height;
	}


	var bsa = 0.20247 * Math.pow(heightMeters,0.725) *
		Math.pow(weight,0.425);
	var leanKg = (leanFactor * weight) - (leanConvert * (Math.pow(weight,2) /
		Math.pow((100 * heightMeters),2)));
	var leanLbs = leanKg * 2.2046226;
	var idealKg = idealConvert + 2.3 * (heightInches - 60);
	var idealLbs = idealKg * 2.2046226;
	var bmi = weight / Math.pow(heightMeters,2);

	bsa = rounding(bsa,2);
	leanKg = Math.round(leanKg);
	leanLbs = Math.round(leanLbs);
	idealKg = Math.round(idealKg);
	idealLbs = Math.round(idealLbs);
	bmi = rounding(bmi,1);

	if (bmi < 18.5) {
		var interp = "მცირე წონა"
	} else {
		if (bmi < 25.0) {
			var interp = "ნორმა"
		} else {
			if (bmi < 30.0) {
				var interp = "ჭარბი წონა"
			} else {
				var interp = "საქონელი"
			}
		}
	}

        form.bsa.value = bsa;
        form.leanKg.value = leanKg;
	form.leanLbs.value = leanLbs;
        form.idealKg.value = idealKg;
	form.idealLbs.value = idealLbs;
        form.bmi.value = bmi;
	form.interp.value = interp;

	return true
}


	function checkNum(val,text) {
	        if ((val == null) || (isNaN(val)) || (val == "") || (val < 0)) {
			alert("Please enter a value for " + text + ".");
	                return false
	        }
	        return true;
	}


	function rounding(number,decimal) {
	multiplier = Math.pow(10,decimal);
	number = Math.round(number * multiplier) / multiplier;
        return number
}
