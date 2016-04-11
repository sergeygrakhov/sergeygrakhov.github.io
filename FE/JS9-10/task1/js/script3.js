$(function () {
    $i = 0;
    for ($i=0;$i<3;$i++) {
        $('#chkbox'+$i).flatcheckbox({
            label: "Чекбокс "+ ($i+1),
            onChecked: function (el) {
                checked(el);
            },
            onUnChecked: function (el) {
                unChecked(el);
            }
        });
    }
});