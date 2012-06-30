// 2celeb カッコいい
$(function(){
  // subject1
  $('#get_name').click(function(){
    var yamada_name = $('#yamada_name').text();
    $('#subject01_result').text(yamada_name);
  });

  // subject2
  $('#add_sakurako').click(function(){
    $li_sakurako = $('<li>').text('櫻子');
    $('#member_list').append($li_sakurako);
  });
  $('#add_himawari').click(function(){
    $li_himawari = $('<li>').text('向日葵');
    $('#member_list').append($li_himawari);
  });

  // subject3
  $('#remove_akari').click(function(){
    $('#member_list_remove > #akari').remove(); // subject2 と id="akari" が重複しているため子セレクタ
  });

  // subject4
  $('#change_visible_momo').toggle(function(){
    $('#stealth_momo').attr('style', 'display:float');
    }, function(){
      $('#stealth_momo').attr('style', 'display:none');
    }
  );

  // subject5
  // 一回だけ実行する優しさ
  $('#change_header_html').one('click', function(){
    $('h2').each(function(){
      var text = $(this).text();
      $(this).text('【' + text + '】');
    });
  });
});
