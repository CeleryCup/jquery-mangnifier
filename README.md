# jquery-mangnifier

A jQuery magnifier plugin similar to AMAZON product view

###Usage:

prepare html file

````html
<div id="thumbnailsPane">
	   <img class="smallImg" src="thumbnails/3body.jpg"/>
	   <img class="smallImg" src="thumbnails/lake.jpg"/>
	   <img class="smallImg" src="thumbnails/jump2.jpg"/>
	   <img class="smallImg" src="thumbnails/jump.jpg"/>
	   <img class="smallImg" src="thumbnails/headshot.jpg"/>
	   <img class="smallImg" src="thumbnails/portrait.jpg"/>
 </div>
````

and Initialize them

````javascript
$(document).ready(function(){
        $("#thumbnailsPane img").easyzoom({
          xzoom: @Number, // the width for zoomed area, default is 350px
          yzoom: @Number, // the height for zoomed area, default is 350px
          offset: @Number, // the offset between thumbnail and zoomed area
        });
      });
````
