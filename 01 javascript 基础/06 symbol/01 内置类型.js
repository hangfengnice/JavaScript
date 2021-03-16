class PrimitiveString {
  static [Stymbol.hasInstance] (x) {
    return typeof x == 'string'
  }
}

console.log('helo' instanceof PrimitiveString);