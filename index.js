import _eval from 'eval'

export default function(source) {
  const result = _eval(source)

  const json = JSON.stringify(result)
  return `export default ${json}`
}

