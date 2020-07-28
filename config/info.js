exports.PORT = process.env.PORT || 8080

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:3000'

exports.CLIENT_ORIGIN_NODE = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN_NODE
  : 'http://localhost:5000'

exports.ADMIN = 'rap.admin@mphasis.com'
exports.ADMIN_PASS = 'admin123'

