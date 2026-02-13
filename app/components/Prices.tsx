import { prices } from "../../data/prices";

const PriceList = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 uppercase tracking-wide text-center mb-8">
          Pricing List
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Individual Pricing */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Individual</h3>
            <div className="space-y-4">
              {prices.individual.map((sessionInfo, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-800 rounded-lg"
                >
                  <p className="text-lg">{sessionInfo.title}</p>
                  <p className="text-xl font-bold text-green-400">${sessionInfo.price.toString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Couples Pricing */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Couples</h3>
            <div className="space-y-4">
              {prices.couples.map((sessionInfo, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-800 rounded-lg"
                >
                  <p className="text-lg">{sessionInfo.title}</p>
                  <p className="text-xl font-bold text-green-400">${sessionInfo.price.toString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
