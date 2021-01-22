// Calculate kilometer to meter.

function kilometerToMeter(meter){
    if(meter < 0){
        return "Distance can't be negative!";
    }

    var kilometer = meter * 1000; // we know 1000 meter = 1 kilometer.
    return kilometer;
}
var result = kilometerToMeter(346);
return result;


// Budget Calculator.

function budgetCalculator(clocks, phones, leptops){

    if((clocks < 0) || (phones < 0) || leptops < 0){
      return "WARNING: Price can't be negative!";
    }
  
    var clockPrice = clocks / 50;
    var phonePrice = phones / 100;
    var laptopPrice = leptops / 500;
    var totalPrice = clockPrice + phonePrice + laptopPrice;
  
    return totalPrice;
  }
var result = budgetCalculator(1000, 2000, 10000);
return result;



// Calculate hotel cost.

function hotelCost(day){
    if(day <= 0){
        return "WARNING: Date count can't be negative!";
    }

    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }else if(day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(220);
return totalCost;



// Find long name friend.

function megaFriend(name) {
    if(friend.length == 0){
        return "WARNING: There are no friend in this list!";
    }

    var long = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (long.length < element.length) {
            long = element;
        }
    }
    return long;
}

var friend = ["iftekhar", "emon", "polash", "emran", "apu"];
var longWord = megaFriend(friend);
return longWord;