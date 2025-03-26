var map
const adresses = [
    {
        name: 'СтройМаркет Добреев',
        coordinate: [56.347065, 50.200436]
    }, {
        name: 'СтройБаза Добреев',
        coordinate: [56.514237, 50.661712]
    }, {
        name: 'СтройБаза Добреев',
        coordinate: [56.368479, 50.240146]
    }, {
        name: 'СтройБаза Добреев',
        coordinate: [56.450175, 50.386593]
    }
]


ymaps.ready(function () {
    map = new ymaps.Map('map', {
        controls: ["zoomControl"],
        center: adresses[0].coordinate,
        zoom: 16,
    })
    adresses.forEach(adress => {
        var placemark = new ymaps.Placemark(adress.coordinate, { hintContent: adress.name, }, {
            // iconLayout: 'default#image',
            // iconImageHref: 'images/svg/evigi_pin.svg',
            // iconImageSize: [125, 75],
            // iconImageOffset: [-35, -50]
        })
        map.geoObjects.add(placemark)
    })
    map.behaviors.disable('scrollZoom')
})