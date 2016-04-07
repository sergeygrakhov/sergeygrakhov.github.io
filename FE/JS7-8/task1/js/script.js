$(function () {
    var $i = 0;
    var $j = 0;
    var $wrapper = $('<div/>', {class: 'wrapper'});
    var $ul = $('<ul/>');
    var $list = {
        li1:$('<li/>'),
        li2:$('<li/>'),
        li3:$('<li/>')
    };
    var $linksText = ['Nunc tincidunt',
        'Proin dolor',
        'Aenean lacinia'];
    var $p = [
        $('<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin' +
            ' mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus ' +
            'auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. ' +
            'Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius ' +
            'sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>'),
        $('<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc.' +
            ' Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ' +
            'ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam.' +
            ' Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. ' +
            'Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, ' +
            'tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur ' +
            'tortor et purus.</p>'),
        $ ('<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula ' +
            'accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti' +
            ' sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel' +
            ' enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium ' +
            'nec, feugiat nec, luctus a, lacus.</p>' +
            '<p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla ' +
            'facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec' +
            ' mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam ' +
            'scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, ' +
            'tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. ' +
            'Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>')];
    $wrapper.appendTo('body');
    $ul.appendTo($wrapper);
    for (var $key in $list) {
         $temp = $key;
        $list[$temp].appendTo($ul);
        var $link = $('<a/>', {
            href: '#',
            class: 'link',
            id:$i+1,
            text: $linksText[$i]});
        $link.appendTo($list[$temp]);
        $i++;
    }
    for ($j=0;$j<$p.length;$j++) {
        var $tab = $('<div/>', {class: 'tab', id:$j+$i+1});
        $tab.append($p[$j]);
        $tab.appendTo($wrapper);
    }
    $('a').click(
        function(e) {
            e.preventDefault();
        }
    )
    var $first = $('#1');
    $first.addClass('white');
    $('#5').hide();
    $('#6').hide();
    $first.click( function() {
        $('#1').addClass('white');
        $('#2').removeClass('white');
        $('#3').removeClass('white');
        $('#4').show();
        $('#5').hide();
        $('#6').hide();
    } );
    $('#2').click( function() {
        $('#1').removeClass('white');
        $('#2').addClass('white');
        $('#3').removeClass('white');
        $('#4').hide();
        $('#5').show();
        $('#6').hide();
    } );
    $('#3').click( function() {
        $('#1').removeClass('white');
        $('#2').removeClass('white');
        $('#3').addClass('white');
        $('#4').hide();
        $('#5').hide();
        $('#6').show();
    } );
});



