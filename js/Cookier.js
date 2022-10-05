class Cookier {
  constructor() {}

  /**
   *
   * @param {string} key
   * @param {string} value
   * @param {Date} date
   * @param {number} hour
   * @param {string} path
   */

  setCookie(key, value, date, hour = 1, path = "/") {
    let ms = 3600 * 1000 * hour;

    let msDate = date.setTime(date.getTime() + ms);

    const expireDate = new Date(msDate).toUTCString();
    document.cookie = `${key}=${value}; expires=${expireDate}; path=${path}`;
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

  getCookieValue(key) {
    if (key === undefined) {
      return Object.values(this.getCookie());
    }
    return this.getCookie()[key];
  }
}

export default Cookier;
/*
${this.key}=${this.value}; expires=${this.date}; path=${this.path}

      //Mon, 03 Oct 2022 16:12:44 GMT
      let date = new Date().toUTCString();
      document.cookie =
        "username=John Smith; expires=Mon, 03 Oct 2022 16:10:44 GMT; path=/";
      //   document.cookie =
      //     "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      //   console.log(document.cookie);



      <script>

      let data = "name=Win-Min-Aung; ok=me";
      data = data.split("; ");
      console.log(data);
      const cd = new Object();
      data.forEach((d) => {
        let c = d.split("=");
        cd[c[0]] = c[1];
      });
      console.log(cd);
    </script>

  */
