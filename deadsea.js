(function(context) {
    var deadsea = {};

    deadsea.blockScrollInto = function(el) {
        // This is not compatible with IE.
        if (!window.addEventListener) return this;

        function isFamily(parent, child) {
            if (parent === child) return true;
             var node = child.parentNode;
             while (node != null) {
                 if (node === parent) {
                     return true;
                 } else {
                     node = node.parentNode;
                 }
             }
             return false;
        }

        var locked = true;

        window.addEventListener('mousewheel', function(e) {
            var x = isFamily(el, e.target);
            if (!x) {
                locked = true;
            } else if (x && locked) {
                e.stopPropagation();
            }
        }, true);

        el.addEventListener('mousemove', function mousemove(e) {
            locked = false;
        }, false);

        return this;
    };

    this.deadsea = deadsea;
})(this);
