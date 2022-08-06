interface RoadInfoCheckInputProp {
  title: string;
  count: number;
}

export default function RoadInfoCheckInput({
  title,
  count,
}: RoadInfoCheckInputProp) {
  return (
    <div className="relative flex items-start px-2">
      <div className="flex items-center h-5">
        <input
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="comments" className="font-medium text-gray-700">
          {title} ({count})
        </label>
      </div>
    </div>
  );
}
