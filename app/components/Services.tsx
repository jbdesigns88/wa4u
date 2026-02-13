import Image from 'next/image';

const Services = () => {
    const allServices = [
        {
            title: "Soulful Meditation",
            description: "Our soulful meditation practice combines physical exercise with mindfulness and emotional awareness. By focusing on your breath and being present in the moment, this practice helps connect your mind and body for a more balanced and fulfilling experience.",
            image: "/web/mindful-service.jpg",
            alt: "Soulful Meditation",
            order: 3,
        },
        {
            title: "Mindful Strengthening",
            description: "Our mindful strengthening sessions integrate mindfulness techniques into strength training exercises. By focusing on proper form, intentional movement, and breath control, you can build strength while staying present and in tune with your body’s sensations.",
            image: "/web/yoga-service.jpg",
            alt: "Mindful Strengthening",
            order: 4,
        },
        {
            title: "Physical Training",
            description: "Our physical training sessions focus on enhancing strength, endurance, flexibility, and overall fitness. Using body weight and modalities such as dumbbells, barbells, and stretch bands, we challenge your body to move beyond its normal patterns, promoting better health and resilience.",
            image: "/web/fitness-service.jpg",
            alt: "Physical Training",
            order: 1,
        },
        {
            title: "Body Manipulation",
            description: "Our body manipulation techniques aim to improve range of motion and overall body function. Through gentle stretching and elongating muscles, tendons, and soft tissues, we help enhance your flexibility and physical performance.",
            image: "/web/body-sculpting-service.jpg",
            alt: "Body Manipulation",
            order: 2,
        },
    ];

    // Sort the services by order
    const sortedServices = allServices.sort((a, b) => a.order - b.order);

    return (
        <section id="our-services" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="title text-4xl font-bold text-center text-white mb-12">
                    Our Services
                </h2>

                <div className="grid gap-12 md:grid-cols-2">
                    {sortedServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <Image
                                src={service.image}
                                alt={service.alt}
                                width={500}
                                height={300}
                                style={{minHeight:'300px'}}
                                className="w-full h-48 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
