/**
 * Created by Neeraj on 7/12/2016.
 */
'use Strict';

(function(){
    var myData;
    $.getJSON('./data.json', function(data){
        myData = data.cars;
        console.log('data: ' + myData);
        var contentStr = '';
        for(index in myData){
            if(index%2 == 0){
                contentStr += '<div class="row">' +
                    '<div class="col-lg-6 col-md-6 col-sm-6">' +
                        '<h1>'+ myData[index].name +'</h1>' +
                        '<p>'+ myData[index].caption +'</p>' +
                        '<button>View All</button>' +
                    '</div>' +
                    '<div class="col-lg-6 col-md-6 col-sm-6">' +
                        '<div class="image"><img src="images/' + myData[index].images[0] + '"></div>' +
                        '<div class="image"><img src="images/' + myData[index].images[1] + '"></div>' +
                    '</div>' +
                '</div>'
            } else {
                contentStr += '<div class="row">' +
                    '<div class="col-lg-6 col-md-6 col-sm-6">' +
                        '<div class="image"><img src="images/' + myData[index].images[0] + '"></div>' +
                        '<div class="image"><img src="images/' + myData[index].images[1] + '"></div>' +
                    '</div>' +
                    '<div class="col-lg-6 col-md-6 col-sm-6">' +
                        '<h1>'+ myData[index].name +'</h1>' +
                        '<p>'+ myData[index].caption +'</p>' +
                        '<button>View All</button>' +
                    '</div>' +
                '</div>'
            }
        }
        $('.contentContainer').html(contentStr);
    });
})();

