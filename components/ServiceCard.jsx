export const ServiceCard = ({ service }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col h-full backdrop-blur-lg transition-all hover:bg-white/10">
        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
        <p className="text-white/60 flex-grow mb-4">{service.description}</p>
        <div className="mt-auto text-2xl font-bold text-sky-400">
            {service.price}*
        </div>
    </div>
);
