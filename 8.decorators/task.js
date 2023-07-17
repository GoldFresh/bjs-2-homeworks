//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = md5(args);

    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
        return "Из кэша: " + objectInCache.value;
    } else {
        const value = func(...args);
        cache.push({hash, value});

        if (cache.length > 5) {
        cache.shift();
        }
        return "Вычисляем: " + value;
    }
  }

  return wrapper;
}
 
//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
  
    function wrapper(...args) {
      wrapper.allCount++;
  
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
  
      if (!timeoutId) {
          wrapper.count++;
          func(args);
      }
  
      timeoutId = setTimeout(() => {
          wrapper.count++;
          func.apply(this, args);
      }, delay);
    }
  
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    return wrapper;
}
