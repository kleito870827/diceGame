var cont1 = 0;
var cont2 = 0;
var sum1 = 0;
var sum2 = 0;
var click = true;
  $("#img1").on('click', function(){
    if (cont1 === cont2){
      if( click === true){
        click = false;
        $('#p').remove();
        $('#img1').attr('src', 'img/Dodecahedron.gif');
        setTimeout(function(){
          $(`#tbl`+sum1).children('img').attr('src', 'http://a.ppy.sh/1552134_1344909928.png');
          $("#img1").attr('src', 'img/Dodecahedron_360.png');
          var Numb = Math.floor(Math.random()*12)+1;
          $('.img').append(`<h1 id='p'>`+Numb+`</h1>`);
          if(sum1 < 28){
              for(let i = sum1; i <= sum1+Numb; i++){
                setTimeout(function(){
                  $(`#tbl`+(i)).find('img').attr('src', 'http://media-minecraftforum.cursecdn.com/avatars/653/617/635965359168529124.png');
                  $(`#tbl`+ (i-1)).find('img').attr('src', 'http://a.ppy.sh/1552134_1344909928.png');
                },(i-sum1)*500)
              }
            cont1++;
            click = true;
            sum1 += Numb;
          }else{
            alert('player 1 win');
          }
      },3000)};
    }else{
      if( click === true){
        click = false;
        $('#p').remove();
        $('#img1').attr('src', 'img/Dodecahedron.gif');
        setTimeout(function(){
      $(`#tbl`+sum2).children('img').attr('src', 'http://a.ppy.sh/1552134_1344909928.png');
      $("#img1").attr('src', 'img/Dodecahedron_360.png');
        var Numb = Math.floor(Math.random()*12)+1;
        $('.img').append(`<h1 id='p'>`+Numb+`</h1>`);
        if(sum2 < 28){
          for(let i = sum2; i <= sum2+Numb; i++){
            setTimeout(function(){
              $(`#tbl`+(i)).children('img').attr('src', 'http://media-minecraftforum.cursecdn.com/avatars/thumbnails/572/596/140/140/635671113117325200.png');
              $(`#tbl`+(i-1)).children('img').attr('src', 'http://a.ppy.sh/1552134_1344909928.png');
          },(i-sum2)*500)
        }
          cont2++;
          click = true;
          sum2 += Numb;
        }else{
          alert('player 2 win');
        }
      },3000)};
    }
});

$('.img').append(`<div class='row' id="tbl"><div>`);
$('#tbl').append(`<div class='col-xs-2'></div>`);
for(var i = 0; i < 23; i++){
  if(i < 8){
    $('#tbl').append(`<div class='col-xs-1 uni ' id='tbl`+i+`'><img src='http://a.ppy.sh/1552134_1344909928.png' width='60' height='60' /></div>`);
  }else if(i < 14){
    $('.img').append(`<div class='row'><div class='col-xs-2'></div><div class='col-xs-1' id='tbl`+(35-i)+`'><img src='http://a.ppy.sh/1552134_1344909928.png' width='60' height='60'/></div><div class='col-xs-6'></div><div class='col-xs-1'id='tbl`+i+`'><img src='http://a.ppy.sh/1552134_1344909928.png' width='60' height='60'/></div></div>`);
  }else if(i === 14){
    $('.img').append(`<div class='row' id='last'><div class='col-xs-2'></div></div>`);
  }else{
    $('#last').append(`<div class='col-xs-1' id='tbl`+(21-(i-15))+`'><img src='http://a.ppy.sh/1552134_1344909928.png' width='60' height='60'/></div>`);
  }
};
