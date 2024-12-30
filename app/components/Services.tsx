import Image from 'next/image';

const Services = () => {
    return (
        <section id="our-services" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="title text-4xl font-bold text-center text-white mb-12">
                    Our Services
                </h2>

                <div className="grid gap-12 md:grid-cols-3">
                    {/* Yoga Service */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <Image
                            src="/web/yoga-service.jpg"
                            alt="Yoga"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Yoga</h3>
                        <p className="text-gray-600">
                            Our yoga classes focus on flexibility, breathing, and mindfulness. Suitable for all skill levels, yoga helps you achieve balance in body and mind.
                        </p>
                    </div>

                    {/* Fitness Service */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <Image
                            src="/web/fitness-service.jpg"
                            alt="Fitness"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fitness</h3>
                        <p className="text-gray-600">
                            Our fitness programs are designed to build strength, endurance, and cardiovascular health. Tailored to your goals, they provide everything you need for a healthier life.
                        </p>
                    </div>

                    {/* Body Sculpting Service */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <Image
                            src="/web/body-sculpting-service.jpg"
                            alt="Body Sculpting"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Body Sculpting</h3>
                        <p className="text-gray-600">
                            Our body sculpting services help target and tone specific areas for a more defined physique. Perfect for those looking to achieve specific body goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
