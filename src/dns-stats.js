const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsstats = {};
  domains.forEach((domain) => {
    domain
      .split(".")
      .reverse()
      .reduce((acc, d) => {
        const dnsstat = [acc, d].join(".");
        dnsstats[dnsstat] = dnsstats[dnsstat] ? dnsstats[dnsstat] + 1 : 1;
        return dnsstat;
      }, "");
  });
  return dnsstats;
}

module.exports = {
  getDNSStats,
};
