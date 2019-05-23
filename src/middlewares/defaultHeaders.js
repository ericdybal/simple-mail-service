export const responseHeaders = () => {
  return (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
  }
}


