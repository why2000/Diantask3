var inputdata = {
    name: 'error',
    email: 'test@qq.com',
    phone: '18973707225'
};
$.ajax({
         type: "POST",
         url: "120.79.70.187:3000/contacts",
         contentType: "application/json; charset=utf-8",
         async: true,
         cache: false,
         dataType: 'json',
         data: inputdata,
         success: function (data, textStatus) {
            //////
         },
         error: function (data, textstatus) {
             /////
         }
     });