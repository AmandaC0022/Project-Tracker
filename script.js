//this controls the daily time display at the top 
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$( function() {
    $( "#datepicker" ).datepicker();
  } );

// Add a function to display form 
var projectBtn = $(".add-project-btn"); 
projectBtn.on("click", function() {
    $(".custom-form").show(1000); 
})

$( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );

$(".submit-btn").on("click", function() {
    //Project Name
    //this only works with ids! 
    var projectValue = $("#project-name").val(); 
    // var projectValueLS = localStorage.setItem("Project Name", projectValue); 
    // I can only store 1 value in local storage at the moment. To store multiple use an array or Object. Turn them into a string and then store 
    $('#project-name-value').text(projectValue); 
    //Project Type 
    var projectTypeValue = $("#project-type option:selected").text(); 
    console.log(projectTypeValue); 
    $('#project-type-value').text(projectTypeValue); 
    //Hourly Wage 
    var wageValue = $("#hourly-wage").val(); 
    $('#wage-value').text("$" + wageValue); 
    //Due Date 
    $("#due-date").on("click", function(){

    })
    //hides the form and populates the table 
    $(".custom-form").hide();  
})

$('#delete').on("click", function(){
    $("#project-name-value").text(" "); 
    $("#project-type-value").text(" "); 
    $("#wage-value").text(" "); 
    $("#due-date-value").text(" "); 
    $("#days-remaining").text(" "); 
})

    // When user clicks on Add project btn, then user is taken to the form 
    //Use the show and hide jQuery animation for the form 

    // User will need to fill out: 
    //     name of project 
    //     type of project - drop down list 
    //     hourly wage = $15 per hour? 
    //     Due date for project - jquery datepicker 
    //     Submit Btn 

// add a function to display form info that populates the table 
    // When User clicks submit Btn, info is added to the table 

//add function to calculate how many days left in project 
    // days until due date - function DueDate - Current Date = how many days left 
        
// add function to calculate total earned 
    // Total Earned = (8hours per day * Hourly Rate $15?) * how many days until due date from the time of submission NOT how many days remaining  

//add a delete btn on the table with X so that when user clicks on the X btn, that row is deleted off of the table 