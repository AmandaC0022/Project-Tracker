//this controls the daily time display at the top 
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

//date picker 
$( function() {
    $( "#datepicker" ).datepicker();
  } );

// Add a function to display form 
var projectBtn = $(".add-project-btn"); 
projectBtn.on("click", function() {
    $(".custom-form").show(1000); 
})

// When user clicks on Add project btn, then user is taken to the form 
$(".submit-btn").on("click", function() {
    //Project Name 
    var projectValue = $("#project-name").val(); 
    $('#project-name-value').text(projectValue);

    //Project Type 
    var projectTypeValue = $("#project-type option:selected").text();  
    $('#project-type-value').text(projectTypeValue); 

    //Hourly Wage 
    var wageValue = $("#hourly-wage").val(); 
    $('#wage-value').text("$" + wageValue); 

    //Due Date 
    var dueDateValue = $("#datepicker").val();
    $("#due-date-value").text(dueDateValue);  

    //hides the form and populates the table 
    $(".custom-form").hide();  
})

$('#delete').on("click", function(){
    confirm("Are you sure you want to delete this task?"); 
    $("#project-name-value").text(" "); 
    $("#project-type-value").text(" "); 
    $("#wage-value").text(" "); 
    $("#due-date-value").text(" "); 
    $("#days-remaining").text(" "); 
}) 

//add function to calculate how many days left in project 
    // days until due date - function DueDate - Current Date = how many days left 
        
// add function to calculate total earned 
    // Total Earned = (8hours per day * Hourly Rate $15?) * how many days until due date from the time of submission NOT how many days remaining  