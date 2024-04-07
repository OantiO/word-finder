function finder() {
    // put your words in this arry (lost)
    const lost = ["j","a","o","e"]
    const words = ["a", "a", "b", "c", "a", "e", "e", "f", "g", "g", "h", "i", "i", "j", "k", "l", "m", "n", "o", "o", "p", "q", "q", "r"]
    let sumer =0
    for (let s = 0; s < lost.length; s++) {
      for (let r = 0; r < words.length; r++) {
        if (words[r] == lost[s]) {
          sumer = sumer+1
          if (sumer == 1)
          {
          console.log(words[r])
          }
        }    
      }
      console.log(sumer)
      sumer = 0
    }
  }
  finder()