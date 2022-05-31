let str1 = 'aaabb12'
let str2 = 'aaa'
let str3 = 'a'

function Polindrom (s) {
  let start = 0
  let end = 0
  let arr = []
  
  function expandFromCenter(s, L, R) {
    while (L>=0 && R<s.length && s[L]===s[R]) {
      L--
      R++
    }
    return R-L-1
  } 
  
  for (let i = 0; i<s.length; i++) {
    let pol1 = expandFromCenter(s, i, i)
    let pol2 = expandFromCenter(s, i, i+1)
    let pol = Math.max(pol1, pol2)
    
    if (pol > end - start) {
      start = Math.ceil(i-(pol-1)/2)
      end = Math.floor(i+(pol/2))
    }
  }

  let sub = s.substring(start,end+1);
  arr.push(sub)
  if (sub.length !==0 ){
    let sss = s.split(sub)
    sss.forEach(element => {
      if (element.length > 0) arr = arr.concat(Polindrom(element))
    });
  }
  return arr
}

Polindrom(str1)
Polindrom(str2)
Polindrom(str3)