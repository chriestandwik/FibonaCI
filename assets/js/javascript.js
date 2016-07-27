var numberBefore = 0;
        var numberCurrent = 1;
        var innerHTML = "";
        var calculate = null;
        var nextPress = 0;
        var valueBefore = []; 
        var valueCurrent = []; 
        
        function initialization() {
            innerHTML = "";
            
            valueBefore[nextPress] = numberBefore;
            valueCurrent[nextPress] = numberCurrent;
            
            for (var i = 0; i < 10; i++) {
                calculate = parseInt(numberBefore) + parseInt(numberCurrent);
                numberBefore = numberCurrent;
                numberCurrent = calculate;   
                
                if (calculate%2==0) {
                    innerHTML += '<span class="number even">' + calculate + '</span>';
                } else {
                    innerHTML += '<span class="number">' + calculate + '</span>';
                }
            }
            
            document.getElementById("result").innerHTML = innerHTML;
        }
        
        function previousData() {
            nextPress--;
            
            numberBefore = valueBefore[nextPress];
            numberCurrent = valueCurrent[nextPress];
            
            if (nextPress>1) {
                document.getElementById('prev').style.visibility = "visible";
                document.getElementById('prev').disabled = "";
            } else {
                document.getElementById('prev').disabled = "disabled";
            }
            
            initialization();
        }
        
        function nextData() {
            nextPress++;
            
            if (nextPress>1) {
                document.getElementById('prev').style.visibility = "visible";
                document.getElementById('prev').disabled = "";
            } else {
                document.getElementById('prev').disabled = "disabled";
            }
            
            initialization();
        }