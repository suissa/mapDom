(function (root) {
    var property,
        len,
        i,
        arg,
        msg,
        hasOnw,
        obj;

    MapDom.prototype.javascript = mapJavascript;
    MapDom.prototype.isNullorEmpty = isNullorEmpty;

    function MapDom() {

        arg = arguments;
        for (var name in arg) {
            property = arg[name];

            if (isArray(property)) {
                resetWhile(property);

                while (i < len) {

                    this[property[i]] = property[i];

                    increase();
                };
            } else {
                this[property] = property;
            }
        }
    };
    function mapJavascript(param) {
        hasOnw = Object.prototype.hasOwnProperty;
        if (param !== undefined) {
            if (isArray(param)) {
                resetWhile(param);
                while (i < len) {
                    if (checkProperty(this, param[i])) {
                        this[param[i]] = document.getElementById(param[i]);
                    }
                    increase();
                }
            }
            if (checkProperty(this, param)) {
                this[param] = document.getElementById(param);
            }
        } else {
            for (var name in this) {
                if (checkProperty(this, name)) {
                    this[name] = document.getElementById(name);
                }
            };
        }
    };

    function isNullorEmpty() {

        msg = [];
        hasOnw = Object.prototype.hasOwnProperty;
        for (name in this) {

            if (checkProperty(this, name)) {

                property = this[name];

                if (isArray(property)) {

                    if (!validate(property.join(","))) {

                        msg.push(name);
                    }

                } else if (!validate(property)) {

                    msg.push(name);
                }

            }

            return msg;
        }
    }
    function resetWhile(objeto) {
        len = objeto.length;
        i = 0;
        obj = objeto;
    };

    function increase() {
        i += 1;
    };

    function decrease() {
        i -= 1;
    };

    function validate(param) {
        if (typeof param === "string") {
            param = param.trim();
        }
        switch (param) {
            case null:
            case "undefined":
            case "":
                return false;

            default:
                return true;
        }
    }
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    function checkProperty(obj, param) {
        return hasOnw.call(obj, param);
    }

    root.MapDom = MapDom;

})(this)