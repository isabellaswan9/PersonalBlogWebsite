jQuery(function () {
    $(".see-more").click(function () {
        console.log("success click!");
        $(".article").addClass("see-more-click");
    });
    /*$("#goToArticle").click(function () {
        $("#container1").load("ajax/test.txt");
    });*/

    $("#goToArticle").click(function () {
        let route = "ajax/test.html";

        pageChange(route);

        history.pushState('','',route)
    });
    function pageChange(route){
        console.log(route);

        $("#container1").load("ajax/test.html");
    }
});