class Cookier {
  /**
   *
   * @param {string} key
   * @param {string} value
   * @param {Date} date
   * @param {number} hour
   * @param {string} path
   */

  setCookie(key, value, date, hour, path = "/") {
    let ms = 3600 * 1000 * hour;
    const msDate = date.setTime(date.getTime() + ms);
    const expireDate = new Date(msDate).toUTCString();
    document.cookie = `${key}=${value}; expires=${expireDate}; path=${path}`;
  }

  deleteCookie(key, path) {
    if (path === null || path === undefined || path === "") path = "/";
    const expireDate = new Date(0).toUTCString();
    document.cookie = `${key}=; expires=${expireDate}; path=${path}`;
    return expireDate;
  }

  getCookie() {
    let data = document.cookie.split("; ");
    const cookieObj = new Object();
    data.forEach((d) => {
      let kv = d.split("=");
      cookieObj[kv[0]] = kv[1];
    });

    return cookieObj;
  }

  getCookieKey() {
    return Object.keys(this.getCookie());
  }

  hasCookieKey(key) {
    const keyAry = this.getCookieKey();
    const isTrue = keyAry.includes(key);
    return isTrue;
  }

  getCookieValue(key) {
    if (key === undefined) {
      return Object.values(this.getCookie());
    }
    return this.getCookie()[key];
  }
}

export default Cookier;
