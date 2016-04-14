$(function(){
    var html = $('#profile').html();
    var data = {
        name : 'Грахов Сергей',
        photo: '<img src="img/IMG_2006.JPG"  alt="My photo" title="Grakhov Sergey" width="200">',
        job: 'Системный администратор в одной из компаний',
        why: 'Хочу учить фронтенд, потому что:',
        reasons: ['Хочу сменить род деятельности',
                'Скучно',
                'Всегда хотел заниматься разработкой'],
        tel:'Мой контакный телефон',
        number: '+380937610300',
        fb: 'Мой профиль фейсбук',
        fb_link: '<a href="https://www.facebook.com/sergey.grakhov.7">fb.com</a>',
        feedback: 'Мой фидбек:',
        feedback_text: 'Помогу чем смогу'
        };
    var content = tmpl(html, data);
    $('body').append(content);
});