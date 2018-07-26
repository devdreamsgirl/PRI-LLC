//make selected row items equal height - create class next to col-lg-4, etc.
$( document ).ready(function() {
    var heights = $(".facts").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".facts").height(maxHeight);
});
