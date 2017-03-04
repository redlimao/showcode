// // var myApp = angular.module("myApp",[]);

// // myApp.directive('whenScrolled',function(){
// //     return function(scope,elm,attr){
// //         $(window).scroll(function(){
// //             //滚动条距离顶部的距离
// //             var scrollTop = $(window).scrollTop();

// //             //滚动条高度
// //             var scrollHeight = $(document).height();
// //             var windowHeight = $(window).height();
// //             if(scrollTop + windowHeight >= scrollHeight){
// //                 scope.$apply(attr.whenScrolled);
// //             }
// //         })
// //     }
// // })

//     loadXML = function(xmlFile){
//         var xmlDoc = null;
//         //判断浏览器的类型
//         //支持IE浏览器
//         if(!window.DOMParser && window.ActiveXObject){
//             var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
//             for(var i=0;i<xmlDomVersions.length;i++){
//                 try{
//                     xmlDoc = new ActiveXObject(xmlDomVersions[i]);
//                     break;
//                 }catch(e){
//                 }
//             }
//         }
//         //支持Mozilla浏览器
//         else if(document.implementation && document.implementation.createDocument){
//             try{
//                 /* document.implementation.createDocument('','',null); 方法的三个参数说明
//                  * 第一个参数是包含文档所使用的命名空间URI的字符串； 
//                  * 第二个参数是包含文档根元素名称的字符串； 
//                  * 第三个参数是要创建的文档类型（也称为doctype）
//                  */
//                 xmlDoc = document.implementation.createDocument('','',null);
//             }catch(e){
//             }
//         }
//         else{
//             return null;
//         }

//         if(xmlDoc != null){
//             xmlDoc.async = false;
//             xmlDoc.load(xmlFile);
//         }
//         return xmlDoc;
//     }

//     var xmldoc = loadXML('http://36kr.com/feed.xml');

//     var elements = xmlDoc.getElementsByTagName("item");

//      for (var i = 0; i < elements.length; i++) {
//         var name = elements[i].getElementsByTagName("author")[0].firstChild.nodeValue;
//         var ip = elements[i].getElementsByTagName("title")[0].firstChild.nodeValue;   
//         console.log(name);            
//     }

