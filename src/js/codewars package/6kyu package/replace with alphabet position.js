function alphabetPostion(text) {
  return text.toLowerCase().match(/[a-z]/g).map(a => a.charCodeAt() - 96).join(' ')
}
