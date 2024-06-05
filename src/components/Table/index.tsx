import { DisplayWorkingTime } from "@/app/type";
import TableRow from "../TableRow";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { query } from "@/services/queryWorking";

const Table = () => {
  const [dataSource, setDataSource] = useState<DisplayWorkingTime[]>([]);

  const [limit, setLimit] = useState<number>(10);
  const [latest, setLatest] = useState<number>(0);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | false>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      await query(latest, limit)
        .then((res) => {
          if (Array.isArray(res.data)) {
            const resData = res.data;
            const firstRes = resData[0];
            if (!firstRes) {
              throw new Error("No data");
            }
            setDataSource((prev) => {
              const tempArr = [...prev];
              const current = tempArr[tempArr.length - 1];
              if (!current || current?.id < firstRes.id) {
                const newArr = [...tempArr, ...resData];
                setLatest(resData[resData.length - 1].id);
                return newArr;
              }

              return tempArr;
            });
          }
        })
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => setLoading(false));
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  };

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage: !error,
    onLoadMore: fetchData,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });

  if (loading) {
    return (
      <div className="d-block w-full h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div className="overflow-scroll h-[80vh]" ref={rootRef}>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Days</th>
            <th>Meeting Days</th>
            <th>Day Without Meeting</th>
          </tr>
        </thead>

        <tbody>
          {dataSource?.map((working) => (
            <TableRow working={working} key={working.id} />
          ))}
          {!error ? (
            <div ref={sentryRef}>
              <Loading />
            </div>
          ) : (
            <div className="text-red-500 text-center w-full">{error}</div>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Days</th>
            <th>Meeting Days</th>
            <th>Day Without Meeting</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
