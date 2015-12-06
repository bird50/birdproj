//angular.module('mapServiceApp', ['ui.bootstrap'])
angular.module('ireportApp', ['ui.bootstrap','swanModule'])
.controller('cgraphController', function($scope,swan,$http) {
    $scope.chg2thai=function(ts){
            var thmonth = new Array ("ม.ค.","ก.พ.","มี.ค.",
                                     "เม.ย.","พ.ค.","มิ.ย.", "ก.ค.","ส.ค.","ก.ย.",
                                     "ต.ค.","พ.ย.","ธ.ค.");
            var d=new Date(ts);
            var y=d.getFullYear()+543;
            return d.getDate()+' '+thmonth[d.getMonth()]+' '+y.toString().substring(2,4);
    };
            var plan_line=0;
            var station_name="C2";
            Highcharts.setOptions({
                                  global:{
                                  timezoneOffset:-7*60
                                  }
                                  });
			var plan_rama6=[
				{"dateTime":"2015-11-01T06:00:00.000+07:00","cms":15},
				{"dateTime":"2015-11-29T06:00:00.000+07:00","cms":15},
				{"dateTime":"2015-11-30T06:00:00.000+07:00","cms":17},
				{"dateTime":"2015-12-06T06:00:00.000+07:00","cms":17},
				{"dateTime":"2015-12-07T06:00:00.000+07:00","cms":19},
				{"dateTime":"2016-04-30T06:00:00.000+07:00","cms":19}
			  ];
            var station_list=[
                              
                {"station":"c2","station_name":"C2","api":"http://hydro-5.com/api.php?station=c2&startdate=2015-11-01",plan:142,critical:118},
                {"station":"p7a","station_name":"P7A","api":"http://mynode-bird50.rhcloud.com/tm_api/station/p7a/",plan:46,critical:20.8},
                {"station":"p17","station_name":"P17","api":"http://hydro-5.com/api.php?station=p17&startdate=2015-11-01",plan:40,critical:29},
                {"station":"n67","station_name":"N67","api":"http://hydro-5.com/api.php?station=n67&startdate=2015-11-01",plan:105,critical:50.92},
                {"station":"c29","station_name":"C29","api":"http://hydro-5.com/api.php?station=c29&startdate=2015-11-01",plan:90,critical:80},
                {"station":"n5a","station_name":"N5A","api":"http://mynode-bird50.rhcloud.com/tm_api/station/n5a/",plan:108,critical:22.7},
                {"station":"n7a","station_name":"N7A","api":"http://mynode-bird50.rhcloud.com/tm_api/station/n7a/",plan:107},
                {"station":"n8a","station_name":"N8A","api":"http://mynode-bird50.rhcloud.com/tm_api/station/n8a/",plan:106,critical:70.1},
                /*
                {"station":"s26","station_name":"S26","api":"http://hydro-5.com/api.php?station=s26&startdate=2015-11-01",plan:19},
                {"station":"c13","station_name":"C13","api":"http://hydro-5.com/api.php?station=c13&startdate=2015-11-01",plan:70},
                 */
                
                
                {"station":"ma","station_name":"มะขามเฒ่า-อู่ทอง","api":"http://mynode-bird50.rhcloud.com/tm_api/station/ma/"},
                {"station":"pt","station_name":"พลเทพ","api":"http://mynode-bird50.rhcloud.com/tm_api/station/pt/"},
                {"station":"bt","station_name":"บรมธาตุ","api":"http://mynode-bird50.rhcloud.com/tm_api/station/bt/"},
                {"station":"mnr","station_name":"มโนรมณ์","api":"http://mynode-bird50.rhcloud.com/tm_api/station/mnr/"},
                {"station":"mhr","station_name":"มหาราช","api":"http://mynode-bird50.rhcloud.com/tm_api/station/mhr/"},
                {"station":"cpd","station_name":"ท้ายเขื่อนเจ้าพระยา","api":"http://mynode-bird50.rhcloud.com/tm_api/station/cpd/",plan:70},
                {"station":"rama6d","station_name":"ท้ายเขื่อนพระราม 6","api":"http://mynode-bird50.rhcloud.com/tm_api/station/rama6d/",plan:plan_rama6},
                
            ];
        //$scope.station_selection="c2";
            /*
             <option value="c2" selected>C2</option>
             <option value="p7a">P7A</option>
             <option value="p17">P17</option>
             <option value="n67">N67</option>
             <option value="c29">C29</option>
             <option value="n5a">N5A</option>
             <option value="n7a">N7A</option>
             <option value="n8a">N8A</option>
             <option value="ma">มะขามเฒ่า-อู่ทอง</option>
             <option value="pt">พลเทพ</option>
             <option value="bt">บรมธาตุ</option>
             <option value="mnr">มโนรมณ์</option>
             <option value="mhr">มหาราช</option>
             <option value="cpd">ท้ายเขื่อนเจ้าพระยา</option>
             <option value="rama6d">ท้ายเขื่อนพระราม 6</option>
             */
            $scope.$watch('station_selection',function(){
                $("#hello").html('Loading data...');
                var api_address=jsonQ(station_list).find('station',function(){
                    return this==$scope.station_selection;
                }).parent().value();
                if(api_address.length>0){
                    plan_line=api_address[0].plan;
                    critical_line=api_address[0].critical;
                    station_name=api_address[0].station_name;
                          
                    renderGraph(api_address[0].api);
                   // console.log(api_address[0].api);
                }//if
                
            });
function isNumeric( obj ) {
    return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
}
function renderGraph(api_string){
            $http.get(api_string)
            .then(function (respo) {
                  console.log(JSON.stringify(respo.data.data));
                      var ent=respo.data.data;
                 //  alert(ent.length);
                      var dat1=Array();
                      var dat2=Array();
                      var dat3=Array();
                      var dat4=Array();
                      var dat5=Array();
                      var dat6=Array();
                      var date_now= new Date();
                      var date_now_string=$scope.chg2thai(date_now.getTime());
                      var last_date_string;
                  
                  
                      var last_value;
					  var last_plan_value;
                      var is_first=true;
                for(i=0;i<=ent.length-1;i++){
                    
                      var nd=new Date(ent[i].dateTime);
                      var node =Array(nd.getTime(),parseFloat(ent[i].cms));
                  
                      if(nd.getHours()==6 && isNumeric(ent[i].cms)){
                        if(is_first){
                            if(!Array.isArray(plan_line)){dat2.push(Array(nd.getTime(),plan_line));}
                            dat3.push(Array(nd.getTime(),critical_line));
                            is_first=false;
                        }
                      dat1.push(node);  // push
                      last_value=parseFloat(ent[i].cms);
                      last_date=nd.getTime();
                      }
                }//for
                  if(!Array.isArray(plan_line)){
					  dat2.push(Array(last_date,plan_line));
				  }else{
				  	for(pl_i=0;pl_i<=plan_line.length-1;pl_i++){
						var pl_nd=new Date(plan_line[pl_i].dateTime);
						if(pl_nd.getTime()<last_date){
							var pl_node=Array(pl_nd.getTime(),parseFloat(plan_line[pl_i].cms));
							dat2.push(pl_node);
							last_plan_value=parseFloat(plan_line[pl_i].cms);
						}
						
					}//for
					dat2.push(Array(last_date,last_plan_value));
				  }//plan is array
				  
                  dat3.push(Array(last_date,critical_line));
                 // console.log('dat2'+dat2);
                      last_date_string=$scope.chg2thai(last_date);
                      $('#hello').highcharts({
                                             
                                             chart: {
                                             zoomType: 'x',
                                            
                                             },
                                             title: {
                                             text: 'รายงานสถานการณ์น้ำ ณ วันที่ '+last_date_string
                                             },
                                             subtitle: {text:
                                             'ปริมาณน้ําไหลผ่านจุดควบคุมสถานี '+station_name
                                             },
                                             xAxis: {
                                             type:'datetime',
                                             labels: {
                                             formatter: function() {
                                             return $scope.chg2thai(this.value);
                                             }
                                             }
                                             },
                                    yAxis: {
                                        title: {
                                             text: 'ปริมาณน้ำ (ลบ.ม./วินาที)'
                                        },
                                        min:0,
                                            // tickInterval:0.5,
                                        stackLabels:{
                                             enabled:true,
                                        }
                                    },
                                    legend: {
                                             enabled: false
                                    },
                                    plotOptions: {
                                             area: {
                                             //stacking:'normal',
                                             marker: {
                                             radius: 2
                                             },
                                             lineWidth:3,
                                             states: {
                                             hover: {
                                             lineWidth: 3,
                                             }
                                             },
                                             threshold: null,
                                             dataLabels:{enabled:false}
                                             },
                                        line:{
                                            
                                        }//line
                                    },
                                             
                        series: [
                                    // Q
                                    {
                                                      type: 'area',
                                                      name: 'ปริมาณน้ำ',
                                                      data: dat1
                                                      ,zIndex:10,
                                                      fillColor: {
                                                      linearGradient: {
                                                      x1: 0,
                                                      y1: 1,
                                                      x2: 0,
                                                      y2: 0
                                                      },
                                                      stops: [
                                                              [0, 'rgb(250,252,252)'],
                                                              [1, 'rgb(134,219,247)']
                                                              ],
                                                      },
                                            dataLabels:{enabled:false}

                                    },
                                                      // แผน
                                    {
                                                      type: 'line',
                                                      name: 'แผนปริมาณน้ำไหลผ่าน',
                                                      data: dat2,
                                                      zIndex:11,
                                                      dashStyle:'Dash',
                                                      color:'#1AB4E8',
                                            fillColor: {
                                                      linearGradient: {
                                                      x1: 0,
                                                      y1: 1,
                                                      x2: 0,
                                                      y2: 0
                                                      },
                                                      stops: [
                                                              [0, 'rgb(72,151,70)'],
                                                              [1, 'rgb(149,219,147)']
                                                              ],
                                            },
                                 dataLabels:{enabled:true,useHTML:true,formatter:function(){
                                 // if(this.y==last_value){
                                 if(this.x==last_date){
                                 return "<strong>แผนปริมาณน้ำไหลผ่าน "+this.y+" ลบ.ม./วินาที</strong>";
                                 }else{
                                 return "";
                                 }
                                 
                                 }//function
                                 ,align:'right'
                                 }//dataLabels
                              /*   dataLabels:{enabled:true,formatter:function(){
                                    if(this.x==last_date){
                                        return "1,000";
                                    }else{
                                        return "";
                                    }//if
                                 }}
                               */
                            }
                                 ,
                                 // วิกฤติ
                                 {
                                 type: 'line',
                                 name: 'เกณฑ์น้ำน้อยวิกฤติ',
                                 data: dat3,
                                 zIndex:11,
                                 dashStyle:'Dash',
                                 color:'red',
                                 fillColor: {
                                 linearGradient: {
                                 x1: 0,
                                 y1: 1,
                                 x2: 0,
                                 y2: 0
                                 },
                                 stops: [
                                         [0, 'rgb(72,151,70)'],
                                         [1, 'rgb(149,219,147)']
                                         ],
                                 },
                                 dataLabels:{enabled:true,useHTML:true,formatter:function(){
                                 // if(this.y==last_value){
                                 if(this.x==last_date){
                                 return "<strong>เกณฑ์น้ำน้อย "+this.y+" ลบ.ม./วินาที</strong>";
                                 }else{
                                 return "";
                                 }
                                 
                                 }//function
                                 ,align:'right'
                                 }//dataLabels
                                 /*   dataLabels:{enabled:true,formatter:function(){
                                  if(this.x==last_date){
                                  return "1,000";
                                  }else{
                                  return "";
                                  }//if
                                  }}
                                  */
                                 },

                            ],
                            legend: {
                                enabled: true,
                                verticalAlign: 'top',
                               // align: 'left',
                                y: 50,x:0,
                                floating:false,
                                borderWidth: 0
                            }
                                             //});
                                             // alert(dat1);
                                             });
                      });//json
}// function
            
});