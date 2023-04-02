function reuqestValidator(httpObject) {

    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/g;
    const validversion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&\'\"]+$/g;

    if(!(httpObject.hasOwnProperty('method') && validMethod.includes(httpObject.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!(httpObject.hasOwnProperty('uri') && (httpObject.uri.match(uriPattern)))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!(httpObject.hasOwnProperty('version') && validversion.includes(httpObject.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!(httpObject.hasOwnProperty('message') && (httpObject.message.match(messagePattern) || httpObject.message === ''))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObject;
}
reuqestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  )