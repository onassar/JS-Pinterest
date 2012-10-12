
/**
 * Pinterest
 * 
 * Extends the Pinterest-button-code to allow re-running (is that a word?) it
 * again.
 * 
 * Useful if you have ajax content being loaded in, or are creating Pinterest
 * buttons dynamically, and want to make them fully-functional.
 * 
 * @author Oliver Nassar <onassar@gmail.com>
 * @see    <http://github.com/onassar/JS-Pinterest>
 * @see    <http://web.onassar.com/blog/2012/10/12/github-project-js-pinterest/>
 * @see    <http://pinterest.com/about/goodies/>
 * @see    <http://assets.pinterest.com/js/pinit.js>
 * @note   I didn't make any actual changes to the Pinterest code, just cleaned
 *         it up a bit and commented it for my own sake of :)
 */
var Pinterest = (function() {

    /**
     * _args
     * 
     * @private
     * @var     Array
     */
    var _args = [
        document,
        window,
        {
            att: {
                layout: "count-layout",
                count: "always-show-count"
            },
            pinit: "http://pinit-cdn.pinterest.com/pinit.html",
            pinit_secure: "https://assets.pinterest.com/pinit.html",
            button: "//pinterest.com/pin/create/button/?",
            vars: {
                req: ["url", "media"],
                opt: ["title", "description"]
            },
            layout: {
                none: {
                    width: 43,
                    height: 20
                },
                vertical: {
                    width: 43,
                    height: 58
                },
                horizontal: {
                    width: 90,
                    height: 20
                }
            }
        }
    ];

    /**
     * _core
     * 
     * @private
     * @param   m
     * @param   q
     * @param   c
     * @return  void
     */
    var _core = (function(m, q, c) {
        var s = function(h) {

                // 
                var d = c.pinit,
                    n = "?",
                    a, i, f, b;
                f = [];
                b = [];

                // 
                var j = {},
                    g = m.createElement("IFRAME"),
                    r = h.getAttribute(c.att.count) || false,
                    o = h.getAttribute(c.att.layout) || "horizontal";

                // 
                if (q.location.protocol === "https:") d = c.pinit_secure;
                f = h.href.split("?")[1].split("#")[0].split("&");
                a = 0;

                // 
                for (i = f.length; a < i; a += 1) {
                    b = f[a].split("=");
                    j[b[0]] = b[1]
                }

                // 
                a = f = 0;
                for (i = c.vars.req.length; a < i; a += 1) {
                    b = c.vars.req[a];
                    if (j[b]) {
                        d = d + n + b + "=" + j[b];
                        n = "&"
                    }
                    f += 1
                }

                // 
                if (j.media && j.media.indexOf("http") !== 0) f = 0;

                // 
                if (f === i) {
                    a = 0;

                    // 
                    for (i = c.vars.opt.length; a < i; a += 1) {
                        b = c.vars.opt[a];
                        if (j[b]) d = d + n + b + "=" + j[b]
                    }

                    // 
                    d = d + "&layout=" + o;
                    d = d + "&ref=" + encodeURIComponent(m.URL);

                    // 
                    if (r !== false) d += "&count=1";

                    // 
                    g.setAttribute("src", d);
                    g.setAttribute("scrolling", "no");
                    g.allowTransparency = true;
                    g.frameBorder = 0;
                    g.style.border = "none";
                    g.style.width = c.layout[o].width + "px";
                    g.style.height = c.layout[o].height + "px";
                    h.parentNode.replaceChild(g, h)
                }
                else {
                    h.parentNode.removeChild(h)
                }
            },

            // 
            p = m.getElementsByTagName("A"),
            l, e, k = [];

        /**
         * Pushes all anchors into the <k> array, presumably since
         * <getElementsByTagName> doesn't return an actual array, but just that
         * weird Elements object type, or whatever it is
         */
        e = 0;
        for (l = p.length; e < l; e += 1) {
            k.push(p[e]);
        }

        /**
         * Loops through all the anchors, and runs the replacement function <s>
         * against it if the <href> value contains the string
         * <//pinterest.com/pin/create/button/?>
         * 
         * @note At first I thought I would need to do a check against a button
         *       to see if it'd already been transformed, but it seems this
         *       library removes the node from the DOM (see line #135), so
         *       we're good.
         */
        e = 0;
        for (l = k.length; e < l; e += 1) {
            k[e].href
                && k[e].href.indexOf(c.button) !== -1
                && s(k[e]);
        }
    });

    // return singelton 
    return {
        init: function() {
            _core.apply(window, _args);
        }
    }
})();

// run (to mirror existing Pinterest js functionality)
Pinterest.init();

