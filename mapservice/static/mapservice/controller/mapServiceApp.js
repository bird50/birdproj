//angular.module('mapServiceApp', ['ui.bootstrap'])
angular.module('mapServiceApp', ['ui.bootstrap','swanModule'])
.controller('mainMapController', function($scope,swan) {
            var map;
            var blank_img=swan.static_url+'mapservice/images/blank.png';
                        // alert(blank_img);
            var mapHover=$('#mapHover');
            
          
                              
                              /*===== set map center  =====*/
                              map = L.map('map').setView([13.505, 100.509], 8);
                              
                              /*===== Base Layer =====*/
                              var GoogleRoad = new L.TileLayer("http://mt.google.com/vt/lyrs=m&z={z}&x={x}&y={y}&hl=th", {
                                                               maxZoom: 22, minZoom: 4,
                                                               errorTileUrl: blank_img,
                                                               attribution: "google",
                                                               detectRetina: false
                                                               });
                              map.addLayer(GoogleRoad);
                              
                              var GoogleSat = new L.TileLayer("http://mt.google.com/vt/lyrs=s&z={z}&x={x}&y={y}&hl=th", {
                                                              maxZoom: 22, minZoom: 4,
                                                              errorTileUrl: blank_img,
                                                              attribution: "google",
                                                              detectRetina: false
                                                              });
                              
                              var GoogleHybrid = new L.TileLayer("http://mt.google.com/vt/lyrs=y&z={z}&x={x}&y={y}&hl=th", {
                                                                 maxZoom: 22, minZoom: 4,
                                                                 errorTileUrl: blank_img,
                                                                 attribution: "google",
                                                                 detectRetina: false
                                                                 });
                              
                              
                              /*===== baseLayers Group =====*/
                              var baseLayers = {
                              'Google Road': GoogleRoad,
                              'Google Sat': GoogleSat,
                              'Google Hybrid': GoogleHybrid
                              };
                              
                              /*===== Custom Layer =====*/
                              /*var RID_Prj_area = new L.TileLayer("http://eisweb-map.rid.go.th/i/RID_Prj_area/?y&z={z}&x={x}&y={y}", {
                               maxZoom: 22, minZoom: 4,
                               errorTileUrl: "img/blank.png",
                               attribution: "พื้นที่ชลประทาน",
                               detectRetina: false
                               });*/
                              
                              var RID_basin = new L.TileLayer("http://eisweb-map.rid.go.th/i/RID_basin_geo/?y&z={z}&x={x}&y={y}", {
                                                              maxZoom: 22, minZoom: 4,
                                                              errorTileUrl: blank_img,
                                                              attribution: "ฺBasin",
                                                              detectRetina: false
                                                              });
                              var RID_subbasin = new L.TileLayer("http://eisweb-map.rid.go.th/i/DOF_DOF_SubBasin/?y&z={z}&x={x}&y={y}", {
                                                                 maxZoom: 22, minZoom: 4,
                                                                 errorTileUrl: blank_img,
                                                                 attribution: "ฺSub Basin",
                                                                 detectRetina: false
                                                                 });
                              
                              var RID_ADMIN = new L.TileLayer("http://eisweb-map.rid.go.th/i/Flood_Admin/?y&z={z}&x={x}&y={y}", {
                                                              maxZoom: 22, minZoom: 4,
                                                              errorTileUrl: blank_img,
                                                              attribution: "ขอบเขตจังหวัด",
                                                              detectRetina: false
                                                              });
                              var RID_tambol = new L.TileLayer("http://irrigationstructure.rid.go.th:8888/v2/tambol/{z}/{x}/{y}.png", {
                                                               maxZoom: 13, minZoom: 5,
                                                               errorTileUrl: blank_img,
                                                               attribution: "ตำบล",
                                                               detectRetina: false
                                                               });
                              var RID_redyellow = new L.TileLayer("http://irrigationstructure.rid.go.th:8888/v2/yellowred/{z}/{x}/{y}.png", {
                                                                  maxZoom: 13, minZoom: 5,
                                                                  errorTileUrl: blank_img,
                                                                  attribution: "พื้นที่คาดการณ์งดปลูกพืช",
                                                                  detectRetina: false
                                                                  });
                              var RID_stream = new L.TileLayer("http://irrigationstructure.rid.go.th:8888/v2/stream/{z}/{x}/{y}.png", {
                                                               maxZoom: 13, minZoom: 5,
                                                               errorTileUrl: blank_img,
                                                               attribution: "แม่น้ำ",
                                                               detectRetina: false
                                                               });
            
                              var RID_stream_grid = new L.UtfGrid('http://irrigationstructure.rid.go.th:8888/v2/stream/{z}/{x}/{y}.grid.json?callback={cb}',{
                                                                  
                                                                  });
                            var pwa = new L.TileLayer("http://irrigationstructure.rid.go.th:8888/v2/pwa/{z}/{x}/{y}.png", {
                                      maxZoom: 13, minZoom: 5,
                                      errorTileUrl: blank_img,
                                      attribution: "ประปาส่วนภูมิภาค",
                                      detectRetina: false
                                      });
                            var pwa_grid = new L.UtfGrid('http://irrigationstructure.rid.go.th:8888/v2/pwa/{z}/{x}/{y}.grid.json?callback={cb}',{
                                                
                                                });
            
            
                         var rice = L.tileLayer.wms("http://rice.gistda.or.th/rest/gis/gwc", {
                                                     layers: 'rice:rice_20150915',
                                                     format: 'image/png',
                                                     transparent: true,
                                                     version: '1.1.0',
                                                     attribution: "สถานการณ์การเพาะปลูกข้าว GISTDA"
                                                     });
                        var rice_20150930 = L.tileLayer.wms("http://rice.gistda.or.th/rest/gis/gwc", {
                                       layers: 'rice:rice_20150930',
                                       format: 'image/png',
                                       transparent: true,
                                       version: '1.1.0',
                                       attribution: "สถานการณ์การเพาะปลูกข้าว GISTDA"
                                       });
            var rice_20151015 = L.tileLayer.wms("http://rice.gistda.or.th/rest/gis/gwc", {
                                                layers: 'rice:rice_20151015',
                                                format: 'image/png',
                                                transparent: true,
                                                version: '1.1.0',
                                                attribution: "สถานการณ์การเพาะปลูกข้าว GISTDA"
                                                });
            
                        var sugarcane_20150930 = L.tileLayer.wms("http://27.254.130.5:8085/geoserver/wms", {
                                                layers: 'sugarcane:sugar_20150930_gcs',
                                                format: 'image/png',
                                                transparent: true,
                                                version: '1.1.1',
                                                attribution: "สถานการณ์การปลูกอ้อย GISTDA"
                                                });
            
                         var NASAGIBS_ModisTerraChlorophyll = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Chlorophyll_A/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
                                                                          attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
                                                                          bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
                                                                          minZoom: 1,
                                                                          maxZoom: 14,
                                                                          format: 'png',
                                                                          time: '',
                                                                          tilematrixset: 'GoogleMapsCompatible_Level',
                                                                          opacity: 0.75
                                                                          });
                     
                              /*var RID_landuse = new L.TileLayer("http://eisweb-map.rid.go.th/i/RID_Landuse/{z}/{x}/{y}.png", {
                               maxZoom: 13, minZoom: 5,
                               errorTileUrl: "img/blank.png",
                               attribution: "การใช้ประโยชน์ที่ดิน",
                               detectRetina: false
                               });*/
                              
                              //
            var style = {
            "clickable": true,
            "color": "#00D",
            "fillColor": "#00D",
            "weight": 1.0,
            "opacity": 0.3,
            "fillOpacity": 0.2
            };
            var hoverStyle = {
            "fillOpacity": 0.5
            };
            
            var geojsonURL = 'http://irrigationstructure.rid.go.th:8000/mapservice/papatiles/{z}/{x}/{y}.json';
            var geojsonTileLayer = new L.TileLayer.GeoJSON(geojsonURL, {
                                                           clipTiles: true,
                                                           unique: function (feature) {
                                                           return feature.id;
                                                           }
                                                           }, {
                                                           style: style,
                                                           onEachFeature: function (feature, layer) {
                                                           if (feature.properties) {
                                                           var popupString = '<div class="popup">';
                                                           for (var k in feature.properties) {
                                                           var v = feature.properties[k];
                                                           popupString += k + ': ' + v + '<br />';
                                                           }
                                                           popupString += '</div>';
                                                           layer.bindPopup(popupString);
                                                           }
                                                           if (!(layer instanceof L.Point)) {
                                                           layer.on('mouseover', function () {
                                                                    layer.setStyle(hoverStyle);
                                                                    });
                                                           layer.on('mouseout', function () {
                                                                    layer.setStyle(style);
                                                                    });
                                                           }
                                            }
                                            }
                                        );
                            //map.addLayer(geojsonTileLayer);
                              
                              /*===== overlayLayers Group =====*/
                              var overlayLayers = {
                              //	'พื้นที่ชลประทาน': RID_Prj_area,
                              'จุดแสดงที่ตั้งประปาส่วนภูมิภาค':pwa,
                              'จุดแสดงที่ตั้งประปาส่วนภูมิภาค_interactive':pwa_grid,
                              'พื้นที่คาดการณ์แดงเหลือง':RID_redyellow,
                              'สถานการณ์การเพาะปลูกข้าว ช่วง01-15 ต.ค.2558 GISTDA':rice_20151015,
                              'สถานการณ์การเพาะปลูกข้าว ช่วง16-30 ก.ย.2558 GISTDA':rice_20150930,
            
                              'สถานการณ์การเพาะปลูกข้าว ช่วง01-15 ก.ย.2558 GISTDA':rice,
                              'สถานการณ์การปลูกอ้อย ช่วง16-30 ก.ย.2558 GISTDA':sugarcane_20150930,
            
                             // 'ภาพจากดาวเทียมTerra (Chlorophyll)โดย NASA':NASAGIBS_ModisTerraChlorophyll,
                              'ขอบเขตตำบล':RID_tambol,
                              'ลุ่มน้ำหลัก': RID_basin,
                              'ลุ่มน้ำรอง': RID_subbasin,
                         

                              'แม่น้ำ': RID_stream,
                              'แม่น้ำ_interactive': RID_stream_grid,
                              'ขอบเขตจังหวัด': RID_ADMIN,
                              'สถานีสูบน้ำเพื่อการอุปโภค-บริโภคในเขตลุ่มน้ำเจ้าพระยา ต.ค.2558':geojsonTileLayer,
            
                         
                              //'การใช้ประโยชน์ที่ดิน':RID_landuse,
                              
                              };
                              
                              
                              /*===== Layer Control =====*/
                              L.control.layers(baseLayers, overlayLayers).addTo(map);
                              
                              
                              RID_stream_grid.on('click', function (e) {
                                                 bootbox.alert('Name:'+e.data.HY_LNAME);
                                                 //console.log('hover: ' + e.data.HY_LNAME);
                                                 });
                              RID_stream_grid.on('mouseover', function (e) {
                                                 mapHover.html('Name:'+e.data.HY_LNAME);
                                                 //console.log('hover: ' + e.data.HY_LNAME);
                                                 });
                            pwa_grid.on('click', function (e) {
                                        var tamp_pwa_grid='<div><strong>'+e.data.sta_name+'</strong></div><div><label><span>สาขา :</span></label><span>'+e.data.kpp_branch+'</span><br/><label><span>ปริมาณน้ำที่สูบ (ลบ.ม./วัน) :</span></label><span>'+e.data.Q_cms+'</span><br/><label><span>ผู้รับผิดชอบ :</span></label><span>'+e.data.response+'</span><br/><label><span>แหล่งน้ำ :</span></label><span>'+e.data.waterResNa+'</span><br/><label><span>ลุ่มน้ำหลัก :</span></label><span>'+e.data.main_basin+'</span><br/></div><hr>ที่อยู่:'+e.data.tambol+' '+e.data.amphoe+' '+e.data.province+'<br/><small>Layer:จุดแสดงที่ตั้งการประปาส่วนภูมิภาค</small>';

                                            bootbox.alert(tamp_pwa_grid);
                               //console.log('hover: ' + e.data.HY_LNAME);
                               });
            
            
            
});