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
        // resetWhile(property);
        // len = property.length;
        var i = 0;
        // obj = property;
        while (i < property.length) {
          this[property[i]] = property[i];
          ++i;
          // increase(i);
        };
      } else {
        this[property] = property;
      }
    }
  };

  function mapJavascript(param) {
    hasOnw = Object.prototype.hasOwnProperty;
    if (param && param !== 0) {
      if (isArray(param)) {
        // resetWhile(param);
        len = objeto.length;
        i = 0;
        // obj = objeto;
        while (i < param.length) {
          if (checkProperty(this, param[i])) {
            this[param[i]] = document.getElementById(param[i]);
          }
          i++;
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

  const resetWhile = (objeto) => {
    len = objeto.length;
    i = 0;
    obj = objeto;
  };

  const increase = (i) => i += 1;

  const decrease = (i) => i -= 1;

  const validate = (param) => (typeof param === "string" 
                                && (param.trim() !== "" ||
                                    param.trim() !== "undefined"))  

  const isArray = (obj) => Object.prototype.toString.call(obj) === '[object Array]';

  const checkProperty = (obj, param) => hasOnw.call(obj, param);

  root.MapDom = MapDom;

})(this)
