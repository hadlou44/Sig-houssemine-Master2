ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-578072.053547, 5745562.340583, 537260.061411, 6329403.076118]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesatellite_1 = new ol.layer.Tile({
            'title': 'google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_regions_Centre_ouest_2 = new ol.format.GeoJSON();
var features_regions_Centre_ouest_2 = format_regions_Centre_ouest_2.readFeatures(json_regions_Centre_ouest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions_Centre_ouest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions_Centre_ouest_2.addFeatures(features_regions_Centre_ouest_2);
var lyr_regions_Centre_ouest_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_regions_Centre_ouest_2, 
                style: style_regions_Centre_ouest_2,
                popuplayertitle: 'regions_Centre_ouest',
                interactive: true,
                title: '<img src="styles/legend/regions_Centre_ouest_2.png" /> regions_Centre_ouest'
            });
var format_Directiontechnique_3 = new ol.format.GeoJSON();
var features_Directiontechnique_3 = format_Directiontechnique_3.readFeatures(json_Directiontechnique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Directiontechnique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Directiontechnique_3.addFeatures(features_Directiontechnique_3);
cluster_Directiontechnique_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Directiontechnique_3
});
var lyr_Directiontechnique_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Directiontechnique_3, 
                style: style_Directiontechnique_3,
                popuplayertitle: 'Direction technique',
                interactive: true,
                title: '<img src="styles/legend/Directiontechnique_3.png" /> Direction technique'
            });
var format_IsochronesdeplacementDTE_4 = new ol.format.GeoJSON();
var features_IsochronesdeplacementDTE_4 = format_IsochronesdeplacementDTE_4.readFeatures(json_IsochronesdeplacementDTE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IsochronesdeplacementDTE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsochronesdeplacementDTE_4.addFeatures(features_IsochronesdeplacementDTE_4);
var lyr_IsochronesdeplacementDTE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IsochronesdeplacementDTE_4, 
                style: style_IsochronesdeplacementDTE_4,
                popuplayertitle: 'Isochrones deplacement DTE',
                interactive: false,
    title: 'Isochrones deplacement DTE<br />\
    <img src="styles/legend/IsochronesdeplacementDTE_4_0.png" /> 30 min<br />\
    <img src="styles/legend/IsochronesdeplacementDTE_4_1.png" /> 60 min<br />'
        });
var format_Isochronedeplacementcamions_5 = new ol.format.GeoJSON();
var features_Isochronedeplacementcamions_5 = format_Isochronedeplacementcamions_5.readFeatures(json_Isochronedeplacementcamions_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochronedeplacementcamions_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochronedeplacementcamions_5.addFeatures(features_Isochronedeplacementcamions_5);
var lyr_Isochronedeplacementcamions_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochronedeplacementcamions_5, 
                style: style_Isochronedeplacementcamions_5,
                popuplayertitle: 'Isochrone deplacement camions',
                interactive: false,
    title: 'Isochrone deplacement camions<br />\
    <img src="styles/legend/Isochronedeplacementcamions_5_0.png" /> 30 min<br />\
    <img src="styles/legend/Isochronedeplacementcamions_5_1.png" /> 60 min<br />'
        });
var format_Isochronesdeplacementvoiture_6 = new ol.format.GeoJSON();
var features_Isochronesdeplacementvoiture_6 = format_Isochronesdeplacementvoiture_6.readFeatures(json_Isochronesdeplacementvoiture_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochronesdeplacementvoiture_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochronesdeplacementvoiture_6.addFeatures(features_Isochronesdeplacementvoiture_6);
var lyr_Isochronesdeplacementvoiture_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochronesdeplacementvoiture_6, 
                style: style_Isochronesdeplacementvoiture_6,
                popuplayertitle: 'Isochrones deplacement voiture',
                interactive: false,
    title: 'Isochrones deplacement voiture<br />\
    <img src="styles/legend/Isochronesdeplacementvoiture_6_0.png" /> 30 min<br />\
    <img src="styles/legend/Isochronesdeplacementvoiture_6_1.png" /> 60 min<br />'
        });
var format_carriereEuroviaCentreOuest_7 = new ol.format.GeoJSON();
var features_carriereEuroviaCentreOuest_7 = format_carriereEuroviaCentreOuest_7.readFeatures(json_carriereEuroviaCentreOuest_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carriereEuroviaCentreOuest_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carriereEuroviaCentreOuest_7.addFeatures(features_carriereEuroviaCentreOuest_7);
cluster_carriereEuroviaCentreOuest_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_carriereEuroviaCentreOuest_7
});
var lyr_carriereEuroviaCentreOuest_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_carriereEuroviaCentreOuest_7, 
                style: style_carriereEuroviaCentreOuest_7,
                popuplayertitle: 'carriere Eurovia Centre-Ouest',
                interactive: true,
    title: 'carriere Eurovia Centre-Ouest<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_0.png" /> Aplite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_1.png" /> Calcaire<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_2.png" /> Cornéenne<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_3.png" /> Gabbro, granite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_4.png" /> Gneiss<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_5.png" /> Granite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_6.png" /> Granulite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_7.png" /> Leptinite, amphibolite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_8.png" /> Leptinite, orthogneiss<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_9.png" /> Microdiorite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_10.png" /> Migmatite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_11.png" /> Mylonite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_12.png" /> Rhyolite<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_13.png" /> Sable<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_14.png" /> Sable et gravier<br />\
    <img src="styles/legend/carriereEuroviaCentreOuest_7_15.png" /> Stockage<br />'
        });
var group_ProjetwebmapCarrireEuroviaCentreOuest = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_googlesatellite_1,lyr_regions_Centre_ouest_2,lyr_Directiontechnique_3,lyr_IsochronesdeplacementDTE_4,lyr_Isochronedeplacementcamions_5,lyr_Isochronesdeplacementvoiture_6,lyr_carriereEuroviaCentreOuest_7,],
                                fold: "open",
                                title: 'Projet webmap Carrière Eurovia Centre Ouest'});

lyr_OpenStreetMap_0.setVisible(true);lyr_googlesatellite_1.setVisible(false);lyr_regions_Centre_ouest_2.setVisible(true);lyr_Directiontechnique_3.setVisible(true);lyr_IsochronesdeplacementDTE_4.setVisible(false);lyr_Isochronedeplacementcamions_5.setVisible(true);lyr_Isochronesdeplacementvoiture_6.setVisible(false);lyr_carriereEuroviaCentreOuest_7.setVisible(true);
var layersList = [group_ProjetwebmapCarrireEuroviaCentreOuest];
lyr_regions_Centre_ouest_2.set('fieldAliases', {'fid': 'fid', 'R�gION': 'Région', });
lyr_Directiontechnique_3.set('fieldAliases', {'id': 'id', });
lyr_IsochronesdeplacementDTE_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Isochronedeplacementcamions_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Isochronesdeplacementvoiture_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_carriereEuroviaCentreOuest_7.set('fieldAliases', {'fid': 'fid', 'x L93': 'x L93', 'y L93': 'y L93', 'Carriere': 'Nom', 'localisation': 'localisation', 'Type de roche': 'Type de roche', 'Tonnage annuel t/an': 'Tonnage annuel t/an', 'Debut d\'exploitation': 'Debut d\'exploitation', 'Fin AP actuel': 'Fin AP actuel', });
lyr_regions_Centre_ouest_2.set('fieldImages', {'fid': 'Hidden', 'R�gION': 'TextEdit', });
lyr_Directiontechnique_3.set('fieldImages', {'id': 'Hidden', });
lyr_IsochronesdeplacementDTE_4.set('fieldImages', {'fid': '', 'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Isochronedeplacementcamions_5.set('fieldImages', {'fid': '', 'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Isochronesdeplacementvoiture_6.set('fieldImages', {'fid': '', 'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_carriereEuroviaCentreOuest_7.set('fieldImages', {'fid': 'Hidden', 'x L93': 'Hidden', 'y L93': 'Hidden', 'Carriere': 'TextEdit', 'localisation': 'TextEdit', 'Type de roche': 'TextEdit', 'Tonnage annuel t/an': 'TextEdit', 'Debut d\'exploitation': 'TextEdit', 'Fin AP actuel': 'TextEdit', });
lyr_regions_Centre_ouest_2.set('fieldLabels', {'R�gION': 'inline label - always visible', });
lyr_Directiontechnique_3.set('fieldLabels', {});
lyr_IsochronesdeplacementDTE_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_Isochronedeplacementcamions_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'hidden field', });
lyr_Isochronesdeplacementvoiture_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_carriereEuroviaCentreOuest_7.set('fieldLabels', {'Carriere': 'inline label - always visible', 'localisation': 'inline label - always visible', 'Type de roche': 'inline label - always visible', 'Tonnage annuel t/an': 'inline label - always visible', 'Debut d\'exploitation': 'inline label - always visible', 'Fin AP actuel': 'inline label - always visible', });
lyr_carriereEuroviaCentreOuest_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});