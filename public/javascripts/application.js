// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(function () {
    $("#job_deadline").datepicker( { dateFormat: 'yy-mm-dd', minDate: 0 },{autosize: true});
    $('#ticker').odoTicker({
        number: 56,    //Number to load
        speed: 1500,        //speed in ms
        height: 28          //height of a single number in the CSS sprite
    });
});

