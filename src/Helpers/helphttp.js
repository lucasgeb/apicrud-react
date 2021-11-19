//Se genera un servicio que tenga los 4 métodos para implementar FETCH y poder realizar peticiones HTTP

export const helpHttp = () => {
<<<<<<< HEAD
  const customFetch = (endpoint, options) => {
    
    //En esta constante se indica que los datos van a estar en formato JSON
    const defaultHeader = {
      accept: "application/json",
=======
    const customFetch = (endpoint, options) => {
      
      //Indicamos que los datos van a estar en formato JSON
      const defaultHeader = {
        accept: "application/json",
      };
      
      //Para abortar la petición en caso que no funcione el servidor
      const controller = new AbortController();

      //la propiedad .signal establece "escuchadores de eventos"
      options.signal = controller.signal;
      
      //Se define GET como método predeterminado
      options.method = options.method || "GET";
      
      //Mezclo los headers que vengan con la respuesta 
      //con los header que se declararon como default en defaultHeader
      options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;
  
      //Se convierte el contenido de "body" a cadena de texto
      //En caso de que el no haya body se toma como falso y se elimina
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
      
      //Se define 3 segundos como tiempo de espera
      //So pasado ese tiempo no hay respuesta, se ejecuta el método abort
      setTimeout(() => controller.abort(), 3000);
      

      //Retorna el aviso de que ha ocurrido un error en caso que la promesa sea rechazada
  
      return fetch(endpoint, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText:res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
>>>>>>> 3cd0cc1851716ba08827e46580e263a73a98dd41
    };
    
    //Para abortar la petición en caso que no funcione el servidor
    const controller = new AbortController();

    //la propiedad .signal establece "escuchadores de eventos"
    options.signal = controller.signal;
    
    //Se define GET como método predeterminado
    options.method = options.method || "GET";
    
    //Mezclo los headers que vengan con la respuesta 
    //con los header que se declararon como default en defaultHeader
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    //Se convierte el contenido de "body" a cadena de texto
    //En caso de que el no haya body se toma como falso y se elimina
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    
    //Se define 3 segundos como tiempo de espera
    //So pasado ese tiempo no hay respuesta, se ejecuta el método abort
    setTimeout(() => controller.abort(), 3000);
    

    //Retorna el aviso de que ha ocurrido un error en caso que la promesa sea rechazada

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText:res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  //Se declaran los 4 métodos GET POST PUT DELETE

  //metodo get recibe una url y el objeto options 
  //(puede recibir o no, por eso en caso de que no llegue el objeto options lo declaramos vacio)
  
<<<<<<< HEAD
  const get = (url, options = {}) => customFetch(url, options);


  //Método POST necesita una url y el objeto options
  //En caso de llegar options vacío, con la propiedad .method le asignamos el método POST
  //retorna customFetch con la url y grupo de opciones correspondiente
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  //Método PUT necesita una url y el objeto options
  //En caso de llegar options vacío, con la propiedad .method le asignamos el método PUT
  //retorna customFetch con la url y grupo de opciones correspondiente
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };


  //Método DELETE necesita una url y el objeto options
  //En caso de llegar options vacío, con la propiedad .method le asignamos el método DELETE
  //retorna customFetch con la url y grupo de opciones correspondiente
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
=======
    //Se declaran los 4 métodos GET POST PUT DELETE

    //metodo get recibe una url y el objeto options 
    //(puede recibir o no, por eso en caso de que no llegue el objeto options lo declaramos vacio)
    
    const get = (url, options = {}) => customFetch(url, options);
  
  
    //Método POST necesita una url y el objeto options
    //En caso de llegar options vacío, con la propiedad .method le asignamos el método POST
    //retorna customFetch con la url y grupo de opciones correspondiente
    const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    //Método PUT necesita una url y el objeto options
    //En caso de llegar options vacío, con la propiedad .method le asignamos el método PUT
    //retorna customFetch con la url y grupo de opciones correspondiente
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
  
    //Método DELETE necesita una url y el objeto options
    //En caso de llegar options vacío, con la propiedad .method le asignamos el método DELETE
    //retorna customFetch con la url y grupo de opciones correspondiente
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };
>>>>>>> 3cd0cc1851716ba08827e46580e263a73a98dd41
