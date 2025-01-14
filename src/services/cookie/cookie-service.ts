class CookieService {
  private senetizeInput;

  set(name: string, value: any, options?: CookieOptions) {
    const { secure, path = '/', expires = 365 } = options || {};
    const isPrimitive = this.checkPrimitive(value);
    const updatedValue = isPrimitive ? value : JSON.stringify(value);

    const cookie = `${name}=${updatedValue};${secure ? 'secure' : ''};path=${path};expires=${this.setExpireDate(
      expires
    )}`;

    if (typeof document !== 'undefined') document.cookie = cookie;
  }

  setMultiple(cookieList: MultipleCookie) {
    cookieList.map((cookie) => {
      const { name, value, options } = cookie || {};
      this.set(name, value, options);
    });
  }

  get(name: string) {
    let cookies = '';
    if (typeof document !== 'undefined') cookies = document.cookie;
    const targetCookie = cookies.match(`(^|;) ?${name}=([^;]*)(;|$)`)?.[2];
    const isJson = this.checkJSON(targetCookie);
    return isJson ? JSON.parse(targetCookie) : targetCookie;
  }

  getMultiple(names: string[]) {
    let cookies = {};
    if (typeof document !== 'undefined') cookies = this.getAll();
    let matchCookies = {};
    names.filter((name) => (matchCookies[name] = cookies[name]));
    return matchCookies;
  }

  getAll() {
    let formattedCookies = [];
    let allCookies = {};
    if (typeof document !== 'undefined') formattedCookies = document.cookie.split(';');

    formattedCookies?.map((cookie) => {
      const cookieName = cookie.split('=')[0].trim();
      allCookies[cookieName] = this.get(cookieName);
    });

    return allCookies;
  }

  remove(name: string) {
    if (typeof document !== 'undefined') document.cookie = name + '=; Max-Age=-99999999;';
  }

  removeMultiple(names: string[]) {
    names.map((name) => this.remove(name));
  }

  removeAll() {
    let allCookies = [];
    if (typeof document !== 'undefined') allCookies = document.cookie.split(';');
    return allCookies.map((cookieItem) => this.remove(cookieItem.split('=')[0]));
  }

  protected checkJSON(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  protected checkPrimitive(value: any): boolean {
    if (value === null) return true;
    return !(typeof value == 'object' || typeof value == 'function');
  }

  protected setExpireDate(expDays: number) {
    const expires = 24 * 60 * 60 * 1000 * expDays;
    let date = new Date();
    date.setTime(date.getTime() + expires);
    return date.toUTCString();
  }
}

export default new CookieService();
