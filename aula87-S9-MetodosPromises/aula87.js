function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - mim) + mim)
}

function esperaAi(msg, tempo)
  return new Promise((resolve, reject) => {
    if( typeof msg !== 'string') reject(false)
    
    setTimeout(() => {
      resolve(msg)
    }, tempo) 
})

// Promise.all - Promise.race - Promise.resolve - Promise.reject