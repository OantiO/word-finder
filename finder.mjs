function finder() {
    // put your words in this arry (lost)
    const lost = ["c","a"]
    const words = ["a", "a", "b", "c", "d", "e", "e", "f", "g", "g", "h", "i", "i", "j", "k", "l", "m", "n", "o", "o", "p", "q", "q", "r"]
  
    for (let s = 0; s < lost.length; s++) {
      for (let r = 0; r < words.length; r++) {
        if (words[r] == lost[s]) {
          console.log(words[r])
          console.log(r)
        }
      }
    }
  }
  finder()