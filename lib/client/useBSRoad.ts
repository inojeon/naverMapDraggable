import useRoadAd from "./useRoadAd";

export default function useBSRoad() {
  const { ok: roadDataOk, data: roadData } = useRoadAd();

  console.log(roadData);
}
