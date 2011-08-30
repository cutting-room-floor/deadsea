(function(context) {
    var deadsea = {};

    // From Modest Maps, except with `mode`, because we want to catch
    // events before any frameworks have the chance.
    function addEvent(obj, type, fn, mode) {
        if (obj.attachEvent) {
            obj['e'+type+fn] = fn;
            obj[type+fn] = function(){ obj['e'+type+fn](window.event); };
            obj.attachEvent('on'+type, obj[type+fn]);
        } else {
            obj.addEventListener(type, fn, mode);
            if (type == 'mousewheel') {
                obj.addEventListener('DOMMouseScroll', fn, mode);
            }
        }
    };

    // From Modest Maps, except doesn't kill the event for the browser -
    // only stops propagation.
    function cancelEvent(e) {
        e.cancelBubble = true;
        if (e.stopPropagation) { e.stopPropagation(); }
        return false;
    };

    deadsea.blockScrollInto = function(el) {
        var locked = true;

        addEvent(window, 'mousewheel', function(e) {
            if (e.target !== el) {
                locked = true;
            } else if (e.target === el && locked) {
                cancelEvent(e);
            }
        }, true);

        addEvent(el, 'mousemove', function mousemove(e) {
            locked = false;
        }, false);

        return this;
    };

    this.deadsea = deadsea;
})(this);
