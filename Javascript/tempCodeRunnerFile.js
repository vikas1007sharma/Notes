 var sum = function (a) {
        console.log("Live Viewers " + a);
        var c = 4;
        return function (b) {
            return a + b + c; 
        }
    };

    var store = sum(2); // Call 'sum' with 2, and store the returned function in 'store'
    console.log(store(5)); 