import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Tor Hayloch",
    address: "Minaye Building, Gazebo Square",
    city: "Addis Ababa",
  },
  {
    name: "Deluxe Mall CMC",
    address: "CMC Michael",
    city: "Addis Ababa",
  },
  {
    name: "Jemo 1",
    address: "Next to Delina Mall",
    city: "Addis Ababa",
  },
  {
    name: "Bole Bulbula",
    address: "Mariam Mazoria",
    city: "Addis Ababa",
  },
  {
    name: "Mexico",
    address: "Commerce University",
    city: "Addis Ababa",
  },
  {
    name: "Hawassa",
    address: "Main Branch",
    city: "Hawassa",
  },
];

const Locations = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="luxury-subheading mb-3">Visit Us</p>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl">
            Our Showrooms
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-background p-8 border border-border hover:shadow-card transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-primary flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                    {location.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {location.address}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {location.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-2">
            Call us to schedule a visit
          </p>
          <a
            href="tel:+251974656565"
            className="font-heading text-2xl md:text-3xl text-foreground hover:text-primary transition-colors"
          >
            +251 974 656 565
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
