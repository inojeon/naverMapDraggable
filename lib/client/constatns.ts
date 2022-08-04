interface ChartDataType {
  title: string;
  percent: number;
}

interface RoadInfoListType {
  name: string;
  chartType: string;
  datas: ChartDataType[];
}

interface InfoListType {
  title: string;
  type: RoadInfoListType[];
}

export const infoList: InfoListType[] = [
  {
    title: "도로정보",
    type: [
      {
        name: "경사도",
        chartType: "donut",
        datas: [
          {
            title: "0~2",
            percent: 42.3,
          },
          {
            title: "3~5",
            percent: 37.0,
          },
          {
            title: "5+",
            percent: 17.8,
          },
        ],
      },
      {
        name: "보행로",
        chartType: "donut",
        datas: [
          {
            title: "보행로a",
            percent: 42.3,
          },
          {
            title: "보행로b",
            percent: 37.0,
          },
          {
            title: "보행로c",
            percent: 17.8,
          },
        ],
      },
      {
        name: "안전",
        chartType: "donut",
        datas: [
          {
            title: "안전a",
            percent: 42.3,
          },
          {
            title: "안전b",
            percent: 37.0,
          },
          {
            title: "안전c",
            percent: 17.8,
          },
        ],
      },
      {
        name: "환경",
        chartType: "donut",
        datas: [
          {
            title: "환경a",
            percent: 42.3,
          },
          {
            title: "환경b",
            percent: 37.0,
          },
          {
            title: "환경c",
            percent: 17.8,
          },
        ],
      },
    ],
  },
];
