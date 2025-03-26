$(document).ready(function(){
    var CURRENT = 0;
    $("#add").click(function(){
        let name = $("#name").val();
        let count = $("#count").val();
        let tran = $("#tran").val();
        let html = `<div class="item">
                    <div class="texts">
                        <div class="name">${name}</div>
                        <div class="translation">${tran}</div>
                    </div>
                    <div class="count">${count}</div>
                </div>`;
        $(".list").append(html);
    })

    $("#start").click(function(){
        $("#buttons").hide();
        counter();
    })

    $("#clear").click(function() {
        $(".list").html("");
    })

    $("#shortList").click(function() {
        $(".list").html("");
        var html = $("#shortcontent").html();
        $(".list").html(html);
    })

    function counter() {
        $(".background").width(0 + '%');
        let next = startCounter();
        if(next) {
            $('.list').animate({
                scrollTop: next.offsetTop - 50
            }, 1000);
            $("#itemName")[0].innerText = next.children[0].children[0].innerText;
            $("#itemCounter")[0].innerText = next.children[1].innerText;
            $("#counter")[0].innerText = "0";
        }
    }

    $(document).keypress(function(){
        var index = parseInt($("#counter")[0].innerText);
        index += 1;
        var limit = parseInt($("#itemCounter")[0].innerText);
        var background_index = (100 / limit) * index;
        $(".background").width(background_index + '%');
        if(index == limit) {
            $(".item")[CURRENT].classList.add("done");
            counter();
            index = 0;
        }
        $("#counter")[0].innerText = index;
    })

    $(".counter").click(function(){
        var index = parseInt($("#counter")[0].innerText);
        index += 1;
        var limit = parseInt($("#itemCounter")[0].innerText);
        var background_index = (100 / limit) * index;
        $(".background").width(background_index + '%');
        if(index == limit) {
            $(".item")[CURRENT].classList.add("done");
            counter();
            index = 0;
        }
        $("#counter")[0].innerText = index;
    })

    function startCounter(){
        let items = $(".item");
        for(let i = 0; i < items.length; i++) {
            
            if(!items[i].classList.contains("done")) {
                CURRENT = i;
                return items[i]; 
            }
        }
        return false;
    }
})