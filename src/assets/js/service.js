
  $( function() {
    var icons = {
      header: "ico__arrow--down24",
      activeHeader: "ico__arrow--up24"
    };
    $( ".accordion" ).accordion({
      icons: icons,
      collapsible: true,
      animate: 0
    });
  } );
