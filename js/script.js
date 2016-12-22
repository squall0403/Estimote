function onPageLoad() {
var estimote = {"identifier":"fcf7a6767249162acee4ffe62dcd7d2e","shadow":{"id":449361,"name":"Testing Green Changed","tags":[],"organization_id":64114,"location":{"timezone":"America/Los_Angeles"}},"alerts_configuration":{"beacon_stolen_notifications":"off","beacon_fallen_notifications":"off","beacon_battery_notifications":"off","updated_at":"2016-12-22T02:03:06.351Z"},"alerts":[],"hardware_type":"beacon","hardware_revision":"G1.8","hardware_footprint":"12607ff062ac35cfb722bd2d0acbadfbeabc2ec6","color":"mint","form_factor":"standard","status_report":{"battery_percentage":100,"battery_voltage":3.086,"estimated_battery_lifetime":835,"clock_offset":42907,"firmware_version":"4.9.1","last_synced":"2016-12-22T02:03:06.350Z","public":false,"broken_motion":false,"broken_temperature":false,"missing_telemetry_data":false},"settings":{"general":{"motion_detection_enabled":false,"motion_only_enabled":false,"dark_to_sleep_enabled":false,"dark_to_sleep_threshold":10,"conditional_broadcasting":"off","flip_to_sleep_enabled":false,"smart_power_mode_enabled":true,"temperature_offset":0,"eddystone_configuration_service_enabled":false,"nfc_records":[{"data":"com.estimote.apps.main","type":"android_package"}],"automatic_firmware_update_enabled":false,"motion_only_delay":0,"schedule":{"enabled":false,"start_time":0,"stop_time":0}},"advertisers":{"connectivity":[{"index":1,"name":"connectivity","power":-4,"interval":1285,"shake_to_connect_enabled":false,"near_to_connect_enabled":true}],"ibeacon":[{"index":1,"name":"iBeacon","enabled":true,"uuid":"B9407F30-F5F8-466E-AFF9-25556B57FE6D","major":6147,"minor":25437,"power":-16,"interval":300,"security":{"enabled":false,"real_id":901075,"interval_scaler":10},"non_strict_mode_enabled":true}],"eddystone_uid":[{"index":1,"name":"Eddystone UID","enabled":false,"interval":300,"power":-4,"instance_id":"fcf7a6767249","namespace_id":"edd1ebeac04e5defa017"}],"eddystone_url":[{"index":1,"name":"Eddystone URL","enabled":false,"interval":300,"power":-4,"url":"http://go.esti.be/"}],"eddystone_telemetry":[{"index":1,"name":"Eddystone Telemetry","enabled":false,"interval":300,"power":-4}],"estimote_telemetry":[{"index":1,"name":"Estimote Telemetry","enabled":false,"interval":2570,"power":-4}],"estimote_location":[{"index":1,"name":"Estimote Location","enabled":false,"interval":300,"power":-4}],"link_network":[{"index":1,"name":"Here & Now","enabled":false,"interval":300,"power":-4,"link_id":null,"domain":null,"measurement_period":60}],"mesh":[{"index":1,"name":"Mesh","enabled":false,"interval":950,"settings_version":1,"mesh_identifier":null,"mesh_key":null,"synchronisation_list":["00B0","00B1","00B2","00B3","00B8","0100","0200","0300","0101","0201","0301","0102","0202","0302","0103","0203","0303","1002","1003","1004","1006","1007","1008","1009","100A","2002","2003","2004","3003","3002","3013","3012"]}]}},"mesh":{"name":null,"type":null}};

console.log(estimote);
console.log(estimote.color);
console.log(estimote.identifier);
console.log(estimote.shadow.name);

}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.setRequestHeader("Authorization", "Basic" + btoa("rmit-vietnam-s-notificatio-4vp:b4c01c4b0b5298254f92abd95d1c48c5"));
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.open("GET", "cors.io/?u=https://cloud.estimote.com/v2/devices/40b53f0f65a40b6f18c91e6f16ff802d", true);
  xhttp.send();
}
