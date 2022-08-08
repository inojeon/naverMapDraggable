import useSWR from "swr";

interface ImspResponse {
  data: {
    coordinates: number[][];
    zoom: number;
  };
}
interface useRoadPopupInfoProps {
  uid: number;
}

export default function useRoadPopupInfo({ uid }: useRoadPopupInfoProps) {
  // const { data, error } = useSWR(
  //   `http://bluesignal.iptime.org:48080/v2/road/ri/${uid}`
  // );
  const { data, error } = useSWR(
    typeof window === "undefined"
      ? null
      : `http://bluesignal.iptime.org:48080/v2/road/ri/${uid}`
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
