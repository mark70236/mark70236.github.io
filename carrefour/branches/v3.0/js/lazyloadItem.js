// // lazyload setting
// var LazyLoad = function(wrap, options, $lazyItem){
//   var wookmark,
//       container = wrap,
//       $container = $(container),
//       $window = $(window),
//       $document = $(document);

//       imagesLoaded(container, function () {
//         wookmark = new Wookmark(container, options);
//       });
//       /**
//        * When scrolled all the way to the bottom, add more tiles
//        */
//        function onScroll() {
//         // Check if we're within 100 pixels of the bottom edge of the broser window.
//         var winHeight = window.innerHeight ? window.innerHeight : $window.height(), // iphone fix
//         closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);
//         if (closeToBottom) {
//           // Get the first then items from the grid, clone them, and add them to the bottom of the grid
//           var $items = $lazyItem;

//           appendData(wookmark, $items, $container);

//         }
//       };
//       // Capture scroll event.
//       $window.bind('scroll.wookmark', onScroll);
// }

// var appendData = function(w, $items, $container){
//   // loading 8 dataas
//   var $firstEight = $items.slice(0, 5).clone(true).css('opacity', 0);

//   $container.append($firstEight);
//           w.initItems();
//           w.layout(true, function () {
//             // Fade in items after layout
//             setTimeout(function() {
//               $firstEight.css('opacity', 1);
//             }, 300);
//           });
// };

// new LazyLoad (
//     '#lazyload', {offset: 0, align: 'left', autoResize: false}, $('.item-product', $('#lazyload'))
// );

// loadData
function loadData(){
  var $five = $('.item-product', $('#lazyload')).slice(0, 5).clone(true).css('opacity', 0);
  $('#lazyload').append($five);
   // Fade in items after layout
   setTimeout(function() {
    $five.css('opacity', 1);
  }, 300);
}

// SimpleInfiniteScroll
function Infinite(e){
  if((e.type == 'scroll') || e.type == 'click'){
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var bottom = top + $(window).height();
    var docBottom = $(document).height();

    if(bottom + 300 >= docBottom){
        // $grid.revealItems(GenerateItems());
        loadData();
        console.log('append')
      }
    }
  }

  $(window).scroll(Infinite);