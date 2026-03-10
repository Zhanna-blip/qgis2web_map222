var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab 1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab 1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_lab1lab_1_7 = new ol.format.GeoJSON();
var features_lab1lab_1_7 = format_lab1lab_1_7.readFeatures(json_lab1lab_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1lab_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1lab_1_7.addFeatures(features_lab1lab_1_7);
var lyr_lab1lab_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1lab_1_7, 
                style: style_lab1lab_1_7,
                popuplayertitle: 'lab1 — lab_1',
                interactive: true,
                title: '<img src="styles/legend/lab1lab_1_7.png" /> lab1 — lab_1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_lab1lab_1_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_lab1_2,lyr_building_house_3,lyr_building_4,lyr_highway_5,lyr_highway_6,lyr_lab1lab_1_7];
lyr_lab1_2.set('fieldAliases', {'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'level': 'level', 'entrance': 'entrance', 'door': 'door', 'access': 'access', });
lyr_building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'addr:unit': 'addr:unit', 'religion': 'religion', 'fast_food': 'fast_food', 'addr:source': 'addr:source', 'height': 'height', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'contact:vk': 'contact:vk', 'contact:twitter': 'contact:twitter', 'contact:facebook': 'contact:facebook', 'fuel:octane_92': 'fuel:octane_92', 'fuel:lpg': 'fuel:lpg', 'fuel:diesel': 'fuel:diesel', 'phone': 'phone', 'smoking': 'smoking', 'craft': 'craft', 'public_transport': 'public_transport', 'internet_access': 'internet_access', 'substation': 'substation', 'power': 'power', 'training': 'training', 'office': 'office', 'government': 'government', 'addr:suburb': 'addr:suburb', 'social_facility:for': 'social_facility:for', 'social_facility': 'social_facility', 'atm': 'atm', 'ref:website': 'ref:website', 'ref': 'ref', 'operator': 'operator', 'currency:RUB': 'currency:RUB', 'contact:telegram': 'contact:telegram', 'contact:ok': 'contact:ok', 'cash_withdrawal:purchase_required': 'cash_withdrawal:purchase_required', 'cash_withdrawal:limit': 'cash_withdrawal:limit', 'cash_withdrawal:fee': 'cash_withdrawal:fee', 'cash_withdrawal': 'cash_withdrawal', 'brand:wikipedia': 'brand:wikipedia', 'old_name': 'old_name', 'sport': 'sport', 'leisure': 'leisure', 'military': 'military', 'short_name': 'short_name', 'name:en': 'name:en', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'brand:wikidata': 'brand:wikidata', 'brand:ru': 'brand:ru', 'brand:en': 'brand:en', 'brand': 'brand', 'tourism': 'tourism', 'opening_hours': 'opening_hours', 'description': 'description', 'addr2:street': 'addr2:street', 'addr2:housenumber': 'addr2:housenumber', 'shop': 'shop', 'payment:mir': 'payment:mir', 'name:ru': 'name:ru', 'start_date': 'start_date', 'energy_class': 'energy_class', 'building:flats': 'building:flats', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'construction': 'construction', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'direction': 'direction', 'locked': 'locked', 'motor_vehicle': 'motor_vehicle', 'bicycle': 'bicycle', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'bench': 'bench', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'hgv': 'hgv', 'goods': 'goods', 'foot': 'foot', 'name': 'name', 'memorial': 'memorial', 'historic': 'historic', 'crossing': 'crossing', 'access': 'access', 'barrier': 'barrier', 'traffic_calming': 'traffic_calming', 'railway': 'railway', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'footway': 'footway', 'segregated': 'segregated', 'foot': 'foot', 'bicycle': 'bicycle', 'maxheight': 'maxheight', 'covered': 'covered', 'service': 'service', 'step_count': 'step_count', 'handrail': 'handrail', 'check_date:surface': 'check_date:surface', 'tunnel': 'tunnel', 'lanes:forward': 'lanes:forward', 'layer': 'layer', 'bridge': 'bridge', 'living_street': 'living_street', 'vehicle': 'vehicle', 'motor_vehicle': 'motor_vehicle', 'name:tt-lat': 'name:tt-lat', 'lit': 'lit', 'incline': 'incline', 'destination:lanes': 'destination:lanes', 'tracktype': 'tracktype', 'junction': 'junction', 'name:etymology:wikidata': 'name:etymology:wikidata', 'ref': 'ref', 'hgv': 'hgv', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'psv': 'psv', 'width': 'width', 'name:tt': 'name:tt', 'postal_code': 'postal_code', 'name:ru': 'name:ru', 'name': 'name', 'surface': 'surface', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_lab1lab_1_7.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_lab1_2.set('fieldImages', {'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'wheelchair': '', 'level': '', 'entrance': '', 'door': '', 'access': '', });
lyr_building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'addr:unit': 'TextEdit', 'religion': 'TextEdit', 'fast_food': 'TextEdit', 'addr:source': 'TextEdit', 'height': 'TextEdit', 'operator:wikipedia': 'TextEdit', 'operator:wikidata': 'TextEdit', 'contact:vk': 'TextEdit', 'contact:twitter': 'TextEdit', 'contact:facebook': 'TextEdit', 'fuel:octane_92': 'TextEdit', 'fuel:lpg': 'TextEdit', 'fuel:diesel': 'TextEdit', 'phone': 'TextEdit', 'smoking': 'TextEdit', 'craft': 'TextEdit', 'public_transport': 'TextEdit', 'internet_access': 'TextEdit', 'substation': 'TextEdit', 'power': 'TextEdit', 'training': 'TextEdit', 'office': 'TextEdit', 'government': 'TextEdit', 'addr:suburb': 'TextEdit', 'social_facility:for': 'TextEdit', 'social_facility': 'TextEdit', 'atm': 'TextEdit', 'ref:website': 'TextEdit', 'ref': 'TextEdit', 'operator': 'TextEdit', 'currency:RUB': 'TextEdit', 'contact:telegram': 'TextEdit', 'contact:ok': 'TextEdit', 'cash_withdrawal:purchase_required': 'TextEdit', 'cash_withdrawal:limit': 'TextEdit', 'cash_withdrawal:fee': 'TextEdit', 'cash_withdrawal': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'old_name': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'military': 'TextEdit', 'short_name': 'TextEdit', 'name:en': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:email': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand:ru': 'TextEdit', 'brand:en': 'TextEdit', 'brand': 'TextEdit', 'tourism': 'TextEdit', 'opening_hours': 'TextEdit', 'description': 'TextEdit', 'addr2:street': 'TextEdit', 'addr2:housenumber': 'TextEdit', 'shop': 'TextEdit', 'payment:mir': 'TextEdit', 'name:ru': 'TextEdit', 'start_date': 'TextEdit', 'energy_class': 'TextEdit', 'building:flats': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'construction': 'TextEdit', 'building:levels': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': 'TextEdit', });
lyr_highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'direction': '', 'locked': '', 'motor_vehicle': '', 'bicycle': '', 'tactile_paving': '', 'shelter': '', 'bench': '', 'motorcycle': '', 'motorcar': '', 'hgv': '', 'goods': '', 'foot': '', 'name': '', 'memorial': '', 'historic': '', 'crossing': '', 'access': '', 'barrier': '', 'traffic_calming': '', 'railway': '', });
lyr_highway_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'footway': 'TextEdit', 'segregated': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'maxheight': 'TextEdit', 'covered': 'TextEdit', 'service': 'TextEdit', 'step_count': 'TextEdit', 'handrail': 'TextEdit', 'check_date:surface': 'TextEdit', 'tunnel': 'TextEdit', 'lanes:forward': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'living_street': 'TextEdit', 'vehicle': 'TextEdit', 'motor_vehicle': 'TextEdit', 'name:tt-lat': 'TextEdit', 'lit': 'TextEdit', 'incline': 'TextEdit', 'destination:lanes': 'TextEdit', 'tracktype': 'TextEdit', 'junction': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'ref': 'TextEdit', 'hgv': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'psv': 'TextEdit', 'width': 'TextEdit', 'name:tt': 'TextEdit', 'postal_code': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', });
lyr_lab1lab_1_7.set('fieldImages', {'fid': '', 'name': '', });
lyr_lab1_2.set('fieldLabels', {'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'level': 'no label', 'entrance': 'no label', 'door': 'no label', 'access': 'no label', });
lyr_building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'addr:unit': 'no label', 'religion': 'no label', 'fast_food': 'no label', 'addr:source': 'no label', 'height': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'contact:vk': 'no label', 'contact:twitter': 'no label', 'contact:facebook': 'no label', 'fuel:octane_92': 'no label', 'fuel:lpg': 'no label', 'fuel:diesel': 'no label', 'phone': 'no label', 'smoking': 'no label', 'craft': 'no label', 'public_transport': 'no label', 'internet_access': 'no label', 'substation': 'no label', 'power': 'no label', 'training': 'no label', 'office': 'no label', 'government': 'no label', 'addr:suburb': 'no label', 'social_facility:for': 'no label', 'social_facility': 'no label', 'atm': 'no label', 'ref:website': 'no label', 'ref': 'no label', 'operator': 'no label', 'currency:RUB': 'no label', 'contact:telegram': 'no label', 'contact:ok': 'no label', 'cash_withdrawal:purchase_required': 'no label', 'cash_withdrawal:limit': 'no label', 'cash_withdrawal:fee': 'no label', 'cash_withdrawal': 'no label', 'brand:wikipedia': 'no label', 'old_name': 'no label', 'sport': 'no label', 'leisure': 'no label', 'military': 'no label', 'short_name': 'no label', 'name:en': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'brand:wikidata': 'no label', 'brand:ru': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'tourism': 'no label', 'opening_hours': 'no label', 'description': 'no label', 'addr2:street': 'no label', 'addr2:housenumber': 'no label', 'shop': 'no label', 'payment:mir': 'no label', 'name:ru': 'no label', 'start_date': 'no label', 'energy_class': 'no label', 'building:flats': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'construction': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'direction': 'no label', 'locked': 'no label', 'motor_vehicle': 'no label', 'bicycle': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'bench': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'goods': 'no label', 'foot': 'no label', 'name': 'no label', 'memorial': 'no label', 'historic': 'no label', 'crossing': 'no label', 'access': 'no label', 'barrier': 'no label', 'traffic_calming': 'no label', 'railway': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'footway': 'no label', 'segregated': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'maxheight': 'no label', 'covered': 'no label', 'service': 'no label', 'step_count': 'no label', 'handrail': 'no label', 'check_date:surface': 'no label', 'tunnel': 'no label', 'lanes:forward': 'no label', 'layer': 'no label', 'bridge': 'no label', 'living_street': 'no label', 'vehicle': 'no label', 'motor_vehicle': 'no label', 'name:tt-lat': 'no label', 'lit': 'no label', 'incline': 'no label', 'destination:lanes': 'no label', 'tracktype': 'no label', 'junction': 'no label', 'name:etymology:wikidata': 'no label', 'ref': 'no label', 'hgv': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'psv': 'no label', 'width': 'no label', 'name:tt': 'no label', 'postal_code': 'no label', 'name:ru': 'no label', 'name': 'no label', 'surface': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_lab1lab_1_7.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab1lab_1_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});