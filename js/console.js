$(window).scroll(function(){ 
    if ($(window).scrollTop() > 0){ 
         $("#header").addClass('chageheader'); 
         $('.line-graph').each(function (i) {
          i = i + 1;
          $(this).addClass('line-chart-' + i);
        })
    }else{
       $("#header").removeClass('chageheader');
    }  
});
$(function() {
console.log("\u611f\u8c22\u4e92\u8054\u7f51\u5f00\u6e90\u7cbe\u795e\u3002");
console.log("\u6e90\u7801\u53d6\u81ea\u0053\u0070\u0061\u0063\u0065\u4e2a\u4eba\u4e3b\u9875");
console.log("\u611f\u8c22\u539f\u4f5c\u8005\u7684\u521b\u4f5c");
console.log("\u5185\u90e8\u4ea4\u6d41\u9875\u9762\u0020\u611f\u8c22\u4f7f\u7528");
console.log("Vision:V1.1 20171016");
});