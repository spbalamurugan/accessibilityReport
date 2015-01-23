var accessibilityReport = {

  hideAccessibilityResults: function(){
    var css = '#HTMLCS-wrapper{visibility:hidden;}',
        head = document.getElementsByTagName("head")[0],
        style = document.createElement('style');
    style.type = "text/css";
    style.id = "jsAddedStyle";
    if(style.styleSheet){
      style.styleSheet.cssText = css;
    }else{
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    },  

  runHtmlCodeSniffer: function () {    
    var _p='http://squizlabs.github.io/HTML_CodeSniffer/build/';var _i=function(s,cb) {var sc=document.createElement('script');sc.onload = function() {sc.onload = null;sc.onreadystatechange = null;cb.call(this);};sc.onreadystatechange = function(){if(/^(complete|loaded)$/.test(this.readyState) === true){sc.onreadystatechange = null;sc.onload();}};sc.src=s;if (document.head) {document.head.appendChild(sc);} else {document.getElementsByTagName('head')[0].appendChild(sc);}}; var options={path:_p};_i(_p+'HTMLCS.js',function(){HTMLCSAuditor.run('WCAG2AA',null,options);});
  },
  
  callAfterInterval: function(){
    setTimeout("accessibilityReport.showAccessibilityResults()",2000)
  },

  showAccessibilityResults: function() {    
    var arrList = document.querySelectorAll('.HTMLCS-tile-text');
    var styleNode = document.getElementById("jsAddedStyle");
    if(arrList[0]){
      if(parseInt(arrList[0].childNodes[0].innerHTML,10)>0){        
        if(styleNode.parentNode){
          styleNode.parentNode.removeChild(styleNode);
        }        
      }
    }else{
      setTimeout("accessibilityReport.showAccessibilityResults()",1000);
  }
  } 
  
};

accessibilityReport.hideAccessibilityResults();
accessibilityReport.runHtmlCodeSniffer();
accessibilityReport.callAfterInterval();
