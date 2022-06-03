// function getReport(){

    var grade = "";  //declare a variable for grade
    var  remarks="";  //declare a variable for result

    //read the marks
    var accMarks = +prompt("Enter the total marks in 3 subjects");
    var engMarks = +prompt("Enter the eng marks");
    var mathsMarks = +prompt("Enter the maths marks");
    var scienceMarks = +prompt("Enter the science marks");
    
    //calculate the total marks (using double notation technique)
     var totalMarks = (scienceMarks +mathsMarks + scienceMarks);
    
    //get the average marks
    var percentage = totalMarks / accMarks * 100;                  
    
    //find the grade and result using the ternary operator inside the switch statement                  
    switch(
    
        
            //usage of ternary operator inside switch

            (percentage > 80 && percentage <= 100) ? 1 : 
            (percentage > 70 && percentage < 80) ? 2 : 
            (percentage > 60 && percentage < 70) ? 3 :
            (percentage > 0 && percentage < 60) ? 4 :
             0)
            
            {
                case 1 :grade = "A-one";remarks="Excellent";;break;
                case 2 :grade = "A"; remarks="Good";break;
                case 3 :grade = "B"; remarks="You need to improve";break;
                case 4 :grade = "Fail"; remarks="Sorry";break;
            }
            
        
    //display the results   
    // document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    // document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    // document.getElementById('txtTotalMarks').value = totalMarks;
    // document.getElementById('txtAvgMarks').value = averageMarks;
    // document.getElementById('txtGrade').value = grade;
    // document.getElementById('txtResult').value = result;
    document.write("<h1>Marks Sheet:</h1>" + "</br>")
    document.write("Total Marks: "+ accMarks+"</br>")
    document.write("Marks Obtained: " +totalMarks + "</br>")
    document.write("Grade: "+ grade + "</br>")
    document.write("Remarks: " +remarks + "</br>")

//end of function getReport