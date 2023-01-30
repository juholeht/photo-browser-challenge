import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useInfiniteScroll = (fetchData) => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !isFetching && !isEnd) {
      setIsFetching(true);
      fetchData(page)
        .then(data => {
          if (data.length > 0) {
            setItems(prevImages => [...prevImages, ...data]);
            setPage(prevPage => prevPage + 1);
          } else {
            setIsEnd(true);
          }
          setIsFetching(false);
        })
        .catch(error => {
          console.error("Error:", error);
          setIsFetching(false);
        });
    }
  }, [inView, isFetching, isEnd, page, fetchData]);

  return [items, isFetching, ref];
};

export default useInfiniteScroll;