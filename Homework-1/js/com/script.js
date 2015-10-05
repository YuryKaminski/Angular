angular.module('catClicker', [])
  .controller('catClickerController', catClickerController);
function catClickerController() {
  this.selectedCat = null;
  this.cats = [
    {name: 'Piping', clicks: 0, src: "/img/cat1.jpg"},
    {name: 'Layla', clicks: 0, src: "/img/cat2.jpg"},
    {name: 'TigerLily', clicks: 0, src: "/img/cat3.jpg"},
    {name: 'Puff', clicks: 0, src: "/img/cat4.jpg"},
    {name: 'Flora', clicks: 0, src: "/img/cat5.jpg"}
  ];
}
catClickerController.prototype.selectCat = function(cat) {
  this.selectedCat = cat;
};
catClickerController.prototype.clickCat = function(cat) {
  cat.clicks++;
};

(function ($){

	$(window).load(function () {
	});

})(jQuery);
