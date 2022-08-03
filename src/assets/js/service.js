
  $( function() {
    var icons = {
      header: "ico__arrow--down24",
      activeHeader: "ico__arrow--up24"
    };
    $( ".accordion" ).accordion({
      header: ".accordion__head",
      icons: icons,
      collapsible: true,
      animate: 0
    });
    $( ".list .accordion" ).accordion({
      icons: false,
    });
  } );
