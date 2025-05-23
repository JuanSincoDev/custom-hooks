import { useEffect, useState } from "react";

const localCache = {

};

const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  });

  useEffect(() => {
    getFetch();
  }, [ url ]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    });
  }

  const getFetch = async () => {

    if ( localCache[url] ) {
      console.log('Usando caché');

      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      });

      return;
    }

    const resp = await fetch( url );

    if (!resp.ok) {
      setState({
        ...state,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        }
      });

      return;
    }

    const data = await resp.json();
    setState({
      ...state,
      data: data,
      isLoading: false,
    });

    localCache[url] = data;
  }
  

  return {
    ...state
  }
}

export default useFetch
