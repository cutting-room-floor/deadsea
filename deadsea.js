(function(context) {
    var deadsea = {};

    function isFamily(parent, child) {
        if (parent === child) return true;
         var node = child.parentNode;
         while (node !== null) {
             if (node === parent) {
                 return true;
             } else {
                 node = node.parentNode;
             }
         }
         return false;
    }

    deadsea.blockScrollInto = function(el) {
        var locked = true;
        // This is not compatible with IE.
        if (!window.addEventListener) return this;

        function handleMouseWheel(e) {
            if (!isFamily(el, e.target)) {
                locked = true;
            } else if (locked) {
                e.stopPropagation();
            }
        }

        window.addEventListener('mousewheel', handleMouseWheel, true);
        window.addEventListener('DOMMouseScroll', handleMouseWheel, true);

        el.addEventListener('mousemove', function mousemove(e) {
            locked = false;
        }, false);

        return this;
    };

    this.deadsea = deadsea;
})(this);
