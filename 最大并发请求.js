function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = fetchFunc(url)
      .then((res) => {
        results.push(res);
      })
      .catch((e) => {
        results.push(e);
      })
      .finally(() => {
        const len = results.length;
        if (len < urlCount) {
          // 完成请求就出队
          requestsQueue.shift();
          handleRequest(urls[++i]);
        } else if (len === urlCount) {
          "function" === typeof callback && callback(results);
        }
      });
    requestsQueue.push(req);
    // 只要满足就继续请求
    if (requestsQueue.length <= max) {
      handleRequest(urls[++i]);
    }
  };
  handleRequest(urls[i]);
}
