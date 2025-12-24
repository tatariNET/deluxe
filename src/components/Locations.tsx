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

        {/* Map Embed for main showroom (replace src with your exact location if desired) */}
        <div className="mt-12 border border-border bg-background">
          <iframe
            title="Deluxe Furniture Main Showroom Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0!2d38.75!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sDeluxe%20Furniture!5e0!3m2!1sen!2set!4v1700000000000"
            className="w-full h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
