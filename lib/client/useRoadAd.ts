import useSWR from "swr";

interface ImspResponse {
  data: {
    coordinates: number[][];
    zoom: number;
  };
}

export default function useRoadAd() {
  const { data, error } = useSWR(
    typeof window === "undefined"
      ? null
      : "http://bluesignal.iptime.org:48080/v2/road/road-ad?category=0&type=0"
  );

  if (data) {
    return {
      ok: true,
      data,
    };
  } else {
    return { ok: false, error };
  }
}
