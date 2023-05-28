var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'GoogleSatellite_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_AdjacentBlocks_2 = new ol.format.GeoJSON();
var features_AdjacentBlocks_2 = format_AdjacentBlocks_2.readFeatures(json_AdjacentBlocks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdjacentBlocks_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AdjacentBlocks_2.addFeatures(features_AdjacentBlocks_2);var lyr_AdjacentBlocks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdjacentBlocks_2, 
                style: style_AdjacentBlocks_2,
                title: '<img src="styles/legend/AdjacentBlocks_2.png" /> Adjacent Blocks'
            });var format_MeleketeParcel_3 = new ol.format.GeoJSON();
var features_MeleketeParcel_3 = format_MeleketeParcel_3.readFeatures(json_MeleketeParcel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeleketeParcel_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MeleketeParcel_3.addFeatures(features_MeleketeParcel_3);var lyr_MeleketeParcel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MeleketeParcel_3, 
                style: style_MeleketeParcel_3,
                title: '<img src="styles/legend/MeleketeParcel_3.png" /> Melekete Parcel'
            });var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Road_4.addFeatures(features_Road_4);var lyr_Road_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                title: '<img src="styles/legend/Road_4.png" /> Road'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_AdjacentBlocks_2.setVisible(true);lyr_MeleketeParcel_3.setVisible(true);lyr_Road_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_AdjacentBlocks_2,lyr_MeleketeParcel_3,lyr_Road_4];
lyr_AdjacentBlocks_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_MeleketeParcel_3.set('fieldAliases', {'PNUMBER': 'PNUMBER', 'Area_Msq': 'Area_Msq', 'Owner': 'Owner', 'T': 'T', 'North': 'North', 'South': 'South', 'East': 'East', 'West': 'West', 'Sold': 'Sold', });
lyr_Road_4.set('fieldAliases', {'Id': 'Id', });
lyr_AdjacentBlocks_2.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_MeleketeParcel_3.set('fieldImages', {'PNUMBER': 'TextEdit', 'Area_Msq': 'TextEdit', 'Owner': 'TextEdit', 'T': 'TextEdit', 'North': 'TextEdit', 'South': 'TextEdit', 'East': 'TextEdit', 'West': 'TextEdit', 'Sold': 'TextEdit', });
lyr_Road_4.set('fieldImages', {'Id': 'TextEdit', });
lyr_AdjacentBlocks_2.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_MeleketeParcel_3.set('fieldLabels', {'PNUMBER': 'inline label', 'Area_Msq': 'inline label', 'Owner': 'inline label', 'T': 'inline label', 'North': 'inline label', 'South': 'inline label', 'East': 'inline label', 'West': 'inline label', 'Sold': 'inline label', });
lyr_Road_4.set('fieldLabels', {'Id': 'no label', });
lyr_Road_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});