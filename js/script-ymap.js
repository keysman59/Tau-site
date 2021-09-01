ymaps.ready(init1);
function init1(){
if (document.documentElement.clientWidth >= 767) {
    var myMap1 = new ymaps.Map("map1", {
        center: [47.223108744243014,16.626406961265804], 
    zoom: 15,
    controls: []
    });
    var zoomControl = new ymaps.control.ZoomControl({
    options: {
        position: {
        right: '14px',
        top: '215px' 
        }
    }
    });
    myMap1.controls.add(zoomControl);
    myMap1.behaviors.disable('scrollZoom'); 
} if (document.documentElement.clientWidth < 767) {
    var myMap1 = new ymaps.Map("map1", {
    center: [47.22477519014344,16.623660379234536], 
    zoom: 14,
    controls: []
    });
    var zoomControl = new ymaps.control.ZoomControl({
    options: {
        position: {
        right: '14px',
        top: '25px' 
        }
    }
    });
    myMap1.controls.add(zoomControl);
}
somCollection = new ymaps.GeoObjectCollection(null, {
    preset: 'islands#yellowIcon',
    iconLayout: 'default#image',
    iconImageHref: 'images/ymap-icon-jo-group.svg',
    iconImageSize: [36, 36],
})
somCollection
    .add(new ymaps.Placemark([47.2273793354346,16.630073765945394], {
    hintContent: "БЦ «FERENC»"
}))
    .add(new ymaps.Placemark([47.218105161799016,16.625922154757003], {
    hintContent: "БЦ «ZANATI»"
}))
;
myMap1.geoObjects.add(somCollection);
}

ymaps.ready(init2);
function init2(){
    if (document.documentElement.clientWidth >= 600) {
    var myMap2 = new ymaps.Map("map2", {
        center: [39.92691768950169,32.87494140008054], 
        zoom: 15,
        controls: []
    });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
        position: {
            right: '14px',
            top: '215px' 
        }
        }
    });
    myMap2.controls.add(zoomControl);
    } if (document.documentElement.clientWidth < 600) {
    var myMap2 = new ymaps.Map("map2", {
        center: [39.921498805884596,32.86116557458004], 
        zoom: 14,
        controls: []
    });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
        position: {
            right: '14px',
            top: '25px' 
        }
        }
    });
    myMap2.controls.add(zoomControl);
    }
    myMap2.behaviors.disable('scrollZoom'); 
    almCollection = new ymaps.GeoObjectCollection(null, {
    preset: 'islands#yellowIcon',
    iconLayout: 'default#image',
    iconImageHref: 'images/ymap-icon-jo-group.svg',
    iconImageSize: [36, 36],
    })
    almCollection
    .add(new ymaps.Placemark([39.928437542643664,32.87682967522702], {
        hintContent: "ул. Кейлюлер"
        }))
    .add(new ymaps.Placemark([39.92420830172743,32.86760287621579], {
        hintContent: "БЦ «Самур»"
        }))
    ;
    myMap2.geoObjects.add(almCollection);
}


ymaps.ready(init3);

function init3(){

    if (document.documentElement.clientWidth >= 600) {

    var myMap3 = new ymaps.Map("map3", {
        center: [50.861786945077675,20.63965719867923], 
        zoom: 16,
        controls: []
    });
    var zoomControl = new ymaps.control.ZoomControl({
            options: {
                position: {
                    right: '14px',
                    top: '215px' 
                }
            }
        });
    myMap3.controls.add(zoomControl);

    myMap3.behaviors.disable('scrollZoom'); 

    } if (document.documentElement.clientWidth < 600) {

        var myMap3 = new ymaps.Map("map3", {
            center: [50.861786945077675,20.63965719867923], 
            zoom: 16,
            controls: []
        });
        var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    position: {
                        right: '14px',
                        top: '25px' 
                    }
                }
            });
        myMap3.controls.add(zoomControl);

        myMap3.behaviors.disable('scrollZoom'); 

    }

    atiCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#yellowIcon',
        iconLayout: 'default#image',
        iconImageHref: 'images/ymap-icon-jo-group.svg',
        iconImageSize: [36, 36],
    })


    atiCollection
        .add(new ymaps.Placemark([50.861786945077675,20.63965719867923], {
            hintContent: "БЦ STAKOM"
        }))
        ;

    myMap3.geoObjects.add(atiCollection);
}

ymaps.ready(init4);

function init4(){

    if (document.documentElement.clientWidth >= 600) {

    var myMap4 = new ymaps.Map("map4", {
        center: [54.89178415989579,23.877494457995656], 
        zoom: 15,
        controls: []
    });

    var zoomControl = new ymaps.control.ZoomControl({
            options: {
                position: {
                    right: '14px',
                    top: '215px' 
                }
            }
        });
    myMap4.controls.add(zoomControl);

    myMap4.behaviors.disable('scrollZoom'); 

    } if (document.documentElement.clientWidth < 600) {

        var myMap4 = new ymaps.Map("map4", {
            center: [54.89178415989579,23.877494457995656], 
            zoom: 15,
            controls: []
        });

        var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    position: {
                        right: '14px',
                        top: '25px' 
                    }
                }
            });
        myMap4.controls.add(zoomControl);

        myMap4.behaviors.disable('scrollZoom'); 

    }

    shimCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#yellowIcon',
        iconLayout: 'default#image',
        iconImageHref: 'images/ymap-icon-jo-group.svg',
        iconImageSize: [36, 36],
    })


    shimCollection
        .add(new ymaps.Placemark([54.89178415989579,23.877494457995656], {
            hintContent: "ОП RAUBIS"
        }))
        ;

    myMap4.geoObjects.add(shimCollection);
}


