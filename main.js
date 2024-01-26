$(document).ready(function() {
    $("#fullpage").fullpage({
        anchors: ["firstpage", "secondpage", "thirdpage"],
        menu: "#menu",
        autoScrolling: false,
        // responsiveWidth: 750 
    });
});

// ScroollMagic: init controller
var controller = new ScrollMagic.Controller();

// Tween section 2
var scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})

// animate color and top border in relation to scroll position
.setTween("#bg img", {
    maxWidth: "1200px",
    top: "50%",
    left: "80%",
    opacity: 0.35
}) // the tween durtioon can be amitted and defaults to 1

.addTo(controller)