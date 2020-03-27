function Covid() {
  
  var token = "Line Notify Token"; // Token 
  
  var total =[];

  var fetchAPI = UrlFetchApp.fetch("https://data-covid-2019.herokuapp.com/api/covids/thailand_summary");
  var json = JSON.parse(fetchAPI.getContentText());
  total[1] = json.data.confirmed;
  total[2] = json.data.healings;
  total[3] = json.data.deaths;
  total[4] = json.data.recovered;
  total[5] = json.data.confirmed_add_today;
  total[6] = json.data.last_updated;
  total[7] = json.data.updated_at;
  total[8] = json.data.critical;
  total[9] = json.data.watch_out_collectors;
  total[10] = json.data.new_watch_out;
  total[11] = json.data.case_management_admit;
  total[12] = json.data.case_management_discharged;
  total[13] = json.data.case_management_observation;
  total[14] = json.data.airport;
  total[15] = json.data.sea_port;
  total[16] = json.data.ground_port; 
  total[17] = json.data.deaths_add_today;
  total[18] = json.data.watch_out_collectors_add_today;
  total[19] = json.data.case_management_discharged;
  total[19] = json.data.at_chaeng_wattana;

  // Convert UTC to GMT
  var timeZone = "GMT+7"  
  var format = "dd-MM-YYYY hh:mm:ss"
  var moment = new Date(total[7]);
  var formattedDate = Utilities.formatDate(moment, timeZone, format)
 
  var formData =
       {
         'message' : "อัพเดทล่าสุด ณ"
         + "\n" + "" + formattedDate + ""
         + "\n" + ""
         + "\n" + "         ***** ประเทศไทย *****"
         + "\n" + ""
         + "\n" + "- ผู้ติดเชื้อ "+ total[1] + " คน" + " (รายใหม่ "+ total[5] + " คน)" +""
         + "\n" + ""
         + "\n" + "- เฝ้าระวัง "+ total[9] + " คน" + " (รายใหม่ "+ total[18] + " คน)" +""
         + "\n" + ""
         + "\n" + "- เสียชีวิต "+ total[3] + " คน" + " (รายใหม่ "+ total[17] + " คน)" +""
         + "\n" + ""
         + "\n" + "- รักษาอยู่ใน รพ. "+ total[2] + " คน" +""
         + "\n" + ""
         + "\n" + "- อาการรุนแรง "+ total[8] + " คน" +""         
         + "\n" + ""
         + "\n" + "- รักษาหายแล้ว "+ total[4] + " คน" +""
         + "\n" + ""
         + "\n" + "- เฝ้าระวังที่บ้าน "+ total[19] + " คน" +""
         + "\n" + ""
         + "\n" + ""
         + "\n" + "***** ผู้เดินทางที่คัดกรองสะสม *****"
         + "\n" + ""
         + "\n" + "- สนามบิน "+ total[14] + " คน" +""
         + "\n" + ""
         + "\n" + "- ท่าเรือ "+ total[15] + " คน" +""
         + "\n" + ""
         + "\n" + "- ด่านพรมแดน "+ total[16] + " คน" +""
         + "\n" + ""
         + "\n" + "- สตม.แจ้งวัฒนะ "+ total[19] + " คน" +""
         + "\n" + ""
         + "\n" + total[6] + ""
         + "\n" + ""
         + "\n" + "     ** สำนักงาน ปภ. จังหวัดระยอง **"
       }

  var options =
   {
     "method"  : "post",
     "payload" : formData,
     "headers" : {"Authorization" : "Bearer "+ token}
   };
 UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}
