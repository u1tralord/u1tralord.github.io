var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : false,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};
var skillsData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];
var myPieChart = new Chart(document.getElementById("pie").getContext("2d")).Pie(skillsData, pieOptions);
var myDoughnutChart = new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(skillsData, pieOptions);
//$("skills-section > div").append($());
console.log(myPieChart.generateLegend());
$( ".field" ).hover(
  function() {
      $(this).addClass("field-expanded");
  },
  function() {
    	if($( this ).find( ".text-area" ).val() == ""  && !$(this).find(".text-area").is(':focus')){
    	$(this).removeClass("field-expanded");
      }
  }
)

$( ".field" ).click(function() {
  $(this).addClass("field-expanded");
});

$( ".text-area" ).blur(
  function() {
      if($( this ).val() == "")
        $( this ).parent().removeClass("field-expanded");
  }
);

$(".contact-submit").click(function(){
   window.open('mailto:poston.jacob@gmail.com'); 
});
