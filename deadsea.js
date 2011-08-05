(function(context) {
    var deadsea = {};

    deadsea.blockScrollInto = function(el) {
        var locked = true;
        function stopEvent(e) { e.stopPropagation(); }
        window.addEventListener('mousewheel', function(e) {
            if (e.target !== el) locked = true;
            if (e.target === el && locked) stopEvent(e);
            el.addEventListener('mousemove', function mousemove(e) {
                locked = false;
                el.removeEventListener('mousewheel', stopEvent);
            }, false);
        }, true);
        return this;
    };

    this.deadsea = deadsea;
})(this);
