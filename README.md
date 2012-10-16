JS-Pinterest
============

Extends the Pinterest-button-code to allow re-running (is that a word?) it again.  
Useful if you have ajax content being loaded in, or are creating Pinterest buttons dynamically, and want to make them fully-functional.

### Quick Example

    <script src="https://raw.github.com/onassar/JS-Pinterest/master/Pinterest.js" type="text/javascript"></script>
    <!-- Pinterest embed buttons, defined at http://pinterest.com/about/goodies/, are turned into smart buttons -->

    <!-- Now, let's say you load in some data through Ajax that contains Pinterest embed code/buttons -->
    <script type="text/javascript">
        Pinterest.init();
    </script>
    <!-- Above code will run the Pinterest logic again to turn those buttons into the "magic"/"smart" ones -->

### More info
I wrote a write-up on the small extension here:  
<http://web.onassar.com/blog/2012/10/16/github-project-js-pinterest/>