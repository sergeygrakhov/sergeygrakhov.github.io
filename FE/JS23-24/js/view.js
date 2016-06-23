define ('view',['jquery','lodash','model'], function(model){
   function View(model) {
    var self = this;
    function init() {
        var wrapper = _.template($('#wrapper__template').html());
        $('body').append(wrapper);
        self.elements = {
            input: $('.item__value'),
            addBtn: $('.item__add'),
            listContainer: $('.item__list')
        };
        self.renderList(model.data);
    }
       model.data = ['Learn JS','Learn HTML','Learn CSS','Learn jQuery'];
       self.renderList = function (data) {
        var list = _.template($('#list__template').html())({data: data});
        self.elements.listContainer.html(list);
    };

    init();
}

return new View(model);
});