// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// My solution:
function domainName(url) {
    if (url.startsWith('www.') || url.startsWith('http://www.') || url.startsWith('https://www.')) {
      const domain = url.split('www.')[1] || url.split('/')[2]
      const parts = domain.split('.')
      return parts.length > 1 ? parts[0] : domain
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
      const domain = url.split('/')[2]
      const parts = domain.split('.')
      return parts.length > 1 ? parts[0] : domain
    } else {
      return url.split('.')[0]
    }
  }
  