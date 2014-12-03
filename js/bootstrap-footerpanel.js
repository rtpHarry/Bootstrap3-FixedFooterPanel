(function(){
  function getNumberFromPx(cssString) {
    return parseFloat(cssString.replace("px", ""));
  };  
    
  function setupPanelHeight() {
    var $footerPanel = $("#footer-panel");
    $footerPanel.find(".panel-body").css("max-height", function() {
      var panelHeight = getNumberFromPx($footerPanel.css("max-height")),
          panelHeadingHeight = getNumberFromPx($footerPanel.find(".panel-heading").css("height"));
      return panelHeight - panelHeadingHeight;
    });
  }
  
  $(document).ready(function(){    
    $('#footer-panel').on('shown.bs.collapse', function () {
      setupPanelHeight();
    })
    
    // demo - trigger panel via button
    $("#openErrorList").click(function () {
      $("#footer-panel").collapse('toggle');
    });
    
  });  
})();