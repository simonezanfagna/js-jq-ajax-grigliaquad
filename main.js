var c = 0;
while (c < 36) {
  $('.container').append('<div class="quadratino"></div>')
  c++
}

var quadratino_click_index = [];
$('.quadratino').click(function () {
  var quadratino_click = $(this);
  var indice = quadratino_click.index();

  if (!quadratino_click_index.includes(indice)) {
    $.ajax({
      'url': 'https://flynn.boolean.careers/exercises/api/random/int',
      'method': 'GET',
      'success': function (data) {
        //console.log(data.response);
        if (data.response <= 5) {
          quadratino_click_index.push(indice);
          quadratino_click.addClass('giallo');
          quadratino_click.text(data.response);
        }
        else {
          quadratino_click.addClass('verde');
          quadratino_click.text(data.response);
          quadratino_click_index.push(indice);
        }
      },
      'error': function () {
        alert('errore')
      }
    })
  }

  console.log(quadratino_click_index);
})
