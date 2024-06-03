
// Load More 


// This ensures that the code inside the function runs after the document has been completely loaded.
$(document).ready(function(){
    // Number of items to show initially
    var itemToShow = 4;
    // Number of items to load on each "Load More" click
    var itemsAdd = 8;
    // Cache jQuery object for better performance. Assumes that your cards are within an element with class "cards-collection".
    var $content = $(".wrist-collection");
    // Cache jQuery object for the "Load More" button. Assumes that your button has an id "load-more".
    var $loadMoreBtn = $("#load-more-wrist");
    // Cache jQuery object for the child paragraphs of the "cards-collection" element. Adjust this selector based on your actual card structure.

    var $items = $content.children("div");

      // Hide items beyond the initially specified count.
    $items.slice(itemToShow).hide();

    // Attach a click event handler to the "Load More" button.

    $loadMoreBtn.on("click", function(){
        // Select all currently hidden items.

        var $hiddenItems = $items.filter(":hidden");

        // Hide the "Load More" button if there are no more hidden items.
        if ($hiddenItems.length < itemsAdd){
            $loadMoreBtn.hide()
        }

         // Show the next batch of items.
        $hiddenItems.slice(0,itemsAdd).show();
    });
});



// for wallclock


// This ensures that the code inside the function runs after the document has been completely loaded.
$(document).ready(function(){
    // Number of items to show initially
    var itemToShow = 4;
    // Number of items to load on each "Load More" click
    var itemsAdd = 8;
    // Cache jQuery object for better performance. Assumes that your cards are within an element with class "cards-collection".
    var $content = $(".wall-collection");
    // Cache jQuery object for the "Load More" button. Assumes that your button has an id "load-more".
    var $loadMoreBtn = $("#load-more-wall");
    // Cache jQuery object for the child paragraphs of the "cards-collection" element. Adjust this selector based on your actual card structure.

    var $items = $content.children("div");

      // Hide items beyond the initially specified count.
    $items.slice(itemToShow).hide();

    // Attach a click event handler to the "Load More" button.

    $loadMoreBtn.on("click", function(){
        // Select all currently hidden items.

        var $hiddenItems = $items.filter(":hidden");

        // Hide the "Load More" button if there are no more hidden items.
        if ($hiddenItems.length < itemsAdd){
            $loadMoreBtn.hide()
        }

         // Show the next batch of items.
        $hiddenItems.slice(0,itemsAdd).show();
    });
});



//  filter on the basis of price

$(document).ready(function(){
  $(".wall-filter").on("click", function(event){
    var buttonPressed = $(this).html();

    if(buttonPressed === "Less than 20k"){
      $(".wall-20k-30k").hide()
      $(".wall-30k-70k").hide()
      $(".wall-Above-70k").hide()
      $(".wall-Less-than-20k").show()
    }
    else if(buttonPressed === "20k-30k"){
      $(".wall-20k-30k").show()
      $(".wall-30k-70k").hide()
      $(".wall-Above-70k").hide()
      $(".wall-Less-than-20k").hide()
    }
    else if(buttonPressed === "30k-70k"){
      $(".wall-20k-30k").hide()
      $(".wall-30k-70k").show()
      $(".wall-Above-70k").hide()
      $(".wall-Less-than-20k").hide()
    }
    else if(buttonPressed === "Above 70k"){
      $(".wall-20k-30k").hide()
      $(".wall-30k-70k").hide()
      $(".wall-Above-70k").show()
      $(".wall-Less-than-20k").hide()
    }
  })
})


// Wrist clock filter
$(document).ready(function(){
  $(".wrist-filter").on("click", function(event){
    var buttonPressed = $(this).html();

    if(buttonPressed === "Less than 20k"){
      $(".wrist-20k-30k").hide()
      $(".wrist-30k-70k").hide()
      $(".wrist-Above-70k").hide()
      $(".wrist-Less-than-20k").show()
    }
    else if(buttonPressed === "20k-30k"){
      $(".wrist-20k-30k").show()
      $(".wrist-30k-70k").hide()
      $(".wrist-Above-70k").hide()
      $(".wrist-Less-than-20k").hide()
    }
    else if(buttonPressed === "30k-70k"){
      $(".wrist-20k-30k").hide()
      $(".wrist-30k-70k").show()
      $(".wrist-Above-70k").hide()
      $(".wrist-Less-than-20k").hide()
    }
    else if(buttonPressed === "Above 70k"){
      $(".wrist-20k-30k").hide()
      $(".wrist-30k-70k").hide()
      $(".wrist-Above-70k").show()
      $(".wrist-Less-than-20k").hide()
    }
  })
})


// dark mode button

$(document).ready(function(){
  $(".theme_icon").on("click", function(){
    $(".theme_icon").toggleClass("fa-sun")
    $(".theme_icon").toggleClass("fa-moon")
    let current_theme = $("html").attr("data-theme");

    if(current_theme == "dark"){
      $("html").attr("data-theme", "light");
    }
    else if(current_theme == "light"){
      $("html").attr("data-theme", "dark");
    }
  })
})