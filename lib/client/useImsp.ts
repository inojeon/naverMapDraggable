import useSWR from "swr";

interface ImspResponse {
  data: {
    coordinates: number[][];
    zoom: number;
  };
}

export default function useImsp() {
  const { data, error } = useSWR<ImspResponse>(
    typeof window === "undefined"
      ? null
      : "http://bluesignal.iptime.org:48080/v2/commons/imsp"
  );

  if (data) {
    return {
      ok: true,
      data: {
        latitude: data?.data?.coordinates[0][0],
        longitude: data?.data?.coordinates[0][1],
        zoom: data?.data?.zoom,
      },
    };
  } else {
    return { ok: false, error };
  }
}
