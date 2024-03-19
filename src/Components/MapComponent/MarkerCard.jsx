function MarkerCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="text-xl font-bold">{data.pn}</h1>
      <h3 className="text-lg">{data.pa}</h3>
    </div>
  );
}

export default MarkerCard;
