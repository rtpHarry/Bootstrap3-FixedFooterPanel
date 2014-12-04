/*
    Bootstrap3-FixedFooterPanel v1.0
    Copyright (C) 2014 Matthew Harris aka rtpHarry

    This is a sample snippet that shows how you can set up a fixed footer 
	notification panel which will contain its content with a scrollbar. It
	slides up when activated and slides down when closed.

    https://github.com/rtpHarry/Bootstrap3-FixedFooterPanel

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
(function(){
  function getNumberFromPx(cssString) {
    return parseFloat(cssString.replace("px", ""));
  }
    
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
    });
    
    // demo - trigger panel via button
    $("#openErrorList").click(function () {
      $("#footer-panel").collapse('toggle');
    });
    
  });  
})();