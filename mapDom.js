(function (root) {
    var property,
        len,
        i,
        arg,
        msg,
        obj;

    MapDom.prototype.jquery = mapJquery;
    MapDom.prototype.javascript = mapJavascript;
    MapDom.prototype.isNullorEmpty = isNullorEmpty;    

    function MapDom() {

        arg = arguments;
        for (var name in arg) {
            
            property = arg[name];
            
           if(isArray(property)){
               resetWhile(property);

               while (i < len) {

                   this[property[i]] = property[i];

                   increase();
               };
           }else{
               this[property] = property;
           }
        }
    };
    function mapJquery(param) {
        if (param !== undefined) {
            if (checkProperty.call(this, param)) {
                this[param] = $("#" + param);
            }
            this[param] = $("#" + param);
        } else {
            for (var name in this) {
                if (checkProperty.call(this, name)) {
                    this[name] = $("#" + name);
                }          
            };
        }      
    };
    function mapJavascript(param) {
        if (param !== undefined) {
            if (checkProperty.call(this, param)) {
                this[param] = document.getElementById(param);
            }
        } else {
            for (var name in this) {
                if (checkProperty.call(this,name)) {
                    this[name] = document.getElementById(name);
                }       
            };
        }       
    };

    function isNullorEmpty() {

        msg = [];

        for (name in this) {

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
    };
    function resetWhile(objeto) {
        len = objeto.length;
        i = 0;
        obj = objeto;
    };

    function increase() {
        i++;
    };

    function decrease() {
        i = i - 1;
    };

    function checkProperty(name) {
        switch (name) {
            case "jquery":
            case "javascript":
            case "isNullorEmpty":
                return false;
            default:               
                return this.hasOwnProperty(name);
        }
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

    root.MapDom = MapDom;

})(this)