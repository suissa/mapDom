(function (root) {
  var property = null;
  var len = 0;
  var i = 0;
  var arg = null;
  var msg = null;
  var hasOnw = Object.prototype.hasOwnProperty;
  var obj = {};

  const isArray = (obj) => Object.prototype.toString.call(obj) === '[object Array]';
  const checkProperty = (obj, param) => hasOnw.call(obj, param);
  const validate = (param) => (typeof param === "string" 
                                && (param.trim() !== "" ||
                                    param.trim() !== "undefined"))  

  MapDom.prototype.javascript = mapJavascript;
  MapDom.prototype.isNullorEmpty = isNullorEmpty;

  function MapDom () {
    arg = arguments;
    for (var name in arg) {
      property = arg[name];

      (isArray(arg[name]))
        ? arg[name].forEach((el, i) => this[el] = el)
        : this[property] = arg[name]
    }
  };

  function mapJavascript (param) {
    if (param) {
      if (isArray(param)) {
        i = 0;
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
    for (name in this) {
      (checkProperty(this, name)) 
        ? (isArray(this[name]))
          ? (!validate(this[name].join(","))) 
            ? msg.push(name)
            : null
          : null
        : (!validate(property))
          ? msg.push(name)
          : null
      
      return msg;
    }
  }

  root.MapDom = MapDom;

})(this)
