(function () {

    'use strict';

    // GLOBAL Variables
    const userUid = '4zzJjUMooFa9boMCG1olQdwzc3s1';

    // Start Program
    getAndUpdatePostDetails();

    // All Functions
    function getAndUpdatePostDetails() {
        $.get('https://us-central1-art-auction-2ef27.cloudfunctions.net/getArtistsPosts?uid=' + userUid,function(data, status) {

            let id = getUrlParameter('id');
            console.log(data[id])

            $('#pieceName').text(data[id].pieceName)
            $('#pieceDescription').text(data[id].pieceDescription)

            let postImgUrl = data[id]['imgUrls'][
                Object.keys(data[id]['imgUrls'])[0]
            ];
            let postImgHTML = '<img src="' + postImgUrl + '" alt="">';
            $('#piecePhoto').html(postImgHTML);
            $('#piecePrice').text('$'+data[id].price + '.00');
							
        });
    }

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

}());