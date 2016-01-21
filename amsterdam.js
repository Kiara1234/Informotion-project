window.onload = function()
{
  console.log(" doc loaded" );
  
  var regen = document.querySelector('#regen'),
   button = document.querySelector('#button'),
   anim = new TimelineMax({repeat:0});

  anim
     .set(regen, {
      x: -960,
      y:0
    });

  $('#button').on('click', function() {
      var clicks = $(this).data('clicks');
      if (clicks) {
         $('#regen').hide();
         anim
           .set(regen, {x: -960, y:0});
      } else {
        $('#regen').show();
         TweenMax.to(regen, 5, {x:-500 });
      }
      $(this).data("clicks", !clicks);
    });
  }

  function showValue(newValue) {
    var water = document.querySelector("#water");
    var kas = document.querySelector("#kas");
    var anim = new TimelineMax();

    document.getElementById("range").innerHTML=newValue;
    console.log(water.y.animVal.value);
    var waterY = water.y.animVal.value;
    console.log(newValue);
    anim.to(water, 1,  {y:-((newValue / 100) * 15)});
    // document.getElementById("range").innerHTML=newValue;
    // var waterLevel = (-newValue * 4.9);
    // document.getElementById("water").style.y = waterLevel;
    // document.getElementById("water").style.transition = "all 2s";
  }

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Amsterdam', 'Percentage'],
        ['Groen',     66],
        ['verharding', 34]
      ]);

      var options = {
        title: '',
        slices:{
          0: {color:"green"},
          1: {color:"grey"}
        },
          chartArea:{'backgroundColor':'red'}
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }



// function showValue(newValue)
// {
//   var water = document.getElementById("water")
//   document.getElementById("range").innerHTML=newValue;
//   var waterLevel = 100 - (Number(newValue));
//   water.style.y = waterLevel;
//   console.log("newValue: " + (newValue)) ;
//   console.log(" style: " + water.style.y);

  
//   water.style.transition = "all 2s";
// }



